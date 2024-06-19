import sys

def find_palindromes(sequence, min_len=20, max_len=25, buffer_len=10):
    palindromes = []
    for i in range(len(sequence) - (22 + buffer_len + max_len)):
        seq1 = sequence[i:i+22]
        buffer = sequence[i+22:i+32]
        for j in range(20, 26):
            seq2 = sequence[i+32:i+32+j][::-1]
            palindromes.append((seq1, seq2, i))
    return palindromes

def local_alignment(seq1, seq2, match=1, mismatch=-1, gap=-1):
    m, n = len(seq1), len(seq2)
    score_matrix = [[0 for _ in range(n+1)] for _ in range(m+1)]
    backtrack_matrix = [[0 for _ in range(n+1)] for _ in range(m+1)]
    
    max_score = 0
    max_pos = None
    alignments = []

    for i in range(1, m+1):
        for j in range(1, n+1):
            match_score = score_matrix[i-1][j-1] + (match if seq1[i-1] == seq2[j-1] else mismatch)
            delete = score_matrix[i-1][j] + gap
            insert = score_matrix[i][j-1] + gap
            score_matrix[i][j] = max(0, match_score, delete, insert)

            if score_matrix[i][j] == match_score:
                backtrack_matrix[i][j] = 1
            elif score_matrix[i][j] == delete:
                backtrack_matrix[i][j] = 2
            elif score_matrix[i][j] == insert:
                backtrack_matrix[i][j] = 3

            if score_matrix[i][j] > max_score:
                max_score = score_matrix[i][j]
                max_pos = (i, j)
            if score_matrix[i][j] >= 18:
                alignments.append((i, j, score_matrix[i][j]))

    results = []
    for i, j, score in alignments:
        aligned_seq1, aligned_seq2 = '', ''
        while score_matrix[i][j] != 0:
            if backtrack_matrix[i][j] == 1:
                aligned_seq1 = seq1[i-1] + aligned_seq1
                aligned_seq2 = seq2[j-1] + aligned_seq2
                i -= 1
                j -= 1
            elif backtrack_matrix[i][j] == 2:
                aligned_seq1 = seq1[i-1] + aligned_seq1
                aligned_seq2 = '-' + aligned_seq2
                i -= 1
            elif backtrack_matrix[i][j] == 3:
                aligned_seq1 = '-' + aligned_seq1
                aligned_seq2 = seq2[j-1] + aligned_seq2
                j -= 1
        results.append((max_pos, score, aligned_seq1, aligned_seq2))

    return results

if __name__ == "__main__":
    input_file = sys.argv[1]
    
    with open(input_file, 'r') as file:
        sequence = file.read().strip()
    
    palindromes = find_palindromes(sequence)
    
    results = []
    for seq1, seq2, pos in palindromes:
        alignment_results = local_alignment(seq1, seq2)
        for result in alignment_results:
            max_pos, score, aligned_seq1, aligned_seq2 = result
            if score >= 18:
                results.append((pos, score, aligned_seq1, aligned_seq2))
    
    with open("output.txt", 'w') as file:
        for pos, score, aligned_seq1, aligned_seq2 in results:
            file.write("------------------------------\n")
            file.write(f"Position in file: {pos}\n")
            file.write(f"Seq 1: {aligned_seq1}\n")
            file.write(f"Seq 2: {aligned_seq2}\n")
            file.write(f"Alignment score: {score}\n")
            file.write("\n")
