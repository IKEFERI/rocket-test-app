import React from "react";
import {serverAPI} from "../API/api";

const SET_USERS = "SET_USERS";
const SET_POSTS = "SET_POSTS";

const INCERT_POSTS_IN_USER = "INCERT_POSTS_IN_USER";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

let initState = {
    postsSearch: [],
    postsInitOutput: [],
    users: [],
    posts: [],
    isFetching: false
}


const MainReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.values
            };
        case SET_POSTS:
            return {
                ...state,
                posts: action.values
            };
        case INCERT_POSTS_IN_USER:
            return {
                ...state,
                postsInitOutput: [
                    ...state.posts.map(p => {
                        return {
                            ...p,
                            user: state.users.filter(item => item.id === p.userId)[0]
                        }
                    })
                ]
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                postsSearch: action.value.length >= 3 ? state.postsInitOutput.filter(item => (item.title.toLowerCase().indexOf(action.value.toLowerCase()) !== -1) ||
                    (item.user.name.toLowerCase().indexOf(action.value.toLowerCase()) !== -1) ||
                    (item.user.username.toLowerCase().indexOf(action.value.toLowerCase()) !== -1) ||
                    (item.body.toLowerCase().indexOf(action.value.toLowerCase()) !== -1)) : [],
                valueIsDef: action.value.length !== 0
            }
        default:
            return state;
    }
}
export const setSearchResults = (value) => ({
    type: SET_SEARCH_RESULTS,
    value
});
export const setUsersAC = (values) => ({
    type: SET_USERS,
    values
});

export const setPostsAC = (values) => ({
    type: SET_POSTS,
    values
});

export const concatUsersPosts = () => ({
    type: INCERT_POSTS_IN_USER
});

export const getUsers = () => (dispatch) => {
    return serverAPI.getUsersServ().then(response => {
        dispatch(setUsersAC(response));
    });
};
export const getPosts = () => (dispatch) => {
   return serverAPI.getPostsServ().then(response => {
        dispatch(setPostsAC(response));
    });
};

export default MainReducer;