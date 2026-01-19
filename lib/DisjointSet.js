module.exports = class DisjointSet {
    constructor(n) {
        this.parent = Array(n + 1)
            .fill(0)
            .map((_, i) => i);
        this.rank = Array(n + 1).fill(0);
    }

    find(n) {
        if (this.parent[n] === n) return n;
        return (this.parent[n] = this.find(this.parent[n]));
    }

    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);

        if (rootA === rootB) return false;

        if (this.rank[rootA] < this.rank[rootB]) {
            this.parent[rootA] = rootB;
        } else if (this.rank[rootA] > this.rank[rootB]) {
            this.parent[rootB] = rootA;
        } else {
            this.parent[rootB] = rootA;
            this.rank[rootA]++;
        }

        return true;
    }
};
