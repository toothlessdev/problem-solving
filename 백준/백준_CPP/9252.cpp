#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

enum PATH {
    NONE = 0,
    UP,
    LEFT,
    DIAG
};

int dp[1002][1002];
PATH path[1002][1002];
vector<char> LCS;

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    int len1 = s1.length(), len2 = s2.length();

    for (int i = 1; i <= len1; ++i) {
        for (int j = 1; j <= len2; ++j) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                path[i][j] = DIAG;
            }
            else if (dp[i - 1][j] >= dp[i][j - 1]) {
                dp[i][j] = dp[i - 1][j];
                path[i][j] = UP;
            }
            else {
                dp[i][j] = dp[i][j - 1];
                path[i][j] = LEFT;
            }
        }
    }

    int x = len1, y = len2;
    while (x > 0 && y > 0 && path[x][y] != NONE) {
        if (path[x][y] == DIAG) {
            LCS.push_back(s1[x - 1]);
            --x;
            --y;
        }
        else if (path[x][y] == UP) {
            --x;
        }
        else {
            --y;
        }
    }
    reverse(LCS.begin(), LCS.end());

    cout << dp[len1][len2] << '\n';
    for (char ch : LCS)
        cout << ch;
    cout << '\n';
    return 0;
}
