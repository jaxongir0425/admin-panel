import React from 'react';
import "./ProductStyle.css";
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import airPods2 from "../../image/airPods2.png";

function Product() {
    return (
        <>

            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">Product</h1>
                    <Link to="/newProduct">
                        <button className="productAddButton">Create</button>
                    </Link>
                </div>
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                    </div>
                    <div className="productTopRight">
                        <div className="productInfoTop">
                            <img src={airPods2} alt="Product Img" className="productInfoImg"/>
                            <span className="productName">Apple AirPods</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">Id:</span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Sales:</span>
                                <span className="productInfoValue">1523</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Active:</span>
                                <span className="productInfoValue">Yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">In Stock:</span>
                                <span className="productInfoValue">No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">

                </div>
            </div>

        </>
    );
}

export default Product;