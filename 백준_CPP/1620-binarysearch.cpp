#include <algorithm>
#include <cctype>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int n, tests;
vector<pair<string, int>> dict;
vector<pair<string, int>> sortedByName;

bool compareByName(pair<string, int> e1, pair<string, int> e2) {
    return e1.first < e2.first;
}

int findByName(string name) {
    int begin = 0, end = n - 1;

    while (begin <= end) {
        int mid = (begin + end) / 2;

        if (sortedByName[mid].first == name)
            return sortedByName[mid].second;
        else if (sortedByName[mid].first > name) {
            end = mid - 1;
        }
        else if (sortedByName[mid].first < name) {
            begin = mid + 1;
        }
    }
    return -1;
}

string findByIndex(int index) {
    return dict[index - 1].first;
}

// bool isDigit(string str) {
//     for (auto ch : str) {
//         if (!('0' <= ch && ch <= '9'))
//             return false;
//     }
//     return true;
// }

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(0);

    cin >> n >> tests;

    for (int i = 0; i < n; i++) {
        string name;
        cin >> name;
        dict.push_back({name, i + 1});
    }

    sortedByName.assign(dict.begin(), dict.end());
    sort(sortedByName.begin(), sortedByName.end(), compareByName);

    for (int t = 0; t < tests; t++) {
        string query;
        cin >> query;

        if (isdigit(query[0])) {
            cout << findByIndex(stoi(query)) << '\n';
        }
        else {
            cout << findByName(query) << '\n';
        }
    }

    return 0;
}