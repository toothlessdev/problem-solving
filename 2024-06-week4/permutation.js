const arr = [1, 2, 3];

function permutation(n, r, depth) {
    if (r === depth) {
        console.log(arr.join(" "));
        return;
    }
    for (let index = depth; index < n; index++) {
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
        permutation(n, r, depth + 1);
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
    }
}

permutation(3, 3, 0);
