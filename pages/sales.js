import Layout from "../components/layouts/layout";
import Image from "next/image";

const Sales = () => {
  return <Layout title="Sales">
    <section className="banner-title album-banner" style={{ backgroundP: "50% 0px" }}>
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="main-title">
            <h1>
              Sales
            </h1>
            <div className="text-wrap">
              <div className="text">Your custom text here.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
}

export default Sales;