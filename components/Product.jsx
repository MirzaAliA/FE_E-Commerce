import { useContext } from "react"
import { Context } from "./MyContext"
import { useState } from "react";

export default function Product({ value }) {

    console.log(value)

    const [search, setSearch] = useState('');

    const { products } = useContext(Context)
    return (
        <>
            <div className="container">
                {/* Section Search */}
                <div className="row justify-content-center mb-2">
                    <div className="col-8">
                        <h2 className="text-center tagline mb-4 mt-2">All Products</h2>
                        <div className="input-group">
                            <form className="d-flex w-100" action="">
                                <input onChange={(e) => setSearch(e.target.value)} placeholder="search something..." className="input-search" type="text" />
                                <button className="primary-btn">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Section Product Card */}
                <div className="row">
                    {products.filter((p) => {
                        const matchCategory = value ? p.category.toLowerCase().includes(value.toLowerCase()) : true;
                        const matchSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
                        return matchCategory && matchSearch;
                    }).map((p) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-9 my-3" key={p._id}>
                                <div className="product-card">
                                    <div className="image-wrapper">
                                        <img src={p.image} className="w-100" />
                                    </div>
                                    <div>
                                        <span className="title-category mt-2">{p.category}</span>
                                        <span className="title-brand">{p.title}</span>
                                        <span className="title-description mt-3 mb-4">{p.description}</span>
                                    </div>
                                    <div className="price-wrapper d-flex justify-content-between align-items-center">
                                        <span className="title-price">Rp. {p.price}</span>
                                        <button className="sm-btn-primary">Buy <i className="bi bi-bag-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}