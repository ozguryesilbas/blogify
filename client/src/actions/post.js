import * as types from "./types";

export const fetchPosts = () =>{
    return{
        type: types.FETCH_POSTS,
        payload: []  //veriyi taşıdıkları alan, sonrasında mondodbden alıcaz
    }
}


// örneğin uygulamanın her hangi bir yerinde fetchPosts metodu bir butona basma sonucunda aşağıdai gibi çağrılır
// dispatchEvent(fetchPosts())
// böylece bu metoda girer ve tipi FETCH_POSTS olan bir action fırlatılır
// payload olarak ilgili posts lar da buraya eklenir
// bu actionı reducer switch case yapısıyla yakalar
// bu noktada yeni state payloaddaki gelen postlara göre güncellenip hazırlanır