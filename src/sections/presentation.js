export default function Presentation(){
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7">
                        <h2 className="heading" data-aos="fade-up">Votre Hôtel dans "ville"</h2>
                        <h3 data-aos="fade-up">Immergez-vous dans la culture Tunisienne</h3>
                        <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/bell.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>reception 24/24</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/credit-card.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Salle de conférences</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/money-bill-wave.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Change of currency</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/spa.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Spa</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/icons8-swimming-pool-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Covered swimming pool</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/icons8-beach-umbrella-24.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>Beach Bar </h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/swimmer.png')} alt="" style={{marginBottom: 16}}/>
                        <h4>outdoor pools</h4>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-center flex-column" data-aos={"fade-up"}>
                        <img height={32} src={require('../assets/icons/bed-alt.png')} alt="" style={{marginBottom: 16}}/>
                        <h4 className={"text-center"}>Lits extérieurs à baldaquin</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
