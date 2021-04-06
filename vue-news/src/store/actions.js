import {fetchNewsList, fetchAskList, fetchJobsList} from '../api/index.js'

export default{
    // context라는 인자가 제공된다. 이걸로 mutation 호출가능함.
    FETCH_NEWS(context) { 
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
                // mutation 안에 있는 SET_NEWS 함수가 실행된다.
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK(context) { 
        fetchAskList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_ASK', response.data);
                // mutation 안에 있는 SET_NEWS 함수가 실행된다.
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS(context) { 
        fetchJobsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_JOBS', response.data);
                // mutation 안에 있는 SET_NEWS 함수가 실행된다.
            })
            .catch(error => {
                console.log(error);
            })
    }
}