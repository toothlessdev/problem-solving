#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> arr;

int main() {
    cin >> n;
    arr.resize(n);
    for (auto &element : arr) {
        cin >> element;
    }

    int *begin = &arr[0], *end = &arr[n - 1];

    sort(arr.begin(), arr.end());

    int n1, n2;
    int closestToZero = INT_MAX;

    while (begin < end) {
        int sum = *begin + *end;

        if (abs(sum) < closestToZero) {
            closestToZero = abs(sum);
            n1 = *begin;
            n2 = *end;
        }

        if (sum < 0) {
            begin++;
        }
        else {
            end--;
        }
    }

    cout << n1 << " " << n2 << '\n';

    return 0;
}