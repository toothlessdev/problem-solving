#include <algorithm>
#include <iostream>
#include <stack>
#define endl "\n"

using namespace std;
stack<char> s;
string str, boom;

string solve() {
    for (int i = 0; i < str.length(); i++) {
        s.push(str[i]);
        int j = 1;
        stack<char> cache;
        while (boom[boom.length() - j] == s.top()) {
            int el = s.top();
            s.pop();
            cache.push(el);
            if (boom.length() == j)
                j = 0;
            j++;
        }
        while (!cache.empty()) {
            s.push(cache.top());
            cache.pop();
        }
        cout << i << ": " << s.size() << "\n";
    }
    string result;
    while (!s.empty()) {
        result.push_back(s.top());
        s.pop();
    }
    reverse(result.begin(), result.end());
    return result;
}
int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(0);

    cin >> str >> boom;

    cout << solve() << endl;

    return 0;
}