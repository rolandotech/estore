import React from "react";
import "./style.scss";
import ViewModel from "./ViewModel";


const Cart = () => {
    const {title} = ViewModel();

    return (
        <>
        <h1>{title}</h1>
        </>
    )
}

export default Cart;