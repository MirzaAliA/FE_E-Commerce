import { useContext } from "react"
import { Context } from "./MyContext"

export default function Banner() {
    const { banners } = useContext(Context)
    return (
        <>
            <div className="container">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        {banners.map((b, i) => {
                            return (
                                <div key={b._id} className={i == 0 ? "carousel-item active" : "carousel-item"}>
                                    <img src={b.image} className="d-block w-100" alt="..." />
                                </div>
                            )
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}