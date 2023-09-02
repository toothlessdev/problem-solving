#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    string str;
    vector<int> count;
    cin >> str;

    for (char ch = 'a'; ch <= 'z'; ch++) count.push_back(0);

    for (char ch : str) {
        count[ch - 'a']++;
    }

    for (int c : count) {
        cout << c << ' ';
    }
    cout << '\n';

    return 0;
}