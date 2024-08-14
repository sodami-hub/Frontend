// fetch -> Promise 의 개념이 포함되어있다. 먼저 fetch를 그냥 이해하고 외우자.

// CRUD 실습!!!


fetch('https://test.api.weniv.co.kr/mall')
    .then((data) => data.json())
    .then((data) => {
        console.log(data)
        return data[0];
    })  // 통신이 성공했을 때. 모든 data 출력 data[0]을 다음 .then으로 넘김
    .then((data) => {
        console.log(data);
    }) // data[0]만 받아서 출력
    .catch((error) => {
        console.log(error)
    })  // 통신이 실패했을 때.

    ////////////
    // 이 API는 30분 마다 갱신되는 API 이다.
    // 중간에 초기화 되더라도 놀라지 마세요.
    // 저희 서버로 공격하지 마세요.


    // 블로그에 글 올려보기 POST

fetch("https://eduapi.weniv.co.kr/537/blog")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

fetch("https://eduapi.weniv.co.kr/537/blog/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

fetch("https://eduapi.weniv.co.kr/537/blog", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "test 537",
            content: "test 537",
        }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));


    // 게시글 수정 PUT

fetch("https://eduapi.weniv.co.kr/537/blog/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "test PUT",
            content: "test PUT ",
        }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

    fetch("https://eduapi.weniv.co.kr/537/blog/2", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "!!!!!",
            content: "!!!!!!!!!",
        }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

    // 게시글 삭제 : delete

    fetch("https://eduapi.weniv.co.kr/537/blog/1", {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));