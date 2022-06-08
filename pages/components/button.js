import styled from "styled-components"

const Button = (props)=>{
    return(
        <SButton type='button' onClick={props.onClick}>{props.children}</SButton>
    )
}
export default Button

const SButton= styled.button`
    width: 100px;
    text-align: center;
    padding: 8px 16px;
    outline: none;
    font-size: 1rem;
    background: darkturquoise;
    border-radius: 1000px;
    display :block;
    margin: 0px auto;
`;
