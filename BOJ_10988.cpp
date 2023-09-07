#include <bits/stdc++.h>
using namespace std;

int main() {
    string str;
    cin >> str;

    for (int idx = 0; idx < str.length() / 2; idx++) {
        if (str[idx] != str[str.length() - idx - 1]) {
            cout << 0 << '\n';
            return 0;
        }
    }
    cout << 1 << '\n';

    return 0;
}