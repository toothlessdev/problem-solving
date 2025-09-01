#include <cctype>
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(0);

    int n, m;
    cin >> n >> m;

    map<string, int> nameToNum;
    vector<string> numToName(n + 1);

    for (int i = 1; i <= n; ++i) {
        cin >> numToName[i];
        nameToNum[numToName[i]] = i;
    }

    for (int i = 0; i < m; ++i) {
        string query;
        cin >> query;

        if (isdigit(query[0])) {
            int num = stoi(query);
            cout << numToName[num] << '\n';
        }
        else {
            cout << nameToNum[query] << '\n';
        }
    }

    return 0;
}