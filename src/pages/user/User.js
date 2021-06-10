import React from 'react';
import "./UserStyle.css";
import avatar from "../../image/avatar.png";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import {Link} from "react-router-dom";

function User() {
    return (
        <>

            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Edit User</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src={avatar} alt="Avatar" className="userShowImg"/>
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Jaxongir Abdusalomov</span>
                                <span className="userShowTitle">Full Stack Developer</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowBottomTitle">Account Detail</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon"/>
                                <span className="userShowInfoTitle">jaxongir0425</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon"/>
                                <span className="userShowInfoTitle">25.04.1998</span>
                            </div>
                            <span className="userShowBottomTitle">Contact Detail</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon"/>
                                <span className="userShowInfoTitle">+998 99 721 34 66</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon"/>
                                <span className="userShowInfoTitle">jaxongir0102@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon"/>
                                <span className="userShowInfoTitle">Tashkent | Uzbekistan</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="userUpdateInput"/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" className="userUpdateInput"/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="userUpdateInput"/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone Number</label>
                                    <input type="text" placeholder="Username" className="userUpdateInput"/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input type="text" placeholder="Address" className="userUpdateInput"/>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src={avatar} alt="Avatar" className="userUpdateImg"/>
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon"/>
                                    </label>
                                    <input type="file" id="file" style={{display: "none"}}/>
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default User;