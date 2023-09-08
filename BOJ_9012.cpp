#include <bits/stdc++.h>
using namespace std;

bool isVPS(string str);

int main() {
    int testSize;
    cin >> testSize;

    bool *test = new bool[testSize];

    for (int t = 0; t < testSize; t++) {
        string str;
        cin >> str;

        if (isVPS(str))
            test[t] = true;
        else
            test[t] = false;
    }

    for (int t = 0; t < testSize; t++) {
        cout << (test[t] ? "YES" : "NO") << '\n';
    }

    return 0;
}

bool isVPS(string str) {
    stack<char> st;

    for (char ch : str) {
        if (ch == '(') {
            st.push('(');
        }
        else if (ch == ')' && !st.empty() && st.top() == '(') {
            st.pop();
        }
        else {
            return false;
        }
    }

    if (!st.empty())
        return false;
    return true;
}