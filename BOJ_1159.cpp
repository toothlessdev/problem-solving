#include <bits/stdc++.h>
using namespace std;

int main() {
    int size;
    cin >> size;

    string *str = new string[size];
    int *startsWith = new int['z' - 'a' + 1];

    for (int i = 0; i < 'z' - 'a' + 1; i++) {
        startsWith[i] = 0;
    }

    for (int i = 0; i < size; i++) {
        cin >> str[i];
        startsWith[str[i][0] - 'a']++;
    }

    string result;

    for (int i = 0; i < 'z' - 'a' + 1; i++) {
        if (startsWith[i] >= 5) result += char(i + 'a');
    }

    if (result == "")
        cout << "PREDAJA" << '\n';
    else
        cout << result << '\n';

    return 0;
}