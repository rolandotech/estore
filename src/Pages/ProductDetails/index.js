import React from "react";
import "./style.scss";
import { useLocation, useParams } from "react-router-dom";
import { getProduct } from "../../Globals/ApiRequest";
import { useQuery } from "@tanstack/react-query";


const ProductDetails = () => {
    const { state } = useLocation();
    const {prod_id} = state;

    const products = useQuery({
    queryKey: ['productDetails'],
    queryFn: async () =>
        getProduct(prod_id).then((resp) => {
            return resp.data })
    })

    return (
        <div id="ProductDetails">
            <div className="container">
                <div className="imageHolder">
                    <img className="image" src={products.data.image}/>
                </div>
                <div className="contentHolder">
                    <div className="headHolder">
                        <label className="category">{products.data.category}</label>
                        <h2 className="title">{products.data.title}</h2>
                        <p className="price">Price: <span>${products.data.price}</span></p>
                    </div>
                    <div className="descriptionHolder">
                        <p className="description">{products.data.description}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;