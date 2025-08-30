#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;

int length;
vector<string> names;
map<char, int> availableFirstNames;

int main() {
    cin >> length;
    names.resize(length);

    for (string &name : names) {
        cin >> name;

        char firstLetter = name[0];

        if (availableFirstNames.find(firstLetter) == availableFirstNames.end()) {
            availableFirstNames.insert({firstLetter, 1});
        }
        else {
            availableFirstNames[firstLetter]++;
        }
    }

    bool isPREDAJA = true;
    for (auto availableFirstName : availableFirstNames) {
        if (availableFirstName.second >= 5) {
            cout << availableFirstName.first;
            isPREDAJA = false;
        }
    }

    if (isPREDAJA)
        cout << "PREDAJA" << '\n';
}