#include <bits/stdc++.h>
using namespace std;

int mapSize;
int Map[30][30];
int isVisited[30][30];
vector<pair<int, int>> startPoint;
void BFS(int startX, int startY, int flag);

int main() {
    cin >> mapSize;

    for (int y = 0; y < mapSize; y++) {
        for (int x = 0; x < mapSize; x++) {
            scanf("%1d", &Map[y][x]);
            if (Map[y][x] == 1) {
                startPoint.push_back({y, x});
            }
        }
    }

    int flag = 0;
    vector<int> flagCount;
    for (pair<int, int> start : startPoint) {
        if (isVisited[start.first][start.second] == 0) {
            BFS(start.second, start.first, ++flag);
        }
    }

    for (int f = 1; f <= flag; f++) {
        int count = 0;
        for (int y = 0; y < mapSize; y++) {
            for (int x = 0; x < mapSize; x++) {
                if (isVisited[y][x] == f) {
                    count++;
                }
            }
        }
        flagCount.push_back(count);
    }

    sort(flagCount.begin(), flagCount.end());

    cout << flag << '\n';

    for (int flagcount : flagCount) {
        cout << flagcount << '\n';
    }

    return 0;
}

void BFS(int startX, int startY, int flag) {
    const int dx[] = {1, -1, 0, 0};
    const int dy[] = {0, 0, 1, -1};

    queue<pair<int, int>> bfs;
    isVisited[startY][startX] = flag;
    bfs.push({startY, startX});

    while (!bfs.empty()) {
        for (int dir = 0; dir < 4; dir++) {
            int X = bfs.front().second + dx[dir];
            int Y = bfs.front().first + dy[dir];

            if ((0 <= X && X <= mapSize) && (0 <= Y && Y <= mapSize)) {
                if (isVisited[Y][X] == 0 && Map[Y][X] == 1) {
                    bfs.push({Y, X});
                    isVisited[Y][X] = flag;
                }
            }
        }
        bfs.pop();
    }
}