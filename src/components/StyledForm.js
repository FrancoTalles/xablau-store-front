import styled from "styled-components";

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 50px;
    height: fit-content;
    background: #ffffff;
    border-radius: 3px;
    font-family: 'Poppins', sans-serif;
    max-width: 400px;
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
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        margin-bottom: 25px;
        border-bottom: 2px solid ${props => props.color};
        h2{
            font-size: 12px;
            color: #333333;
            line-height: 1.5;
        }
    }
    a{
        font-size: 12px;
        color: ${props => props.color};
        margin-top: 20px;
    }
`;