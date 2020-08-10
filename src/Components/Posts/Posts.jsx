import Post from "../Post/Post";
import React from "react";
import styled from "styled-components";

const StyledPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Posts = (props) =>{

    return <StyledPosts>
        {props.postsOutput.length !== 0 ? props.postsOutput.map(d => <Post key={d.id} {...d}/>) : <b>{props.notify}</b>}
    </StyledPosts>
}

export default Posts;