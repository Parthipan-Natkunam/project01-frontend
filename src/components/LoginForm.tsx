import * as React from "react";
import {InputGroup, IInputGroupProps, Colors, Button} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import styled from "styled-components";
import GIcon from "../assets/googleIcon.svg";

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
        box-shadow: 4px 1px 7px 6px rgba(24,32,38,0.55);
    }
`;

const StyledHeading = styled.h3`
    text-align: center;
    margin: 0.5rem 0 1.8rem 0;
    border-bottom: 2px solid ${Colors.DARK_GRAY2};
    padding-bottom: 1rem;
`;

const StyledInputGroup = styled(InputGroup)<IInputGroupProps>`
    margin: 1rem 0;
    border-radius: 11px;
    display: flex;
    align-items: center;
    background-color: ${Colors.BLACK};
    span{
        padding: 0 1rem;
        margin: 3px 0.5rem 0 0;
        svg {
            fill: ${Colors.WHITE};
        }
    }
    input {
        padding: 1rem;
        border-radius: 11px;
        background-color: ${Colors.BLACK};
        color: ${Colors.WHITE};
        border-color: transparent;
        width: calc(100% - 2rem);
    }
`;

const StyledButton = styled(Button)`
    background-color: ${Colors.INDIGO1};
    color: ${Colors.WHITE};
    border-color: transparent;
    margin: 1.25rem auto;
    width: calc(80% - 2rem);
    padding: 1rem;
    cursor: pointer;
    border-radius: 11px;
    font-size: 1.05rem;
    span{
        margin: 3px 0.5rem 0 0;
        svg {
            fill: ${Colors.WHITE};
        }
    }
`;

const HCenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const Divider = styled.hr`
    height: 2px;
    background: ${Colors.DARK_GRAY2};
    border-color: ${Colors.DARK_GRAY2};
    margin: 1.5rem 0;
`;

const RowSeparator = styled.div `
    position: relative;
    margin-bottom: 1rem;
    strong{
        position: absolute;
        top:50%;
        left:50%;
        padding: 0 0.8rem 0 0.5rem;
        transform: translate(-50%,-40%);
        background-color: ${Colors.DARK_GRAY1};
        color: ${Colors.DARK_GRAY4};
        width:20px;
        height:20px;
        border-radius: 50%;
    }
`;

const IconImage = styled.img`
    width: 25px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
`;

const FooterContainer = styled.div`
    margin: 2rem 0 1rem 0;
    span{
        margin: 0.5rem;
    }
    a{
        color: ${Colors.INDIGO3};
        text-decoration:none;
        &:hover,&:active,&:visited{
            color: ${Colors.INDIGO2};
        }
    }
`;

const LoginForm = ():JSX.Element =>{
    return (
        <FormWrapper>
            <StyledHeading>Login to Your Account</StyledHeading>
            <StyledInputGroup id="email" type="email" placeholder="Enter your Gmail Id" leftIcon={IconNames.ENVELOPE}/>
            <StyledInputGroup id="password" type="password" placeholder="Enter your password" leftIcon={IconNames.LOCK}/>
            <HCenteredContainer>
                <StyledButton type="submit" intent="primary" icon={IconNames.LOG_IN}>Login</StyledButton>
            </HCenteredContainer>
            <RowSeparator>
                <Divider/>
                <strong>OR</strong>
            </RowSeparator>
            <HCenteredContainer>
                <IconImage src={GIcon} alt="google icon"/>
                <StyledButton>Sigin with Google</StyledButton>
            </HCenteredContainer>
            <HCenteredContainer>
                <FooterContainer>
                    <p>Don't have an account yet?<span> <a href="#">Register Now</a></span></p>
                </FooterContainer>
            </HCenteredContainer>
        </FormWrapper>
    );
} 

export default LoginForm;