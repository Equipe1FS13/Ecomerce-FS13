import FeatureImageGallery from "../../components/FeatureImageGallery";
import FeaturedProducts from "../../components/FeaturedProducts";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function ProductDetails() {
    return (
        <div>
            <Navbar />
            <Menu />
            <FeatureImageGallery />

            <FeaturedProducts />
            <Footer />
        </div>
    )
}