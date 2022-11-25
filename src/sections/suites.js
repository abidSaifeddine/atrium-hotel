import OwlCarousel from "react-owl-carousel";

export default function Suites(){
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7">
                        <h2 className="heading" data-aos="fade-up">Suites</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>

                <div className="col-md-12">
                    <OwlCarousel items={1} margin={8} autoplay ={true} nav >
                        <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                        <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                        <div ><img  className="img" src= {require('../assets/images/slider-1.jpg')}/></div>
                    </OwlCarousel>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/icons8-air-conditioner-ios-16-filled/icons8-air-conditioner-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Climatiseur</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/icons8-wi-fi-material-rounded/icons8-wi-fi-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Wifi</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/icons8-living-room-sf-ultralight-filled/icons8-living-room-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Living room</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/icons8-beach-cocktail-pastel-glyph/icons8-beach-cocktail-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Mini bar</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/icons8-shower-ios-16-filled/icons8-shower-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Bathroom</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/screen.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Satellite TV</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/expand.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>40M</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={24} src={require('../assets/icons/phone-office.png')} alt="" style={{marginBottom: 16}}/>
                        <h4 className={"text-center"}>Téléphone</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
