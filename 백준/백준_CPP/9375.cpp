#include <iostream>
#include <map>
using namespace std;

int main() {
    int tests;
    cin >> tests;

    for (int t = 0; t < tests; t++) {
        map<string, int> clothes;

        int wearables;
        cin >> wearables;

        for (int w = 0; w < wearables; w++) {
            string cloth, type;
            cin >> cloth >> type;

            clothes[type]++;
        }

        int cnt = 1;
        for (auto iter = clothes.begin(); iter != clothes.end(); iter++) {
            cnt *= (iter->second + 1);
        }
        cout << cnt - 1 << '\n';
    }

    return 0;
}