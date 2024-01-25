import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import { login, setRegisterModal } from "../../redux/slices/userSlice";
import "./userLoginRegister.css";

import facebook from "../../assets/images/icons/facebook-blue-rounded.svg";
import google from "../../assets/images/icons/google.svg";
import line from "../../assets/images/arrows-btn-etc/Line-21.svg";

function UserLoginRegister() {

  axios.defaults.baseURL = "http://localhost:5500";
  const dispatcher = useDispatch();
  const openRegisterModal = useSelector(
    (state) => state.userReducer.openRegisterModal
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleRegistration = async () => {
    try {

      const response = await axios.post("/signUp", formData);
      console.log(response.data);
      handleClose();
      Swal.fire({
        title: 'Well done',
        text: 'Congratulation your account has been successfully created.',
        icon: 'success',
        showConfirmButton: false
      })
    } catch (error) {
      Swal.fire({
        title: 'Oops.',
        text: 'Unfortunately, there was a problem during creating your account. try again later.',
        // text: error.response.data.message,
        icon: 'error',
        showConfirmButton: false
      })
      console.log("Error submitting registration form:", error);
    }
  };

  const handleLogin = async () => {

    try {
      const response = await axios.post("/login", formData);
      console.log(response.data);
      dispatcher(login({ username: response.data.username })); // Assuming your response contains the username
      handleClose();
      Swal.fire({
        title: 'Well done',
        text: 'You logged in  successfully.',
        icon: 'success',
        showConfirmButton: false
      })
    } catch (error) {
      console.log("Error submitting login form:", error);
      Swal.fire({
        title: 'Oops.',
        text: 'Email or password is not correct!',
        icon: 'error',
        showConfirmButton: false
      })
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoginForm) {
      handleLogin();
    } else {
      handleRegistration();
    }
  };

  const handleClose = () => {
    dispatcher(setRegisterModal());
  };

  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal className="modal" show={openRegisterModal} onHide={handleClose}>
        <div className="loginRegister-form d-flex flex-column align-items-center">
          <div className="LR-heading d-flex justify-content-center w-100 gap-3">
            <div
              className={`user-login w-100 d-flex justify-content-center  py-2 ${
                isLoginForm ? "button-primary" : "neutral-gray-717171"
              }`}
              onClick={() => setIsLoginForm(true)}
            >
              Login
            </div>
            <div
              className={`user-createAccount w-100 d-flex justify-content-center py-2 ${
                isLoginForm ? "neutral-gray-717171" : "button-primary"
              }`}
              onClick={() => setIsLoginForm(false)}
            >
              Create Account
            </div>
          </div>
          <form
            className="create-account overflow-hidden "
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column align-items-center">
              <div className="tech-heim-login">
                {isLoginForm ? "Log in to Tech Heim" : "Create your account"}
              </div>

              {isLoginForm && (
                <>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="CA-inputs w-100 mt-3 mb-3 py-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="CA-inputs w-100 py-2"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="w-100 d-flex justify-content-end me-5 mt-2">
                    <a href="/" className="forgot-password fw-lighter">
                      Forgot Password ?
                    </a>
                  </div>
                  <label
                    htmlFor=""
                    className="mt-2 mb-3 w-100 neutral-gray-717171"
                  >
                    {" "}
                    <input type="checkbox" name="terms-conditions" /> Keep me
                    logged in
                  </label>
                </>
              )}

              {!isLoginForm && (
                <>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="CA-inputs w-100 mt-4 mb-3 py-2"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="CA-inputs w-100 mb-3 py-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="CA-inputs w-100 py-2"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor=""
                    className="mt-2 mb-3 w-100 neutral-gray-717171"
                  >
                    {" "}
                    <input type="checkbox" name="terms-conditions" /> I agree to
                    all <a href="/">Terms & Conditions</a>
                  </label>
                </>
              )}

              <button type="submit" className="btn btn-primary w-100">
                {isLoginForm ? "Log In" : "Create Account"}
              </button>
              <div className=" logIn-signIn-with d-flex justify-content-center align-content-center">
                <img src={line} alt="" />
                <div className=" mt-4 mb-4">
                  Or {isLoginForm ? "Log In" : "Sign Up"} with
                </div>
                <img src={line} alt="" />
              </div>
              <div className="signUp-with w-100 d-flex gap-4 justify-content-between">
                <div className="w-100 ">
                  <button
                    type="button"
                    className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
                  >
                    {" "}
                    <img src={google} alt="" />
                    Google
                  </button>
                </div>
                <div className="w-100 ">
                  <button
                    type="button"
                    className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
                  >
                    {" "}
                    <img src={facebook} alt="" />
                    Facebook
                  </button>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <span className="neutral-gray-717171 px-2">
                  {isLoginForm
                    ? "Don’t have an account ?"
                    : "Already have an account ?"}
                </span>{" "}
                <span
                  className={`${
                    isLoginForm ? "button-primary" : "neutral-gray-717171"
                  }`}
                  onClick={switchForm}
                >
                  {isLoginForm ? "Sign up" : "Sign in"}
                </span>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default UserLoginRegister;
