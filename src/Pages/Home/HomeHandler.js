import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllCategories, getAllProduct, getCategory } from '../../Globals/ApiRequest';

function HomeHandler() {
    let allProduct, allCategProd;
    const navigate = useNavigate()
    const [limit, setLimit] = useState(15);
    const [category, setCategory] = useState('all');

    const prodData = useQuery({
        queryKey: ['products', limit, category],
        queryFn: async () => {
            let resp;
            if(category === 'all'){
                resp = getAllProduct(limit).then((resp) => { return resp.data })
            }else{
                resp = getCategory(category).then((resp) => { return resp.data })
            }
            return resp;
        }
        });

    const categData = useQuery({
        queryKey: ['categProd', category],
        queryFn: async () => 
            getAllCategories(category).then((resp) => { return resp.data })   
        })

    console.log("categData data", categData.data)

    const handleCategory = async (categ) => {
        setCategory(categ)
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


  return {
    stateData: {
        allProduct: prodData.data,
        allCategProd: categData.data,
        allProductLoading: prodData.isLoading,
        categProductLoading: categData.isLoading,
        limit
    },
    handler: {
        handleClickView,
        handleAddCart,
        handleLoadMore,
        handleCategory
    }
  }
}

export default HomeHandler