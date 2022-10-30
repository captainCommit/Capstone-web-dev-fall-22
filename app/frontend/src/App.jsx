import React from "react";
import { createRoot } from "react-dom/client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
<<<<<<< HEAD
import Navigation from "./components/Navigation.jsx";
import HeroHomePage from "./components/HeroHomePage.jsx";
import Newsletter from "./components/Newletter.jsx";
=======
import Navbar from "./components/Navbar.jsx";
>>>>>>> 9d7298fcc3146b5a1b6b7934305385af4905acf8
import Footer from "./components/Footer.jsx";
import Modal from "react-bootstrap/Modal";

import Mealplan from "./pages/mealplan/MealPlan.jsx";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import BMIComponent from "./pages/Bmi/bmi.jsx";

import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Admin from "./pages/admin/Admin.jsx";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      team: [],
      isLoginModalOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  async componentDidMount() {
    // const data = await fetch("/check");
    // let response = await data.json();
    // if (response.status === "works") {
    //   this.setState({ team: response.data });
    //
  }
  handleOpen() {
    console.log("hi");
    this.setState({
      isLoginModalOpen: true,
    });
  }
  handleLogin() {}
  handleRegister() {}
  handleClose() {
    this.setState({
      isLoginModalOpen: false,
    });
  }
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Navigation
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        ></Navigation>
        {/* <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1> */}
        <HeroHomePage />
        <MealPlan />
        <Newsletter />
        <Footer />
=======
      <>
        <BrowserRouter>
          <Navbar
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
          ></Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mealplan" element={<Mealplan />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
>>>>>>> 9d7298fcc3146b5a1b6b7934305385af4905acf8
        <Modal show={this.state.isLoginModalOpen} onHide={this.handleClose}>
          <Modal.Body className="p-0">
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="login" title="Login">
                <Login handleClose={this.handleClose}></Login>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register handleClose={this.handleClose}></Register>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<App />);
