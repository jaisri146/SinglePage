import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Flex from './Flex/Flex';
import ProductDetail from './ProductDetail/ProductDetail';
import Feature from './Feature/Feature';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Flex />
      <ProductDetail />
      <Feature />
    </div>
  );
}

export default App;
