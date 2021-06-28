import { Fragment } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation position="absolute" />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout;