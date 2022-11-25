export default function Header(){
    return (
        <header className="site-header js-site-header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-4 site-logo" data-aos="fade"><a href="#hero"><img src={require('../assets/images/logo atrium.jpg')} alt="" height={60}/></a></div>
                    <div className="col-6 col-lg-8">


                        <div className="site-menu-toggle js-site-menu-toggle" data-aos="fade">
                            <span/>
                            <span/>
                            <span/>
                        </div>

                        <div className="site-navbar js-site-navbar">
                            <nav role="navigation">
                                <div className="container">
                                    <div className="row full-height align-items-center">
                                        <div className="col-md-6 mx-auto">
                                            <ul className="list-unstyled menu">
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li><a href="rooms.html">Rooms</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="events.html">Events</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="reservation.html">Reservation</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
