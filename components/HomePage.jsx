import { useState } from "react"
import { Context } from "./MyContext"
import Navbar from "./Navbar"
import Banner from "./Banner"
import CategoryCard from "./CategoryCard"
import Product from "./Product"
import { Provider } from "./MyContext"

export default function HomePage() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleSetCategory(category) {
        if (selectedValue === category) {
            setSelectedValue(""); // toggle off
        } else {
            setSelectedValue(category); // set baru
        }
    }
    
    return (
        <>
            <Provider>
                <Navbar />
                <Banner />
                <CategoryCard setValue={handleSetCategory} />
                <Product value={selectedValue} />
            </Provider>
        </>
    )
}