
// 동기 -> 순차적으로 처리 // 앞선 프로세스가 끝나야지 다음으로 넘어감
// 비동기 -> 비순차적... 

// 비동기가 효율적이지만 컴퓨터는 순차적으로 하고자 한다.

// Promise 

console.log("hello");

let p = new Promise((resolve, reject) => {
    resolve('hello world'); // 성공
    //reject('hello world'); // 실패
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(' ')[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    })
    .then((메시지) => {
        alert(메시지);
    })
    .catch((메시지) => {
        alert('catch 실행!! :' + 메시지);
    });

console.log("world");
