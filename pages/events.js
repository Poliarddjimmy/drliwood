import Layout from "../components/layouts/layout";
import Image from "next/image";
import Link from "next/link"

const Events = () => {
  return <Layout>
    <section className="banner-title album-banner" style={{ backgroundP: "50% 0px" }}>
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="main-title">
            <h1>
              New Sound Wave
              <span className="light">, Camp Nou Stadium</span>
            </h1>
            <div className="text-wrap">
              <div className="text">4 Days</div>
              <div className="text">3 Hours</div>
              <div className="text">23 Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="event-list-wrap">
      <div className="container">
        <div className="event-list col-md-12">
          <div className="title wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <h2>August <span className="orange">{(new Date()).getFullYear()}</span></h2>
          </div>
          <div className="content">

            <Link href="/events/event-slug" passHref>
              <div className="schedrow wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="overlay"></div>
                <div className="event">
                  <span className="bold"><i className="fa fa-microphone"></i>New Sound Wave</span>
                </div>
                <div className="location">
                  <span className="bold"><i className="fa fa-map-marker"></i>Camp Nou Stadium </span> / 12 August 2014
                </div>
                <div className="ticket">
                  <i className="fa fa-ticket"></i><span className="bold">$200</span> / 100 Available
                </div>
                <div className="button-wrap"><a href="#" className="def-button">Buy Ticket</a></div>
              </div>
            </Link>

            <Link href="/events/event-slug" passHref>
              <div className="schedrow wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="overlay"></div>
                <div className="event">
                  <span className="bold"><i className="fa fa-microphone"></i>Hammersonic</span>
                </div>
                <div className="location">
                  <span className="bold"><i className="fa fa-map-marker"></i>Istora Senayan </span> / 12 August {(new Date()).getFullYear()}
                </div>
                <div className="ticket">
                  <i className="fa fa-ticket"></i><span className="bold">$200</span> / 0 Available
                </div>
                <div className="button-wrap"><a href="#" className="def-button soldout">Soldout</a></div>
              </div>
            </Link>
          </div>
        </div>

        <div className="event-list col-md-12">
          <div className="title wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <h2>June <span className="orange">{(new Date()).getFullYear()}</span></h2>
          </div>
          <div className="content">

            <Link href="/events/event-slug" passHref>
              <div className="schedrow wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="overlay"></div>
                <div className="event">
                  <span className="bold"><i className="fa fa-microphone"></i>New Sound Wave</span>
                </div>
                <div className="location">
                  <span className="bold"><i className="fa fa-map-marker"></i>Camp Nou Stadium </span> / June 1,  {(new Date()).getFullYear()}
                </div>
                <div className="ticket">
                  <i className="fa fa-ticket"></i><span className="bold">$200</span> / 0 Available
                </div>
                <div className="button-wrap"><a className="def-button soldout">Closed</a></div>
              </div>
            </Link>

            <Link href="/events/event-slug" passHref>
              <div className="schedrow wow animated fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="overlay"></div>
                <div className="event">
                  <span className="bold"><i className="fa fa-microphone"></i>Hammersonic</span>
                </div>
                <div className="location">
                  <span className="bold"><i className="fa fa-map-marker"></i>Istora Senayan </span> / June 12, {(new Date()).getFullYear()}
                </div>
                <div className="ticket">
                  <i className="fa fa-ticket"></i><span className="bold">$200</span> / 0 Available
                </div>
                <div className="button-wrap"><a className="def-button soldout">Closed</a></div>
              </div>
            </Link>
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

export default Events;