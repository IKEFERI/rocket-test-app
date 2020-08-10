import styled from "styled-components";

export const StyledSearchForm = styled.div`
    margin: auto;
    background-color: #fff;
    max-width: 768px;
    text-align: left;
    padding: 40px;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: block;
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 16px;
`;

export const SearchInput = styled.div`
    position: relative;
    svg{
      position: absolute;
      width: 30px;
      fill: #212121;
      top: 8px;
      left: 8px;
    }
`;
export const Input = styled.input`
    display: block;
    padding: 12px 10px;
    padding-left: 46px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    width: 100%;
    border-radius: 4px;
`;

export const Notify = styled.small`
    position: absolute;
`;