import axios from 'axios'; // package.json에 들어있는 라이브러리를 가져오는 것.

// 1. HTTP Request & Response와 관련된 기본 설정. 겹치는 URL주소를 반복안하도록.
const config = {
    baseURL: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리한다
function fetchNewsList(){
    return axios.get(`${config.baseURL}news/1.json`); // 백틱(`), 달러($) ES6 문법    
}
function fetchAskList(){
    return axios.get(`${config.baseURL}ask/1.json`); // 백틱(`), 달러($) ES6 문법    
}
function fetchJobsList(){
    return axios.get(`${config.baseURL}jobs/1.json`); // 백틱(`), 달러($) ES6 문법    
}

// 3. 외부에서 사용가능하도록 export 해놓는다.
export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
}