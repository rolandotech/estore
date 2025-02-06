import React from "react";
import "./style.scss";
import ViewModel from "./ViewModel";


const SignUp = () => {
    const {title} = ViewModel();

    return (
        <>
        <h1>{title}</h1>
        </>
    )
}

export default SignUp;