import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedCollections from "../../components/FeaturedCollections";
import FeaturedSpecialOffer from "../../components/FeaturedSpecialOffer"
import FeatureCarrocel from "../../components/FeatureCarrocel";

export default function Home() {
    return (
        <div>
            <Navbar/>

            <Menu/>

            <div>
                <FeatureCarrocel/>
            </div>

            <FeaturedCollections/>

            <div>
                Coleções em Destaque 2
            </div>

            <div>
                Produtos
            </div>

           <FeaturedSpecialOffer/>

            <Footer/>
        </div>
    )
}