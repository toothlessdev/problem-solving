#include <iostream>
#include <string.h>

using namespace std;

int main() {
    int dp[1002][1002] = {0};

    string s1, s2;
    cin >> s1 >> s2;

    int len1 = s1.length();
    int len2 = s2.length();

    for (int i = 1; i <= len1; i++) {
        for (int j = 1; j <= len2; j++) {
            if (i == 0 || j == 0)
                dp[i][j] = 0;
            else if (s1[i - 1] == s2[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else if (s1[i - 1] != s2[j - 1])
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[len1][len2] << '\n';

    return 0;
}