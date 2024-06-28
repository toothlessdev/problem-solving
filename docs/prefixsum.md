# 누적합 Prefix Sum

요소들의 누적된 합의 의미로<br/>
어떤 배열을 기반으로 앞에서 부터 요소들의 **누적된 합** 을 저장해 새로운 배열을 만들어 활용한다

```js
const arr = [1, 10, 11, 100];
const prefixSum = [1, 11, 22, 122];

prefixSum[0] = arr[0];
prefixSum[1] = arr[0] + arr[1];
prefixSum[2] = arr[0] + arr[1] + arr[2];
// ...
```

## 누적 합의 활용

정적 배열 (배열의 요소가 변하지 않음) **구간 합** 을 구할때 시간 복잡도를 줄일 수 있다<br/>
배열의 **구간 쿼리에 대한 합**

(동적 배열의 경우 펜윅트리를 사용해야 함)

`arr[BEGIN] ~ arr[END]` 까지의 구간 합은<br/>
`prefixSum[END] - prefixSum[BEGIN-1]` 과 같다

```js
const arr = new Array();
const prefixSum = new Array();

for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
}

// BEGIN 에서 END 까지의 구간합
console.log(prefixSum[END] - prefixSum[BEGIN - 1]);
```
