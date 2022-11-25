import bgImage from "../assets/images/hero_4.jpg"
export default function Hero(){
    return (
        <section className="site-hero overlay" style={{backgroundImage: `url(${bgImage})`}}
                 data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row site-hero-inner justify-content-center align-items-center">
                    <div className="col-md-10 text-center" data-aos="fade-up">
                        <span className="custom-caption text-uppercase text-white d-block  mb-3">
                            Welcome To 5
                            <span className="fa fa-star text-primary"/>Hotel</span>
                        <h1 className="heading">A Best Place To Stay</h1>
                    </div>
                </div>
            </div>

            <a className="mouse smoothscroll" href="#next">
                <div className="mouse-icon">
                    <span className="mouse-wheel"/>
                </div>
            </a>
        </section>
    )
}
