import OwlCarousel from 'react-owl-carousel';

export default function Photos(){
    return (
        <section className="section slider-section bg-light">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7">
                        <h2 className="heading" data-aos="fade-up">Photos</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel items={1} margin={8} autoplay ={true} nav >
                            <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                            <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                            <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                        </OwlCarousel>
                    </div>

                </div>
            </div>
        </section>
    )
}
