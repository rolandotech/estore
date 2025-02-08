import React, {useEffect, useState} from "react";
import { AppProductCard } from "../../Components";
import { getAllProduct, getAllCategories, getCategory } from "../../Globals/ApiRequest";
import {Box, Button, Typography} from '@mui/material';
import "./style.scss";
import AppLoader from "../../Components/AppLoader";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import HomeHandler from "./HomeHandler";


const Home = (props) => {
    const {stateData, handler} = HomeHandler();
    const {allProduct, limit, allProductLoading, categProductLoading, allCategProd} = stateData;
    const {handleClickView, handleAddCart, handleLoadMore, handleCategory} = handler;
    
    return (
        <div id="home">
            <div className="container">
                <AppLoader loading={allProductLoading} />
                <div className="category_list">
                    <AppLoader loading={categProductLoading} />
                    {
                        allCategProd && allCategProd.map((item, index) => {
                            if(index === 0){
                                return <div className="categ-menu" key={index}><Button className="navMenu" variant="text" onClick={() => handleCategory('all')}>All</Button></div> 
                            }
                            return <div className="categ-menu" key={index}><Button className="navMenu" variant="text" onClick={() => handleCategory(item)}>{item}</Button></div>
                        })
                    }
                </div>
                <div className="all-products">
                    <div className="product-content">
                        {
                            allProduct && allProduct.map((item, index) => {
                                return <AppProductCard key={index} containerStyle={{maxWidth: 200, padding: 0}} data={item} handleClickView={() => handleClickView(item.id)} handleAddCart={() => handleAddCart()} />;
                            })
                        }
                    </div>
                </div>
                
                {
                    allProduct && limit <= allProduct.length ? (
                        <div className="loadMoreHolder"><Button className="loadMore" size="small" variant="text" onClick={() => handleLoadMore()}>Load More</Button></div>
                    ) : null
                }
            </div>
        </div>
            
    )
}

export default Home;