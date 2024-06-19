// 2020113486 김대건

const fs = require("fs");
const path = require("path");

function findPalindromes(sequence, minLen = 20, maxLen = 25, bufferLen = 10) {
    const palindromes = [];
    for (let i = 0; i < sequence.length - (22 + bufferLen + maxLen); i++) {
        const seq1 = sequence.slice(i, i + 22);
        const buffer = sequence.slice(i + 22, i + 32);
        for (let j = 20; j <= 25; j++) {
            const seq2 = sequence
                .slice(i + 32, i + 32 + j)
                .split("")
                .reverse()
                .join("");
            palindromes.push({ seq1, seq2, buffer, pos: i });
        }
    }
    return palindromes;
}

function localAlignment(seq1, seq2, match = 1, mismatch = -1, gap = -1) {
    const m = seq1.length;
    const n = seq2.length;
    const scoreMatrix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const backtrackMatrix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let maxScore = 0;
    let alignments = [];

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const matchScore = scoreMatrix[i - 1][j - 1] + (seq1[i - 1] === seq2[j - 1] ? match : mismatch);
            const deleteScore = scoreMatrix[i - 1][j] + gap;
            const insertScore = scoreMatrix[i][j - 1] + gap;
            scoreMatrix[i][j] = Math.max(0, matchScore, deleteScore, insertScore);

            if (scoreMatrix[i][j] === matchScore) {
                backtrackMatrix[i][j] = 1;
            } else if (scoreMatrix[i][j] === deleteScore) {
                backtrackMatrix[i][j] = 2;
            } else if (scoreMatrix[i][j] === insertScore) {
                backtrackMatrix[i][j] = 3;
            }

            if (scoreMatrix[i][j] > maxScore) {
                maxScore = scoreMatrix[i][j];
            }
            if (scoreMatrix[i][j] >= 18) {
                alignments.push({ i, j, score: scoreMatrix[i][j] });
            }
        }
    }

    const results = alignments.map(({ i, j, score }) => {
        let alignedSeq1 = "";
        let alignedSeq2 = "";
        while (scoreMatrix[i][j] !== 0) {
            if (backtrackMatrix[i][j] === 1) {
                alignedSeq1 = seq1[i - 1] + alignedSeq1;
                alignedSeq2 = seq2[j - 1] + alignedSeq2;
                i--;
                j--;
            } else if (backtrackMatrix[i][j] === 2) {
                alignedSeq1 = seq1[i - 1] + alignedSeq1;
                alignedSeq2 = "-" + alignedSeq2;
                i--;
            } else if (backtrackMatrix[i][j] === 3) {
                alignedSeq1 = "-" + alignedSeq1;
                alignedSeq2 = seq2[j - 1] + alignedSeq2;
                j--;
            }
        }
        return { score, alignedSeq1, alignedSeq2 };
    });

    return results;
}

if (process.argv.length !== 4) {
    console.log("Usage: node <program name> <inputfile> <outputfile>");
    process.exit(1);
}

const inputFile = path.resolve(process.argv[2]);
const outputFile = path.resolve(process.argv[3]);

fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    const sequence = data.trim();
    const palindromes = findPalindromes(sequence);

    let results = [];
    palindromes.forEach(({ seq1, seq2, buffer, pos }) => {
        const alignmentResults = localAlignment(seq1, seq2);
        alignmentResults.forEach((result) => {
            if (result.score >= 18) {
                results.push({ pos, buffer, ...result });
            }
        });
    });

    const output = results
        .map(
            ({ pos, buffer, score, alignedSeq1, alignedSeq2 }) =>
                `------------------------------\n` + `Position in file: ${pos}\n` + `Buffer: ${buffer}\n` + `Seq 1: ${alignedSeq1}\n` + `Seq 2: ${alignedSeq2}\n` + `Alignment score: ${score}\n`
        )
        .join("\n");

    fs.writeFile(outputFile, output, "utf8", (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Results written to", outputFile);
    });
});
