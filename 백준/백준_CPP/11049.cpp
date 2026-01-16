#include <iostream>
#include <limits.h>
#include <vector>
using namespace std;

int dp[501][501];
int matrix[501];

int main() {

    int N;
    cin >> N;

    for (int i = 0; i < N; i++) {
        int row, col;
        cin >> row >> col;

        if (i == 0)
            matrix[0] = row;
        matrix[i + 1] = col;
    }

    for (int len = 2; len <= N; len++) {
        for (int i = 1; i <= N - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;

            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + matrix[i - 1] * matrix[k] * matrix[j];
                if (cost < dp[i][j])
                    dp[i][j] = cost;
            }
        }
    }

    cout << dp[1][N] << '\n';
    return 0;
}
