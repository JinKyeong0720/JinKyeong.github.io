// API : Application Programming Interface
// ㄴ Open API : 다양한 회사에서 공익의 목적으로, 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료

// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터 
// ... 등등 많음

// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// fetch()로도 구현 가능 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용

// https://youtu.be/QPEUU89AOg8

let page = 1;
let size = 25; // 한 페이지에 보이는 컨텐츠 수(5*5)

const query = document.querySelector(".query");
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("submit", e=>{
    e.preventDefault();         // submit 기본동작(submit의 기본 동작 무시)
    if (query !== ""){
        page = 1;
        searchRequest(query.value, page);
        query.value = "";
    }
});


function searchRequest(query, page){
    $.ajax({ // 세팅정보 오브젝트로 넘겨줌
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`, // url 키값 스트링타입 : 파라미터까지 구성돼있음
        "method": "GET", // 요청 메소드 : 어떤 방식(get, toString 등등)
        "timeout": 0, // 비동기 시간(기본 0)
        "headers": { // 오브젝트 타입으로 따로 구성했음(key value)
            "Authorization": "KakaoAK 11a0270989726c0e03b2a8bf83db098e"
        },
    })
    
    .done((response) => { // 성공했을 때 나오는 화면을 여기서 구현
        console.log(response); 
        const container = document.querySelector(".container");
        container.innerText ="";
        let result = response.document;

        // for문 -> 검색해서 나온 결과 반복
        

    });
}


// container 안에 

        /*
        <div class="container">
        <div class="result-card">
            <img class="book-img" src="/book.png">
            <h4 class="book-title">도서 제목</h4>
            <p class="book-description">도서상세정보</p>
            <span class="price">10000원</span>
            <p class="book-info">
                <span class="author">저자</span>|<span class="publisher">출판사</span>
            </p>
        </div>
        */

        // 새로 생성 및 구성 완료한 result-card element(요소)를 추가
        // 페이지 정보 --> 변수로
        // 가져온 정보를 엘리먼트 안에 넣기
        // 카드 디자인 : 미리캔버스 등 참고