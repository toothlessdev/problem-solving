#include <bits/stdc++.h>
using namespace std;

int main() {
    int sum = 0;
    int arr[3], from[3], to[3];
    cin >> arr[0] >> arr[1] >> arr[2];

    for (int i = 0; i < 3; i++) {
        cin >> from[i] >> to[i];
    }

    int min_from = (from[0] < from[1] ? from[0] : from[1]);
    min_from = (min_from < from[2] ? min_from : from[2]);

    int max_to = (to[0] > to[1] ? to[0] : to[1]);
    max_to = (max_to > to[2] ? max_to : to[2]);

    for (int t = min_from; t <= max_to; t++) {
        int current = 0;
        if (from[0] <= t && t < to[0]) current++;
        if (from[1] <= t && t < to[1]) current++;
        if (from[2] <= t && t < to[2]) current++;

        // cout << "t : " << t << ", current : " << current << '\n';

        sum += arr[current - 1] * current;
    }

    cout << sum << '\n';
    return 0;
}