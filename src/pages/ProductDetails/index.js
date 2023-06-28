import FeatureImageGallery from "../../components/FeatureImageGallery";
import PageProductsDetails from "../../components/PageProductsDetails";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function ProductDetails() {
    return (
        <div>
            <Navbar />
            <Menu />
            <FeatureImageGallery />

            <PageProductsDetails />
            <Footer />
        </div>
    )
}