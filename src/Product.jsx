import "./Product.css";
import Price from "./Price";

function Product({title,idx}) {
   
   let oldPrice =["12,995","11,900","1,599","599"];
   let newPrice =["8,999","9,999","1,000","499"];
   let description =[ ["8,000 DPI","5 programmable buttons"],["Intutive Surface","Designed for I-Pad Pro"],
   [ "Designed for I-Pad Pro", "Intutive Surface"] ,["Wirless","optical orientation"]]
    return(
        <div className="Product">
            
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice ={newPrice[idx]}/>
        </div>
    );
}

export default Product;