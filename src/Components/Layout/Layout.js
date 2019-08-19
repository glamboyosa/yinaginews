import React from "react";
import Aux from "../../hoc/Auxilary";
import Nav from "../Navigation/nav";
import Footer from "../../Components/footerComponent/footer";
const layout = props => {
  return (
    <Aux>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </Aux>
  );
};
export default layout;
