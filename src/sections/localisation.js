export default function Localisation(){
    return (
        <div className={"container my-5"}>
            <div className={"row"}>
                <div
                    style={{
                        backgroundImage: `url(${require('../assets/images/localisation.webp')})`,
                        backgroundSize: "cover",
                        backgroundPosition: "0 47%",
                        backgroundAttachment: "scroll",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="col-12 col-md-4">

                </div>
                <div className="col-12 col-md-8">
                    <h2 className="heading" data-aos="fade-up">Localisation</h2>
                    <h3>Yasmine Hammamet</h3>
                    <p>
                        Les jasmines qui envahissent la ville sont la première rencontre avec les liens millénaires entre l'Espagne et la Tunisia. Ils décorent des recoins abrités mais are also the first matière of the multitude of articles manufactured by artisans and offered in local boutiques.

                        En plus du jasmin, voyageurs découvriront des plages merveilleuses, des jardins exubérants remplis d'orangers et de bougainvilliers, et una situation géographique unique dont les Romains avaient déjà estimé la grande valeur en lui donnant le caractère de Colonie en raison de sa position stratégique , à seulement 182 kilometers from Sicile.

                        C'est aujourd'hui la más importante enclave touristique du pays en raison de ses magnifiques plages de sable doré, son agréable température, la qualité de ses eaux et sa vaste offre ludique et sportive. Sans oublier ses installations dédiées à la pratique du golf , avec deux parcours de premier level où les passionnés pourront mettre au défi leur jeu au milieu de dunes et d'oasis au bord de la Méditerranée.
                    </p>
                </div>
            </div>
        </div>
    )
}
