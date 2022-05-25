import styled from "styled-components"
import MediaQuery from 'react-responsive'

const Hamburger =(props)=>{
    return(
        <MediaQuery maxWidth={400}>
        <SDiv onClick={props.onClick}>
            <p className={props.type ? 'get' : ''}></p>
            <p className={props.type ? 'get' : ''}></p>
            <p className={props.type ? 'get' : ''}></p>
        </SDiv>
        </MediaQuery>
    )
}
export default Hamburger

const SDiv = styled.section`
    display: block;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 2; 
    transition: 0.3s;
    &:hover{
        transform: translateY(-4px)
    }
    
    p{
        position: absolute;
        width: 30px;
        height: 6px;
        background: #c98d4d;
        transition: 0.3s;
        &:first-of-type{
            border-radius: 2px 2px 0 0/4px 4px 0 0;
            top: 0px;
            transform: rotate(0deg);
            &.get{
                border-radius: 0;
                transform: rotate(45deg) ;
                top: 8px;
                height: 4px;
                background: #33f;
            }
        }
        &:nth-of-type(2){
            width: 32px;
            background: #5f3322;
            box-sizing: border-box;
            border-radius: 2px;
            top: 8px;
            height: 8px;
            right: -1px;
            border-top: 2px solid #ffd323;
            &.get{
                transform: scale(0);
            }
        }
        &:last-of-type{
            transform: rotate(0deg);
            top: 18px;
            &.get{
                transform: rotate(-45deg);
                top: 8px;
                height: 4px;
                background: #3f3;
            }
    }

    }
`