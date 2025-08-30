#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool isPatternMatched(string pattern, string str) {
    if (pattern.length() - 1 > str.length()) {
        return false;
    }

    size_t star_pos = pattern.find('*');

    for (int i = 0; i < star_pos; i++) {
        if (pattern[i] != str[i]) {
            return false;
        }
    }

    int pattern_idx = pattern.length() - 1;
    int str_idx = str.length() - 1;

    while (pattern_idx > star_pos) {
        if (pattern[pattern_idx] != str[str_idx]) {
            return false;
        }
        pattern_idx--;
        str_idx--;
    }

    return true;
}

int main() {
    int length;
    cin >> length;

    string pattern;
    cin >> pattern;

    for (int i = 0; i < length; i++) {
        string str;
        cin >> str;

        cout << (isPatternMatched(pattern, str) ? "DA" : "NE") << '\n';
    }
}
