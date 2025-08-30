#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    getline(cin, str);

    for (char &ch : str) {
        if (ch == ' ' || ('0' <= ch && ch <= '9')) {
            continue;
        }
        else if (('A' <= ch && ch <= 'Z' - 13) || ('a' <= ch && ch <= 'z' - 13)) {
            ch = char(ch + 13);
        }
        else {
            ch = char(ch + 13 - ('z' - 'a' + 1));
        }
    }

    cout << str << '\n';
}