import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeatureCarrocel from "../../components/FeatureCarrocel";
import FeaturedCollections from "../../components/FeaturedCollections";
import FeaturedSpecialOffer from "../../components/FeaturedSpecialOffer"
import FeaturedProducts from "../../components/FeaturedProducts"


export default function Home() {
    return (
        <div>
            <Navbar />

            <Menu />


            <FeatureCarrocel />


            <FeaturedCollections />

            <div>
                Coleções em Destaque 2
            </div>

           <FeaturedProducts/>

            <FeaturedSpecialOffer />

            <Footer />
        </div>
    )
}