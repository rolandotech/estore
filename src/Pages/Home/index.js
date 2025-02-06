import React, {useEffect, useState} from "react";
import { AppProductCard } from "../../Components";
import { getAllProduct, getAllCategories, getCategory } from "../../Globals/ApiRequest";
import {Box, Button, Typography} from '@mui/material';
import "./style.scss";
import AppLoader from "../../Components/AppLoader";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const Home = (props) => {
    const navigate = useNavigate()
    const [allProduct, setAllProduct] = useState([]);
    const [allCateg, setAllCateg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(15);
    // const {isLoading, isError, data, error} = useQuery({
    //     queryKey: ['allProducts'],
    //     queryFn: async () => await getAllProduct(limit),
    //   })
    let prod;
    const products = useQuery({
    queryKey: ['productDetails'],
    queryFn: async () =>
        getAllProduct(limit).then((resp) => { return resp.data })
    })
    
    if(products.data){
        prod = products.data;
    }else{
        prod = [];
    }


    // useEffect(() => {
    //     allData();
    // },[])

    // console.log("see query data", products.data)

    // useEffect(() => {
    //     allData();
    // },[limit])

    // const allData = async () => {
    //     setLoading(true);
    //     const all_products = await getAllProduct(limit);
    //     const all_categ = await getAllCategories();
    //     // setAllProduct(all_products);
    //     setAllProduct(all_products.data)
    //     setAllCateg(all_categ.data)
    //     // console.log("all products",all_products.data)
    //     // console.log("all categories",all_categ.data)
    //     setLoading(false);
    // }

    const handleCategory = async (categ) => {
        let allCategProd;
        setLoading(true);
        if(categ === 'all'){
            allCategProd = await getAllProduct(limit);
        }else{
            allCategProd = await getCategory(categ);
        }
        setAllProduct(allCategProd.data)
        setLoading(false);
    }

    const handleClickView = (id) => {
        navigate("/product", {state: {prod_id: id}})
    }

    const handleAddCart = () => {
        console.log("click add cart");
    }

    const handleLoadMore = () => {
        setLimit(limit + 5);
    }

    return (
        <div id="home">
            {console.log("prod", prod)}
            <div className="container">
                <div className="category_list">
                    {
                        allCateg && allCateg.map((item, index) => {
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
                            prod.map((item, index) => {
                                return <AppProductCard key={index} containerStyle={{maxWidth: 200, padding: 0}} data={item} handleClickView={() => handleClickView(item.id)} handleAddCart={() => handleAddCart()} />;
                            })
                        }
                    </div>
                </div>
                
                {
                    limit <= prod.length ? (
                        <div className="loadMoreHolder"><Button className="loadMore" size="small" variant="text" onClick={() => handleLoadMore()}>Load More</Button></div>
                    ) : null
                }
            </div>
        </div>
            
    )
}

export default Home;