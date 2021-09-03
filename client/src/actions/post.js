import * as types from "./types";
import * as api from "../api/index.js";

// örneğin uygulamanın her hangi bir yerinde fetchPosts metodu bir butona basma sonucunda aşağıdai gibi çağrılır
// dispatchEvent(fetchPosts())
// böylece bu metoda girer ve tipi FETCH_POSTS olan bir action fırlatılır
// payload olarak ilgili posts lar da buraya eklenir
// bu actionı reducer switch case yapısıyla yakalar
// bu noktada yeni state payloaddaki gelen postlara göre güncellenip hazırlanır

//aşağıdaki yapıda react thunk ile async işlem yaptık
export const fetchPosts = async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({
            type: types.FETCH_POSTS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => { //birinci parametre olarak post 2. parametre olaraksa asynv dispatch aldı
    try {
        const {data} = await api.createPost(post);
        dispatch({
            type: types.CREATE_POST,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
}