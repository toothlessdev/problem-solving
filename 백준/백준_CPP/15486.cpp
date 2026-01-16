#include <algorithm>
#include <iostream>
using namespace std;

int n, arr[2][1500001] = {0}, dp[1500001];

int maxProfit(int d) {
    if (dp[d] != -1)
        return dp[d];
    if (d + arr[0][d] > n + 1) {
        dp[d] = maxProfit(d + 1);
        return dp[d];
    }
    dp[d] = max(maxProfit(d + 1), maxProfit(d + arr[0][d]) + arr[1][d]);
    return dp[d];
}
int main() {
    cin >> n;
    for (int i = 1; i <= n; i++) {
        dp[i] = -1;
        int t, p;
        cin >> t >> p;
        arr[0][i] = t;
        arr[1][i] = p;
    }
    cout << maxProfit(1) << '\n';
    return 0;
}