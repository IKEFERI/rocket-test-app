import styled from "styled-components";

export const Post__Item = styled.div`
    background-color: #282c34;
    color: #fff;
    text-align: left;
    flex: 1 1 22%;
    max-width: 22%;
    min-width: 280px;
    padding: 20px;
    margin: 20px;
    border-radius: 4px;
    transition: all ease 0.15s;
    &:hover{
        background-color: #3a3c44;
    }
`;
export const Post__Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const Post__Body = styled.div`
    font-size: 16px;
    margin-bottom: 20px;
`;
export const Userinfo = styled.div`
    background-color: #628290;
    color: #ffffff;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
`;
export const Userinfo__Item = styled.div`
    padding: 8px;
    border-bottom: solid 2px #282c34;
    &:last-of-type{
        border-bottom: none;
    }
`;