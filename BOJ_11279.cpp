#include <iostream>
#include <algorithm>
using namespace std;

template <typename T> class MaxHeap{
	private:
		T *heap;
		int capacity;
		int heapSize;
	public:
		MaxHeap(int capacity);
		~MaxHeap();
		bool empty();
		void push(T element);
		void pop();
		void print();
		T top();
};

int main() {
	ios_base::sync_with_stdio(false);
	std::cin.tie(nullptr);
    std::cout.tie(nullptr);

	#ifdef TEST
	freopen("input1.txt", "r", stdin);
	#endif

	MaxHeap<int> maxheap(100000);

	int op_size;
	scanf("%d", &op_size);


	while(op_size--){
		int element;
		scanf("%d", &element);

		if(element == 0){
			if(maxheap.empty()){
				printf("0\n");
			}
			else{
				printf("%d\n", maxheap.top());
				maxheap.pop();
			}
		}
		else{
			maxheap.push(element);
		}
	}

	#ifdef TEST
	fclose(stdin);
	#endif
	return 0;
}

template<typename T> MaxHeap<T>::MaxHeap(int capacity){
	this->capacity = capacity;
	heap = new T[capacity];
	heapSize = 0;
	heap[0] = -1;
}

template<typename T> MaxHeap<T>::~MaxHeap(){
	delete[] heap;
}

template<typename T> void MaxHeap<T>::push(T element){
	heapSize++;
	//[1] 마지막 인덱스에 원소 삽입
	heap[heapSize] = element;

	//[2] 최대힙의 조건(부모노드 >= 자식노드)에 맞게 힙 재정렬(swap)
	int idx = heapSize;
    //루트 노드 이거나, 조건을 만족할 경우
	while((idx != 1) && (heap[idx/2] <= heap[idx])){ 
		swap(heap[idx], heap[idx/2]);
		idx /= 2;
	}
}

template<typename T> void MaxHeap<T>::pop(){
	//[1] 루트노드를 pop하고 마지막 노드를 루트 노드로 올린다.
	heap[1] = heap[heapSize];
	heapSize--;	

	//[2] 루트노드에서 부터 자식노드와 swap하며 힙 재정렬
	int idx = 1;

	while(idx <= heapSize){
		
		int leftIdx = idx*2;
		int rightIdx = idx*2+1;

		// [2-1] 둘다 heap범위 만족
		if((leftIdx <= heapSize) && (rightIdx <= heapSize)){
			// [2-1-1] 왼쪽 자식이 오른쪽 자식보다 크고, 부모보다도 크면
			if((heap[leftIdx] >= heap[rightIdx]) && (heap[leftIdx] > heap[idx])) {
				swap(heap[leftIdx], heap[idx]);
				idx = leftIdx;
			}
			// [2-1-2] 오른쪽 자식이 왼쪽 자식보다 크고, 부모보다도 크면
			else if((heap[leftIdx] < heap[rightIdx]) && (heap[rightIdx] > heap[idx])){ 
				swap(heap[rightIdx], heap[idx]);
				idx = rightIdx;
			}
			else break;
		}
		// [2-2] 왼쪽 자식만 heap 범위 만족
		else if((leftIdx <= heapSize) && (rightIdx > heapSize)){
			if(heap[leftIdx] > heap[idx]){
				swap(heap[leftIdx], heap[idx]);
				idx = leftIdx;
			}
			else break;
		}
		// [2-3] 오른쪽 자식만 heap 범위 만족
		else if((rightIdx <= heapSize) && (leftIdx > heapSize)) {
			if(heap[rightIdx] > heap[idx]){
				swap(heap[rightIdx], heap[idx]);
				idx = rightIdx;
			}
			else break;
		}
		else break;
	}
}

template<typename T> void MaxHeap<T>::print(){
	printf("heap[] = {");
	for(int i = 1 ; i <= heapSize ;i++){
		printf("%d, ", heap[i]);
	}
	printf("}\n");
}

template<typename T> T MaxHeap<T>::top(){
	return heap[1];	// 루트 노드 리턴
}

template<typename T> bool MaxHeap<T>::empty(){
	return this->heapSize == 0;
}