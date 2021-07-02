import { useState, useEffect } from "react";
import Layout from "../../components/layouts/layout";
import Image from "next/image";

const SingleEvent = () => {
  const [mouseHove, setMouseHover] = useState(false)

  useEffect(() => {
    mouseHove && setMouseHover(mouseHove)
  }, [mouseHove])

  return <Layout>
    <section className="banner-title album-banner" style={{ backgroundPosition: "50% 0px" }}>
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="main-title">
            <h1>
              I Am The Titlt Of The Projects
            </h1>
            <div className="text-wrap">
              <div className="text">Available On iTunes.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="album-single-wrap">
      <div className="container">
        <div className="col-md-4 left">
          <div className="album-info">
            <div className="image">
              <Image src="/" alt="Event image" width={700} height={700} />
              <div className={`overlay work-overlay ${mouseHove && 'work-overlay-hover '}`}>
                <div className={`view-wrapper work-overlay-table ${mouseHove && 'work-overlay-hover '}`}>
                  <div className={`view work-overlay-cell ${mouseHove && 'work-overlay-hover '}`}>
                    <a className="shape fancybox" href="./sigle-work_files/album1.jpg" data-fancybox-group="gallery"><i className="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="list">
              <ul>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-calendar"></i></span>Date::
                  </span> 07 / October / 2015
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-clock"></i></span>Time:
                  </span> 44:09
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-map-marker"></i></span>Location:
                  </span> Lipet Recording Studio
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-phone"></i></span>Contact:
                  </span> +1234567890
                </li>
              </ul>
            </div>

            <div className="button-wrap">
              <a href="">
                <div className="def-button"><div className="price">$5</div> Buy Now</div>
              </a>
            </div>
          </div>

          <div className="album-share">
            <div className="title"><h2>Share This Album</h2></div>
            <div className="content">
              <div className="socmed-wrap">
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-youtube"></i></a>
                <a href=""><i className="fa fa-soundcloud"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 right">

          <div className="album-detail">
            <div className="title"><h2>Details</h2></div>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus sed ante sed semper. Curabitur laoreet sollicitudin aliquet. Suspendisse quis mauris eros. Aenean tincidunt turpis at neque laoreet, sed vehicula risus molestie. Mauris eu nisl ac magna cursus rhoncus. Morbi laoreet ac ligula eget porttitor. Nunc id erat facilisis, facilisis nisi quis, tincidunt sem.</p>

              <p>Quisque volutpat orci ac justo convallis, id vestibulum mi scelerisque. Duis sit amet gravida lacus. Quisque nisi justo, rutrum ut semper pellentesque, lobortis eget nisi. Integer velit augue, interdum a nisi non, ullamcorper semper sapien. Donec viverra justo nec dignissim malesuada.</p>
            </div>
          </div>
          <div className="album-video">
            <div className="title"><h2>Promo Video</h2></div>
            <div className="content">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/1ryRtCNR6FU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
}

export default SingleEvent;