import React from 'react';
import "./ProductStyle.css";
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import airPods2 from "../../image/airPods2.png";
import avatar from "../../image/avatar.png";
import {Publish} from "@material-ui/icons";

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
                    <form className="productFrom">
                        <div className="productFromLeft">
                            <label>Product Name</label>
                            <input type="text" placeholder="Apple AirPod"/>
                            <label>In Stock</label>
                            <select name="inStock" id="idStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFromRight">
                            <div className="productUpload">
                                <img src={avatar} alt="Avatar Image" className="productUploadImg"/>
                                <label for="file">
                                    <Publish/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Product;