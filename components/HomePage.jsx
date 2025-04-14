import { useState } from "react"
import { Context } from "./MyContext"
import Navbar from "./Navbar"
import Banner from "./Banner"
import CategoryCard from "./CategoryCard"
import Product from "./Product"
import { Provider } from "./MyContext"

export default function HomePage () {
    const [selectedValue, setSelectedValue] = useState('');
    console.log(selectedValue)
    return (
        <>
            <Provider>
                <Navbar />
                <Banner />
                <CategoryCard setValue={setSelectedValue}/>
                <Product value={selectedValue} />
            </Provider>
        </>
    )
}