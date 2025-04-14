import { useContext } from "react"
import { Context } from "./MyContext"

export default function CategoryCard({ setValue }) {


    function getValueCard(v) {
        setValue(v);
    }

    const { categorys } = useContext(Context)
    return (
        <>
            <div className="container category py-4 my-5">
                <div className="title-wraper">
                    <h6>Category Page</h6>
                </div>
                <div  className="row my-4">
                    {categorys.map((c) => {
                        return (
                            <div key={c._id} onClick={() => getValueCard(c.description)} className="col-lg-2 col-md-3 col-6 position-relative" >
                                <div className="text-center w-100 card-category my-2 my-md-1">
                                    <img src={c.image} className="w-100"/>
                                    <div className="category-label fw-semibold position-absolute bottom-0 w-100">
                                        {c.description}
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