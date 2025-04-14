import { useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";

const Context = createContext(null);

function Provider ({children}) {
    const [products, setProducts] = useState([])
    const [banners, setBanners] = useState([])
    const [categorys, setCategorys] = useState([])


    async function getDataProducts () {
        const response = await axios.get('https://e-commerce-and-shopping-cart-production.up.railway.app/api/products');
        setProducts(response.data);
    }
    async function getDataBanners () {
        const response = await axios.get('https://e-commerce-and-shopping-cart-production.up.railway.app/api/banner');
        setBanners(response.data);
    }
    async function getDataCategorys () {
        const response = await axios.get('https://e-commerce-and-shopping-cart-production.up.railway.app/api/category');
        setCategorys(response.data);
    }

    useEffect(() => {
        getDataProducts();
        getDataBanners();
        getDataCategorys();
    },[]) 

    return (
        <Context.Provider value={{ products, banners, categorys }} >
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}