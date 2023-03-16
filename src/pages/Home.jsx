import React from "react";
import PrimaryButton from "../components/PrimaryButton";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Soy la Home Page :D</h1>
        <PrimaryButton text="Ir a About" link="https://camiperezz.github.io/website/#/about" />
      </div>
    );
  }
}

export default Home;
