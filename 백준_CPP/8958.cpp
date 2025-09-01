#include <iostream>
#include <string>

using namespace std;

int main() {
    int num_test_cases;
    cin >> num_test_cases;

    for (int i = 0; i < num_test_cases; ++i) {
        string result;
        cin >> result;

        int totalScore = 0;
        int score = 0;

        for (char c : result) {
            if (c == 'O') {
                score++;
                totalScore += score;
            }
            else {
                score = 0;
            }
        }

        cout << totalScore << '\n';
    }

    return 0;
}