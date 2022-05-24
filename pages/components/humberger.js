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
        background: rgba(255,0,0,0.5);
        transition: 0.3s;
        &:first-of-type{
            top: 0px;
            transform: rotate(0deg);
            &.get{
                transform: rotate(45deg) ;
                top: 8px;
                height: 4px;
                background: #33f;
            }
        }
        &:nth-of-type(2){
            top: 8px;
            &.get{
                transform: scale(0);
            }
        }
        &:nth-of-type(3){
            transform: rotate(0deg);
            top: 16px;
            &.get{
                transform: rotate(-45deg);
                top: 8px;
                height: 4px;
                background: #3f3;
            }
    }

    }
`