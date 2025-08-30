#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cin >> str;

    bool isPalindrome = true;
    char *begin = &str[0];
    char *end = &str[str.length() - 1];

    while (begin <= end) {
        if (*begin == *end) {
            begin++;
            end--;
            continue;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    cout << int(isPalindrome) << '\n';

    return 0;
}