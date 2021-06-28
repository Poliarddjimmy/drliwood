import Layout from "../components/layouts/layout";
import Image from "next/image";

const Works = () => {
  return <Layout>
    <section className="banner-title album-banner" style={{ backgroundP: "50% 0px" }}>
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="main-title">
            <h1>
              Our Works
            </h1>
            <div className="text-wrap">
              <div className="text">Your custom text here.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="album-list-wrap">
      <div className="container">
        <div className="filter">
          <a href="javascript:void(0)" data-filter="*" className="current">
            <div className="filterbutton">All Genres</div>
          </a>
          <a href="javascript:void(0)" data-filter=".acoustic" className="">
            <div className="filterbutton">Acoustic</div>
          </a>
          <a href="javascript:void(0)" data-filter=".rockandroll" className="">
            <div className="filterbutton">Rock &amp; Roll</div>
          </a>
          <a href="javascript:void(0)" data-filter=".alternative" className="">
            <div className="filterbutton">Alternative</div>
          </a>
        </div>

        <div className="album-filter-content" style={{ position: "relative", minHeight: "378px" }}>
          <div className="col-md-3 col-sm-3 album-card-wrap alternative" >
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album1.jpg" width={700} height={700} alt="image" />
                <div className="overlay" style={{ display: "block", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                  <div className="buy-wrapper" style={{ display: "table", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                    <div className="buy" style={{ display: "table-cell", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                      <a className="link" href="">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href=""><div className="title"><h4>I Am Totally Free</h4></div></a>
                <div className="genre"><span>Acoustic</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 12</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap acoustic" >
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album2.jpg" width={700} height={700} alt="image" />
                <div className="overlay" style={{ display: "block", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                  <div className="buy-wrapper" style={{ display: "table", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                    <div className="buy" style={{ display: "table-cell", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                      <a className="link" href="">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href=""><div className="title"><h4>Danger Ranger</h4></div></a>
                <div className="genre"><span>Rock &amp; Roll</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 10</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap alternative" >
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album3.jpg" width={700} height={700} alt="image" />
                <div className="overlay" style={{ display: "block", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                  <div className="buy-wrapper" style={{ display: "table", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                    <div className="buy" style={{ display: "table-cell", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                      <a className="link" href="">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href=""><div className="title"><h4>Maroon V</h4></div></a>
                <div className="genre"><span>Alternative</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 10</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap acoustic" >
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album5.jpg" width={700} height={700} alt="image" />
                <div className="overlay" style={{ display: "block", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                  <div className="buy-wrapper" style={{ display: "table", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                    <div className="buy" style={{ display: "table-cell", left: "0px", top: "-100%", transition: "all 300ms ease 0s" }}>
                      <a className="link" href="">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href=""><div className="title"><h4>Seigitiga Wahyudi</h4></div></a>
                <div className="genre"><span>acoustic</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 10</span></div>
              </div>
            </div>
          </div>

        </div>

        <div className="pagination-wrap col-md-12 d-flex align-items-center justify-content-center">
          <ul className="pagination">
            <li>
              <a href="" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li><a href="" className="active"><span>1</span></a></li>
            <li><a href=""><span>2</span></a></li>
            <li><a href=""><span>3</span></a></li>
            <li>
              <a href="" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  </Layout>
}

export default Works;