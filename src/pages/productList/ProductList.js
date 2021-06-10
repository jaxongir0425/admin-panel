import React, {useState} from 'react';
import "./ProductsStyle.css";
import {DataGrid} from '@material-ui/data-grid';
import airPods from "../../image/airPods.png";
import {Delete, Edit} from "@material-ui/icons";
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";

function ProductList() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {field: 'id', headerName: 'Id', width: 50},
        {
            field: 'product', headerName: 'Product', width: 210, renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img className="productListImg" src={airPods} alt="AirPods Image"/>
                        {params.row.name}
                    </div>
                )
            }
        },
        {field: 'stock', headerName: 'Stock', width: 200},
        {field: 'status', headerName: 'Status', width: 120},
        {field: 'price', headerName: 'Price', width: 120},
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">
                                <Edit style={{height: "15px"}}/> Edit
                            </button>
                        </Link>
                        <button className="productsListDelete" onClick={() => handleDelete(params.row.id)}>
                            <Delete style={{height: "15px"}}/> Delete
                        </button>
                    </>
                )
            }
        },
    ];

    return (
        <>

            <div className="productList">
                <h1>Product List</h1>
                <DataGrid rows={data} columns={columns} pageSize={7}
                          disableSelectionOnClick checkboxSelection/>
            </div>

        </>
    );
}

export default ProductList;