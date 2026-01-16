#include <iostream>
#include <queue>
#include <vector>
using namespace std;

typedef struct {
    int x, y;
} Position;

int xSize, ySize;
int map[501][501];

Position dirs[4] = {
    {0, 1},
    {0, -1},
    {1, 0},
    {-1, 0},
};

queue<Position> tasks;

int BFS(Position p) {
    queue<Position> q;

    q.push(p);
    while (!q.empty()) {
        Position current = q.front();
        q.pop();

        for (Position dir : dirs) {
            Position next = {
                current.x + dir.x,
                current.y + dir.y,
            };

            if (!((0 <= next.x && next.x < xSize) && (0 <= next.y && next.y < ySize)))
                continue;
            if (map[next.y][next.x] >= map[current.y][current.x])
                continue;

            tasks.push(next);
        }
    }
}

int main() {
    cin >> ySize >> xSize;

    for (int y = 0; y < ySize; y++) {
        for (int x = 0; x < xSize; x++) {
            cin >> map[y][x];
        }
    }

    for (int y = 0; y < ySize; y++) {
        for (int x = 0; x < xSize; x++) {
            cout << map[y][x] << ' ';
        }
        cout << '\n';
    }

    return 0;
}