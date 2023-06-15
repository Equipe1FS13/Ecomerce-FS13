import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedCollections from "../../components/FeaturedCollections";
import FeaturedSpecialOffer from "../../components/FeaturedSpecialOffer"

export default function Home() {
    return (
        <div>
            <Navbar/>

            <Menu/>

            <div>
                Carrossel
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