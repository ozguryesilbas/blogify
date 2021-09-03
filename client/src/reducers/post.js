import * as types from "../actions/types";

const initialState = {
    posts: []
};

//Reducer: State ve action’ı parametre alan ve yeni state’i dönen pure bir fonksiyondur.
//Action’ın type’ına göre state’i değiştirir ve yeni state’i geri döner.
// Mutlaka state’in güncel bir kopyası geri dönmesi gerekiyor.
// Aksi halde, componentler kendini render etmez.
// Bunu yapmaktaki amaç state’in referansını değiştirmektir.

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_POSTS:
            return {
                ...state, //pure function olmalı, doğrudan state'i değilde kopyasını return ederiz
                posts: action.payload //sadece değiştirmek istediğimiz alanı ifade eder        
            };
        case types.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload] //statedeki postlar aynı kalsın, sadece yeni oluşturulan action.payloaddaki postu post arrayinin en sonuna ekleyelim
            };

        default:
            return{
                ...state,
            };
    }
};

export default postReducer;
