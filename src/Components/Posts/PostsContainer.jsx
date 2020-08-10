import React, {useCallback, useEffect} from 'react';
import {concatUsersPosts, getPosts, getUsers} from "../../Redux/MainReducer";
import {useDispatch, useSelector} from "react-redux";
import Posts from "./Posts";


const PostsContainer = () => {
    const dispatch = useDispatch();
    const postsOutput = useSelector(state => state.UsersState.postsInitOutput);
    const getPostsDispatch = useCallback(() => dispatch(getPosts()), [dispatch]);
    const getUsersDispatch = useCallback(() => dispatch(getUsers()), [dispatch]);
    const concatUP = useCallback(() => dispatch(concatUsersPosts()), [dispatch]);

    const initializePosts = () => {
        let getUsersPromise = getUsersDispatch();
        let getPostsPromise = getPostsDispatch();
        Promise.all([getUsersPromise, getPostsPromise]).then(() => {
            concatUP();
        })
    }

    useEffect(() => {
        initializePosts(dispatch);
    }, [initializePosts])

    return <Posts postsOutput={postsOutput} notify={"LOADING..."}/>;
}


export default PostsContainer;
