import React, {useState} from 'react';
import "./UsersStyle.css";
import {DataGrid} from '@material-ui/data-grid';
import avatar from "../../image/avatar.png";
import {Delete, DeleteOutline, Edit} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";

function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {field: 'id', headerName: 'Id', width: 50},
        {
            field: 'username', headerName: 'User', width: 210, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListUserImg" src={avatar} alt="Avatar Image"/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'status', headerName: 'Status', width: 150},
        {field: 'transition', headerName: 'Transition Volume', width: 160},
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">
                                <Edit style={{height: "15px"}}/> Edit
                            </button>
                        </Link>
                        <button className="userListDelete" onClick={() => handleDelete(params.row.id)}>
                            <Delete style={{height: "15px"}}/> Delete
                        </button>
                    </>
                )
            }
        },
    ];

    return (
        <>

            <div className="userList">
                <DataGrid rows={data} columns={columns} pageSize={7} disableSelectionOnClick checkboxSelection/>
            </div>

        </>
    );
}

export default UserList;