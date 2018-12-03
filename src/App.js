import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PracticeAreas from "./components/PracticeAreas";
import Profile from "./components/Profile";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <PracticeAreas />
        <Profile />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
