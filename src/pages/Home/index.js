import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeatureCarrocel from "../../components/FeatureCarrocel";
import FeaturedCollections from "../../components/FeaturedCollections";
import FeatureMainCollections from "../../components/FeatureMainCollections"
import FeaturedSpecialOffer from "../../components/FeaturedSpecialOffer"
import FeaturedProducts from "../../components/FeaturedProducts"



export default function Home() {
    return (
        <div style={{backgroundColor:'#f9f8fe'}}>
            <Navbar />

            <Menu />


            <FeatureCarrocel />

            
            <FeaturedCollections />


            <FeatureMainCollections/>
            

           <FeaturedProducts sliceNumber={8}/>


            <FeaturedSpecialOffer />

            <Footer />
        </div>
    )
}