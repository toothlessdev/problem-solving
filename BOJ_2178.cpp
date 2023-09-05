#include <bits/stdc++.h>
using namespace std;

int x_size, y_size;
int Map[105][105];
int isVisited[105][105];

int BFS(int startX, int startY);

int main() {
    cin >> y_size >> x_size;

    for (int y = 0; y < y_size; y++) {
        for (int x = 0; x < x_size; x++) {
            scanf("%1d", &Map[y][x]);
        }
    }

    cout << BFS(0, 0) << '\n';

    return 0;
}

int BFS(int startX, int startY) {
    const int dx[] = {1, -1, 0, 0};
    const int dy[] = {0, 0, 1, -1};

    queue<pair<int, int>> bfs;
    bfs.push({startY, startX});
    isVisited[startY][startX] = 1;

    while (!bfs.empty()) {
        int x = bfs.front().second;
        int y = bfs.front().first;

        for (int dir = 0; dir < 4; dir++) {
            int X = x + dx[dir];
            int Y = y + dy[dir];

            if ((0 <= X && X < x_size) && (0 <= Y && Y < y_size)) {
                if (isVisited[Y][X] == 0 && Map[Y][X] == 1) {
                    isVisited[Y][X] = isVisited[y][x] + 1;
                    bfs.push({Y, X});
                }
            }
        }
        bfs.pop();
    }
    return isVisited[y_size - 1][x_size - 1];
}
