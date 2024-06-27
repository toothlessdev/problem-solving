# 재귀함수

정의 단계에서 자기 사진을 참조하는 함수
큰 문제를 작은 **부분문제** 로 나눠 풀때 사용

```js
function RecursiveFunction(n) {
    // 기저사례 (종료조건)

    /* 로직 */

    RecursiveFunction(k); // 전달 매개변수가 바뀐다!
}
```

> 1. 반드시 기저사례, 종료조건이 있어야 함
> 2. 사이클이 있다면 쓰면 안된다
> 3. 반복문이 가능하다면 반복문을 사용하는것이 좋다 <br/>(함수 호출 오버헤드 때문!)

### 예시) 팩토리얼

> F(n) = n x n-1 x n-2 x n-3 ...
> <br/>
> F(n-1) = n-1 x n-2 x n-3 ...
> <br/>
> F(n-2) = n-2 x n-3 x n-4 ...

점화식
F(n) = n \* F(n-1)

```cpp
int factorial(int n){
    if(n == 0 || n == 1) return 1;
    return n * factorial(n-1);
}
```
