export default function Gastronomy(){
    return (<section className="section bg-image overlay" style={{backgroundImage: `url(${require('../assets/images/hero_3.jpg')})`}}>
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading text-white" data-aos="fade">Gastronomy</h2>
                    <p className="text-white" data-aos="fade" data-aos-delay="100">Far far away, behind the word
                        mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>

                <div className="col-md-7" style={{color: "red"}}>
                    At the restaurant , you can find different products to start the journey with full energy and the best local recipes, as well as other foods for the petit déjeuner. Coffee, freshly pressed fruit juice and different options to fill your stomach and appreciate the services and environment of our installations.

                    <ul>
                        <li>
                            Summer schedule:
                           <ul>
                               <li>
                                   Breakfasts – from 7:00 a.m. to 10:00 a.m.
                               </li>
                               <li>
                                   Dinners – From 7:00 p.m. to 9:30 p.m.
                               </li>
                           </ul>
                        </li>
                        <li>
                            Winter schedule:
                           <ul>
                               <li>
                                   Breakfasts – from 7:30 a.m. to 10:00 a.m.
                               </li>
                               <li>
                                   Dinners – from 6:30 p.m. to 9:00 p.m.
                               </li>
                           </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>)
}
