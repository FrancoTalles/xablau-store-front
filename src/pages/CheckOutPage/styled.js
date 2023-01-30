import styled from "styled-components";

export const ButtonDiv= styled.div`
    width: 100%;
    display: flex;
    column-gap: 15px;
    margin-bottom: 30px;
`

export const ScreenContainer= styled.div`
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    padding: 70px 20px;
`;

export const ErrorParagraph = styled.p`
    color: red;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
`;

export const FormContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    height: fit-content;
    background: #ffffff;
    border-radius: 3px;
    font-family: 'Poppins', sans-serif;
    max-width: 800px;
    width: 100%;
    form{
        width: 100%;
    }
    h1{
        font-weight: 700;
        font-size: 28px;
        color: #333333;
        text-align: center;
        margin-bottom: 15px;
    }
`;

export const InputDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        margin-bottom: 30px;
        h2{
            font-size: 16px;
            color: #333333;
            line-height: 1.5;
        }
        div{
            display: flex;
            flex-direction: row;
            column-gap: 20px;
            margin-bottom: 20px;
            width:100%;
        }
`

export const StyledInput = styled.input`
   font-size: 14px;
    color: #333;
    display: block;
    width: 100%;
    height: 35px;
    background: 0 0;
    border: none;
    border-bottom: 2px solid #a2103b;;
    outline: none;
    &::placeholder{
        color: "#b41241";
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }
`


export const Item = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 30px;
    border: none;
    background-color: #ffffff;
    color: #a2103b;
    border-radius: 4.5px;
    margin-bottom: 10px;

`;
