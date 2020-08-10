import React from "react";
import {Post__Body, Post__Item, Post__Title, Userinfo, Userinfo__Item} from "../Posts/StylePosts";

//.replace(eval('/' + props.valueFromInput + '/g'), <span style="background: yellow"> {value} </span>)
const Post = (props) => {

    return (
        <Post__Item>
            <small>id: {props.id}, userId: {props.userId}</small>
            <Post__Title>
                {props.title }
            </Post__Title>
            <Post__Body>
                {props.body}
            </Post__Body>
            <Userinfo>
                <Userinfo__Item>
                    {props.user.name}
                </Userinfo__Item>
                <Userinfo__Item>
                    {props.user.username}
                </Userinfo__Item>
            </Userinfo>
        </Post__Item>
    )

}

export default Post;
