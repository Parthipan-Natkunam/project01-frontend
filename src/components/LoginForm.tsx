import * as React from "react";
import {InputGroup, IInputGroupProps, Colors, Button} from "@blueprintjs/core";
import styled from "styled-components";

const FormWrapper = styled.div`
    background-color: ${Colors.DARK_GRAY1};
    color: ${Colors.WHITE};
    padding: 1.5rem;
    display: inline-block;
    border-radius: 9px;
    flex: 0 1 100vw;
    margin: 30px; 
    align-item: center;
    @media screen and (min-width:758px){
        flex: 0 1 calc(100vw - 70%);
        margin: 0;
        border-radius: 0;
    }
`;

const StyledHeading = styled.h3`
    text-align: center;
    margin: 0 auto 0.2rem auto;
    border-bottom: 2px solid ${Colors.DARK_GRAY2};
    padding: 0 0 0.5rem 0;
`;

const StyledInputGroup = styled(InputGroup)<IInputGroupProps>`
    margin: 1rem 0;
    input {
        padding: 1rem;
        border-radius: 11px;
        background-color: ${Colors.BLACK};
        color: ${Colors.WHITE};
        border-color: transparent;
    }
`;

const LoginForm = ():JSX.Element =>{
    return (
        <FormWrapper>
            <StyledHeading>Create An Account</StyledHeading>
            <StyledInputGroup id="email" type="email" placeholder="Enter your Gmail Id"/>
            <StyledInputGroup id="password" type="password" placeholder="Enter your password"/>
            <Button type="submit">Login</Button>
        </FormWrapper>
    );
} 

export default LoginForm;