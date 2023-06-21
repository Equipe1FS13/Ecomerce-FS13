import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeatureCarrocel from "../../components/FeatureCarrocel";
import FeaturedCollections from "../../components/FeaturedCollections";
import FeaturedSpecialOffer from "../../components/FeaturedSpecialOffer"

import FeatureCarrocel from "../../components/FeatureCarrocel";
import FeatureMainCollections from "../../components/FeatureMainCollections";

import FeaturedProducts from "../../components/FeaturedProducts"



export default function Home() {
    return (
        <div style={{backgroundColor:'#f9f8fe'}}>
            <Navbar />

            <Menu />


            <FeatureCarrocel />

            
            <FeaturedCollections />


            <FeatureMainCollections/>
            
            <div>
                Produtos
            </div>

            <div>
                Coleções em Destaque 2
            </div>

           <FeaturedProducts/>


            <FeaturedSpecialOffer />

            <Footer />
        </div>
    )
}