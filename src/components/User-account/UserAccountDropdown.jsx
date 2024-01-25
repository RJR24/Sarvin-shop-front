import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../layouts/header-styles.css";

import user from "../../assets/images/icons/user.svg";

import profile from "../../assets/images/icons/profile-circle.svg";
import orders from "../../assets/images/icons/orders.svg";
import wishList from "../../assets/images/icons/wishList.svg";
import payments from "../../assets/images/icons/payments.svg";
import logoutIcon from "../../assets/images/icons/logout.svg";

import { login, logout, setRegisterModal } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import UserLoginRegister from "../UserLoginRegister/UserLoginRegister";

// const userIsLoggedIn = ()=>{
//     if (!username){

//     }
// }

const UserAccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const username = useSelector((state) => state.userReducer.username);
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const dispatcher = useDispatch();
  // const userLogin = () => {
  //   dispatcher(login({ username: "Kaveh024" }));
  // };
  // const userLogout = () => {
  //   console.log("user is logging out!");
  //   dispatcher(logout());
  // };
  const handleIconClick = () => {
    if (isLogin) {
      setOpen(!open);
    } else {
      dispatcher(setRegisterModal());
    }
  };
  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <div onMouseLeave={closeDropdown}>
      <div
        className={`menu-trigger  d-inline ${
          isLogin ? "userActive" : "userInactive"
        }`}
      >
        <span onClick={handleIconClick}>
          <img src={user} alt="user" />
        </span>
        {isLogin && open && (
          <div className="dropdown-menu">
            <div>
              {/* <h3>
                {username}
                <br />
                <span>{username}@gmail.com</span>
              </h3> */}
              <ul className="list-unstyled">
                <DropdownItem img={profile} text={"fullName"} />
                <DropdownItem img={orders} text={"Orders"} />
                <DropdownItem img={wishList} text={"Wish List"} />
                <DropdownItem img={payments} text={"Payments"} />
                <DropdownItem
                  event={true}
                  img={logoutIcon}
                  text={"Log Out"}
                />
              </ul>
            </div>
          </div>
        )}
      </div>
      {!isLogin && <UserLoginRegister />}
    </div>
  );
};
function DropdownItem(props) {
  const dispatcher = useDispatch();
  const userLogout = () => {
    dispatcher(logout());
  };
  return (
    <>
      {props.event ? (
        <li className="dropdownItem" onClick={userLogout}>
          <img src={props.img} alt="" />
          <a href="#">{props.text}</a>
        </li>
      ) : (
        <li className="dropdownItem">
          <img src={props.img} alt="" />
          <a href="#">{props.text}</a>
        </li>
      )}
    </>
  );
}
// function DropdownItem(props) {
//   const dispatcher = useDispatch();

//   const handleItemClick = () => {
//     console.log(`Item clicked: ${props.text}`);

//     if (props.event) {
//       dispatcher(logout());
//     }
//   };

//   return (
//     <li className="dropdownItem" onClick={handleItemClick}>
//       <img src={props.img} alt="" />
//       <a href="#">{props.text}</a>
//     </li>
//   );
// }

export default UserAccountDropdown;
