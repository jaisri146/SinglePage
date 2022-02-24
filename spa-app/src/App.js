import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Flex from './Flex/Flex';
import ProductDetail from './ProductDetail/ProductDetail';
import Feature from './Feature/Feature';
import ImageKit from './ImageKit/ImageKit';
import PricingPlan from './PricingPlan/PricingPlan';
import GridPlan from './GridPlan/GridPlan';
import Template from './Template/Template';
import PurchaseWebsite from './PurchaseWebsite/PurchaseWebsite';
import Footer from './Footer/Footer';
import CustomizeMenu from './CustomizeMenu/CustomizeMenu';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Flex />
      <ProductDetail />
      <CustomizeMenu />
      <Feature />
      <ImageKit />
      <PricingPlan />
      <GridPlan />
      <Template />
      <PurchaseWebsite />
      <Footer />
    </div>
  );
}

export default App;
