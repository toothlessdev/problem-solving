#include <bits/stdc++.h>
using namespace std;

int node_size, edge_size;
vector<int> *graph;
bool *isVisited;

void BFS(int start);

int main() {
    cin >> node_size >> edge_size;

    isVisited = new bool[node_size];
    graph = new vector<int>[node_size];

    for (int edge = 0; edge < edge_size; edge++) {
        int from, to;
        cin >> from >> to;

        graph[from - 1].push_back(to - 1);
        graph[to - 1].push_back(from - 1);
    }

    BFS(0);

    int infected = 0;
    for (int node = 1; node < node_size; node++) {
        if (isVisited[node]) infected++;
    }

    cout << infected << '\n';

    delete[] isVisited;
    delete[] graph;
    return 0;
}

void BFS(int start) {
    queue<int> bfs;
    bfs.push(start);
    isVisited[start] = true;

    while (!bfs.empty()) {
        int prev = bfs.front();

        for (int adj : graph[prev]) {
            if (!isVisited[adj]) {
                isVisited[adj] = true;
                bfs.push(adj);
            }
        }
        bfs.pop();
    }
}