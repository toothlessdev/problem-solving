#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

typedef struct Meeting {
    long long start, finish;
    bool operator<(const Meeting &rhs) {
        return finish == rhs.finish ? start < rhs.start : finish < rhs.finish;
    }
} Meeting;

int main() {
    int N;
    cin >> N;

    vector<Meeting> meetings(N);
    for (Meeting &meeting : meetings)
        cin >> meeting.start >> meeting.finish;

    sort(meetings.begin(), meetings.end());

    long long lastEnd = -1;
    int count = 0;

    for (Meeting meeting : meetings) {
        if (meeting.start >= lastEnd) {
            count++;
            lastEnd = meeting.finish;
        }
    }

    cout << count << '\n';
    return 0;
}
