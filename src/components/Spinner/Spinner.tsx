import React from "react";
import { SpinnerContainer, SpinnerAttr } from "./styles";

export interface Props {
    fullsize?: boolean;
}

function Spinner({ fullsize }: Props) {
    if (!fullsize) return <SpinnerAttr className="bars"></SpinnerAttr>;

    return (
        <SpinnerContainer>
            <SpinnerAttr className="bars"></SpinnerAttr>
        </SpinnerContainer>
    );
}

export default Spinner;
