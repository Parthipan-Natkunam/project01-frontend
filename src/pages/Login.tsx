import * as React from "react";
import styled from "styled-components";
import {Colors} from "@blueprintjs/core";
import RocketImage from "../assets/loginGraphic.svg";
import {LoginForm} from "../components";

const IndexPageWrapper = styled.div`
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position:relative;
    background: ${Colors.INDIGO1};
    justify-content: flex-end;
    flex-wrap: wrap;
    @media screen and (min-width:758px){
        background: url('${RocketImage}') no-repeat bottom left / 70% ${Colors.INDIGO1};
    }
`;

const Login :React.FC = ():JSX.Element => {
    return (
        <IndexPageWrapper>
            <LoginForm/>
        </IndexPageWrapper>
    )
}

export default Login;