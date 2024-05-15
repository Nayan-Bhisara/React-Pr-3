import React from "react";
import { category, product } from "./Data";

const record = ({ category, filterBtn, product }) => {
  return (
    <div className="product">
      <div className="main" align="center" style={{backgroundColor:"#FFEBCD",width:"100%",height:"1140px"}}>
        <h1 className="p-4">Apple Store</h1>
        <div className="btngroup pb-4">
            <button type="button" class="btn btn-primary m-2" onClick={() => filterBtn("all")}>
                    All</button>
            {
                category.map((cat) => {
                    return (
                    <button type="button" class="btn btn-primary m-2" key={cat.id} onClick={() => filterBtn(cat.name)}>
                    {cat.name}</button>
                    );
                })
            }
        </div>
        <div className="mainbox" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
                product.map((item) => {
                    return (
                        <div class="card text-center mt-3 p-3" style={{width: "18rem",marginLeft:"20px"}}>
                            <img src={item.image} class="card-img-top p-4" alt="..." height="180px" style={{objectFit:"contain"}}/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">RS :- {item.price}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
      </div>
    </div>
  );
};

export default record;
