import React, { useEffect } from "react";
import "./style.scss";
import { useLocation, useParams } from "react-router-dom";
import { getProduct } from "../../Globals/ApiRequest";
import { useQuery } from "@tanstack/react-query";
import AppLoader from "../../Components/AppLoader";


const ProductDetails = () => {
    const { state } = useLocation();
    const {prod_id} = state;

    const {data,isLoading} = useQuery({
    queryKey: ['productDetails', prod_id],
    queryFn: async () =>
        getProduct(prod_id).then((resp) => {
            return resp.data })
    })

    return (
        <div id="ProductDetails">
            <AppLoader loading={isLoading} />
            {
                data && (
                    <div className="container">
                        <div className="imageHolder">
                            <img className="image" src={data.image}/>
                        </div>
                        <div className="contentHolder">
                            <div className="headHolder">
                                <label className="category">{data.category}</label>
                                <h2 className="title">{data.title}</h2>
                                <p className="price">Price: <span>${data.price}</span></p>
                            </div>
                            <div className="descriptionHolder">
                                <p className="description">{data.description}</p>
                            </div>
                            
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default ProductDetails;