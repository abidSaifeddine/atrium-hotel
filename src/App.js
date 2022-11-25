import Header from "./layout/header";
import Hero from "./sections/Hero";
import FormCheckIn from "./sections/form-checkin";
import Presentation from "./sections/presentation";
import Photos from "./sections/photos";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Chambres from "./sections/chambres";
import Suites from "./sections/suites";
import Gastronomy from "./sections/Gastronomy";
import Footer from "./sections/footer";
import Spa from "./sections/spa";
import Events from "./sections/events";
import Localisation from "./sections/localisation";
export default function App(){
  return (
      <div>
        <Header/>
          <Hero/>
          <FormCheckIn/>
          <Presentation/>
          <Photos/>
          <Chambres/>
          <Suites/>
          <Gastronomy/>
        <Spa/>
        <Events/>
          <Localisation/>
        <Footer/>
      </div>
  )
}
