import * as types from "../actions/types";

const initialState = {
    posts: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_POSTS:
            return {
                ...state, //pure function olmalı, doğrudan state'i değilde kopyasını return ederiz
                posts: action.payload //sadece değiştirmek istediğimiz alanı ifade eder        
            };

        default:
            return{
                ...state,
            };
    }
};

export default postReducer;
