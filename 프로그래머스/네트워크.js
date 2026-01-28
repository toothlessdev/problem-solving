class Queue {
    constructor() {
        this.queue = {};
        this.begin = 0;
        this.end = 0;
    }
    push(element) {
        this.queue[this.end++] = element;
    }
    pop() {
        const element = this.queue[this.begin];
        delete this.queue[this.begin++];
        return element;
    }
    size() {
        return this.end - this.begin;
    }
    isEmpty() {
        return this.size() === 0;
    }
}

function solution(n, computers) {
    let isVisited = new Array(computers.length).fill(0);

    function bfs(node, flag) {
        let queue = new Queue();

        queue.push(node);
        isVisited[node] = flag;

        while (!queue.isEmpty()) {
            let current = queue.pop();

            for (let next = 0; next < n; next++) {
                if (computers[current][next] === 1 && isVisited[next] === 0) {
                    isVisited[next] = flag;
                    queue.push(next);
                }
            }
        }
    }

    let flag = 1;
    for (let node = 0; node < n; node++) {
        if (isVisited[node] === 0) {
            bfs(node, flag++);
        }
    }

    return flag - 1;
}
