import "./ProductTab.css";
import Product from "./Product.jsx";



function ProductTab() {
  return (
        <div className="ProductTab">
        
        <Product title = "Logitect MX Master" idx ={0}/>
        <Product title = "Apple Pencil (2nd GEN)" idx ={1}/>
        <Product title = "Zebrinics Zeb-Transformer" idx ={2}/>
        <Product title = "Petronics Toad 23" idx ={3}/>
        </div>
    );
}

export default ProductTab;