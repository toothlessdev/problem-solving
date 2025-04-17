#include <iostream>
using namespace std;

void InsertionSort(int arr[], int size);
void PrintArray(int arr[], int size);

int main() {
    int arr[] = {5, 2, 4, 6, 1, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    PrintArray(arr, size);
    InsertionSort(arr, size);
    PrintArray(arr, size);

    return 0;
}

void InsertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];

        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void PrintArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << ' ';
    }
    cout << '\n';
}