import { Fragment } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import SOE from "./SEO"

const Layout = ({ children, title }) => {
  return (
    <Fragment>
      <SOE title={title} />
      <Navigation position="fixed" />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout;