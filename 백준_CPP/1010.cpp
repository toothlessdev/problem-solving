#include <iostream>
using namespace std;

long long combination(int n, int r) {
    long long result = 1;

    if (r > n / 2)
        r = n - r;

    for (int i = 0; i < r; i++) {
        result *= (n - i);
        result /= (i + 1);
    }
    return result;
}

int main() {
    int tests;
    cin >> tests;

    for (int t = 0; t < tests; t++) {
        int n, m;
        cin >> n >> m;
        cout << combination(m, n) << '\n';
    }

    return 0;
}