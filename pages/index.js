import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AudioPlayer from "../components/audio/audioPlayer"
import AudioPlayerList from "../components/audio/audioPlayerList"
import Navigation from "../components/layouts/navigation"
import tracks from "./tracks.json"
import Footer from "../components/layouts/footer"
import SEO from "../components/layouts/SEO"


export default function Home() {

  const [musicSelected, setMusicSelected] = useState();
  const [next, setNext] = useState();

  useEffect(() => {
    setMusicSelected({ ...tracks[0], track: 0, autoPlay: false })
  }, [])

  useEffect(() => {
    next && tracks[next] && setMusicSelected({ ...tracks[next], track: next, autoPlay: true })
    next === 0 && setMusicSelected({ ...tracks[0], track: 0, autoPlay: true })
  }, [next])

  return (
    <div >
      <SEO title="Home" />
      <section className="banner">
        <div id="banner-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">

            <div className="item active slider carousel-inner-1">
              <div className="overlay"></div>
              <div className="container" style={{ height: "90vh" }}>
                <div className="content-wrap" >
                  <div className="content">
                    <div className="textwrap">
                      <div className="subtitle top animated fadeIn wow" data-wow-delay="0.5s">
                        <h2>Welcome to</h2>
                      </div>
                      <div className="title animated fadeIn wow" data-wow-delay="1s">
                        <h1>DRLiwood <span className="light">Production</span></h1>
                      </div>
                      <div className="subtitle animated fadeIn wow" data-wow-delay="1.5s">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus lacus, in placerat ex. Curabitur tristique eu sapien accumsan sodales.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item carousel-inner-2" >
              <div className="overlay"></div>
              <div className="container" style={{ height: "90vh" }}>
                <div className="content-wrap">
                  <div className="content">
                    <div className="textwrap">
                      <div className="subtitle top animated fadeIn wow" data-wow-delay="0.5s">
                        <h2>Introducing</h2>
                      </div>
                      <div className="title animated fadeIn wow" data-wow-delay="1s">
                        <h1>Vertical <span className="light">Attack Band</span></h1>
                      </div>
                      <div className="subtitle animated fadeIn wow" data-wow-delay="1.5s">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus lacus, in placerat ex. Curabitur tristique eu sapien accumsan sodales.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <a className="left carousel-control" href="#banner-carousel" role="button" data-slide="prev">
            <div className="control left">
              <div className="shape"><i className="fa fa-angle-left"></i></div>
            </div>
          </a>
          <a className="right carousel-control" href="#banner-carousel" role="button" data-slide="next">
            <div className="control right">
              <div className="shape"><i className="fa fa-angle-right"></i></div>
            </div>
          </a>

          <div className="scroll-info">
            <a href="#home-nav">
              <div className="shape">
                <i className="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
        <AudioPlayer file="/musics/example.mp3" />
      </section>

      <Navigation />

      <section className="latest-album">
        <div className="container">
          <div className="col-md-3 col-sm-3 intro-wrap">
            <div className="intro wow animated fadeIn" data-wow-delay="0.3s">
              <h3>Latest Works</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae lectus ac erat dapibus lobortis. Sed fermentum, ante quis mollis fringilla, augue sapien volutpat dolor, sit amet condimentum orci risus id purus.</p>
              <a href="album-3columns-filter.html"><div className="def-button">View All</div></a>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap wow animated fadeIn" data-wow-delay="0.2s">
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album1.jpg" width="255px" height="220px" alt="image" />
                <div className="overlay">
                  <div className="buy-wrapper">
                    <div className="buy">
                      <a className="link" href="album-single.html">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href="album-single.html"><div className="title"><h4>I Am Totally Free</h4></div></a>
                <div className="genre"><span>Acoustic</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 12</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap wow animated fadeIn" data-wow-delay="0.4s">
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album2.jpg" width="255px" height="220px" alt="album image" />
                <div className="overlay">
                  <div className="buy-wrapper">
                    <div className="buy">
                      <a className="link" href="album-single.html">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href="album-single.html"><div className="title"><h4>Danger Ranger</h4></div></a>
                <div className="genre"><span>Rock &amp; Roll</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 10</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 album-card-wrap wow animated fadeIn" data-wow-delay="0.6s">
            <div className="album-card">
              <div className="image hoverdir-target">
                <Image src="/images/album3.jpg" width="255px" height="220px" alt="image" />
                <div className="overlay">
                  <div className="buy-wrapper">
                    <div className="buy">
                      <a className="link" href="album-single.html">
                        <span><strong className="bold">View</strong><br />Tracks</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a href="album-single.html"><div className="title"><h4>Homogenic</h4></div></a>
                <div className="genre"><span>Alternative</span></div>
                <div className="tracks"><span><i className="fa fa-music"></i> 11</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule">
        <div className="overlay"></div>
        <div className="container content">
          <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.3s"><h2>Upcoming Events</h2></div>
          <div className="col-md-12">

            <div className="schedrow wow animated fadeIn">
              <div className="event">
                <span className="bold"><i className="fa fa-microphone"></i>New Sound Wave</span>
              </div>
              <div className="location">
                <span className="bold"><i className="fa fa-map-marker"></i>Camp Nou Stadium </span> / 12 August 2014
              </div>
              <div className="ticket">
                <i className="fa fa-ticket"></i><span className="bold">$175</span> / 0 Available
              </div>
              <div className="button-wrap"><a href="" className="def-button soldout" target="_blank" rel="noreferrer">Sold Out</a></div>
            </div>

            <div className="schedrow wow animated fadeIn">
              <div className="event">
                <span className="bold"><i className="fa fa-microphone"></i>Hammersonic</span>
              </div>
              <div className="location">
                <span className="bold"><i className="fa fa-map-marker"></i>Istora Senayan </span> / 12 October 2015
              </div>
              <div className="ticket">
                <i className="fa fa-ticket"></i><span className="bold">$200</span> / 15 Available
              </div>
              <div className="button-wrap"><a href="" className="def-button" target="_blank" rel="noreferrer">Buy Ticket</a></div>
            </div>

            <div className="schedrow wow animated fadeIn">
              <div className="event">
                <span className="bold"><i className="fa fa-microphone"></i>Bandung Berisik</span>
              </div>
              <div className="location">
                <span className="bold"><i className="fa fa-map-marker"></i>Brigif Kujang 15</span> / 28 August 2015
              </div>
              <div className="ticket">
                <i className="fa fa-ticket"></i><span className="bold">$250</span> / 100 Available
              </div>
              <div className="button-wrap"><a href="" className="def-button" target="_blank" rel="noreferrer">Buy Ticket</a></div>
            </div>

            <div className="schedrow wow animated fadeIn">
              <div className="event">
                <span className="bold"><i className="fa fa-microphone"></i>Hellprint Festival</span>
              </div>
              <div className="location">
                <span className="bold"><i className="fa fa-map-marker"></i>Lanud Sulaeman </span> / 17 September 2015
              </div>
              <div className="ticket">
                <i className="fa fa-ticket"></i><span className="bold">$150</span> / 0 Available
              </div>
              <div className="button-wrap"><a href="" className="def-button soldout" target="_blank" rel="noreferrer">Cancelled</a></div>
            </div>

            <div className="schedrow wow animated fadeIn">
              <div className="event">
                <span className="bold"><i className="fa fa-microphone"></i>Indie Ground</span>
              </div>
              <div className="location">
                <span className="bold"><i className="fa fa-map-marker"></i>Plaza Parahyangan </span> / 12 August 2014
              </div>
              <div className="ticket">
                <i className="fa fa-ticket"></i><span className="bold">$50</span> / 5 Available
              </div>
              <div className="button-wrap"><a href="" className="def-button" target="_blank" rel="noreferrer">Buy Ticket</a></div>
            </div>

          </div>
        </div>
      </section>


      <section className="about">
        <div className="container">
          <div className="col-md-6 col-sm-6">
            <div className="personnel wow animated fadeIn" data-wow-delay="0.2s">
              <div className="title">
                <h3>
                  All About <br />
                  <span className="bold orange">DRLiwood</span>
                </h3>
              </div>
              <div className="personnel-list">
                <div className="shape photo item" style={{ backgroundImage: "url(/images/users/jr.jpg)" }}>
                  <a href="" className="overlay">
                    <div className="name">
                      Jimmy Rock
                    </div>
                  </a>
                </div>
                <div className="shape photo item" style={{ backgroundImage: "url(/images/users/jr.jpg)" }}>
                  <a href="about.html" className="overlay">
                    <div className="name">
                      Collins
                    </div>
                  </a>
                </div>
                <div className="shape photo item" style={{ backgroundImage: "url(/images/users/jr.jpg)" }}>
                  <a href="about.html" className="overlay">
                    <div className="name">
                      Daniel Davids
                    </div>
                  </a>
                </div>
                <div className="shape photo item" style={{ backgroundImage: "url(/images/users/jr.jpg)" }}>
                  <a href="about.html" className="overlay">
                    <div className="name">
                      Tiffany
                    </div>
                  </a>
                </div>
              </div>
              <div className="text">
                <p>Cras viverra consequat massa eu pulvinar. Suspendisse porta sem ac erat euismod mollis. Donec sit amet sapien id lacus accumsan gravida. Phasellus in sagittis erat, a dictum diam. Donec in dui odio. Vivamus non facilisis nulla. In turpis dolor, dapibus ut lacus.</p>
                <p>Nunc porta augue ut dolor faucibus tempus. Fusce non eros quis enim pulvinar cursus vitae eget quam. Nam posuere pharetra venenatis.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="discography wow animated fadeIn" data-wow-delay="0.4s">
              <div className="title">
                <h3>
                  Discography <br />
                  <span className="bold orange">Of Our Music</span>
                </h3>
              </div>
              <div className="content">
                <div id="jp_container_2" className="jp-audio " role="application" aria-label="media player">
                  <div className="jp-type-playlist">

                    <AudioPlayerList
                      file={musicSelected}
                      autoPlay={musicSelected?.id !== tracks[0].id}
                      setNext={setNext}
                    />

                    <div className="jp-playlist mb-n3">
                      <ul className="p-0">
                        {tracks.map((track, idx) =>
                          <li
                            key={idx}
                            className={`d-block ${musicSelected?.id === track.id && "main-bg"} cursor-pointer`}
                            onClick={() => setMusicSelected({ ...track, track: idx, autoPlay: true })}
                          >
                            <div className="ml-4 mr-4">
                              <i className="fa fa-music mr-3" aria-hidden="true"></i> {track.title}
                            </div>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="gallery">
        <div className="overlay"></div>
        <div className="container content">
          <div className="title wow animated fadeInDown"><h2>Latest Photos</h2></div>
          <div className="diamond-grid">

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.2s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery1.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery1.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.4s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery2.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery2.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.6s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery3.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery3.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.7s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery4.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery4.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.8s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery5.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery5.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="0.9s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery6.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery6.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="diamond-wrap wow animated fadeIn" data-wow-delay="1s">
              <div className="shape photo" style={{ background: "url(assets/images/front-gallery7.jpg)" }}>
                <a className="fancybox" href="assets/images/front-gallery7.jpg" data-fancybox-group="front-gallery">
                  <div className="overlay-black"></div>
                  <div className="overlay">
                    <div className="text"><span>View Photo</span></div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div className="bottom-text">
            PHOTOS FROM OUR INSTAGRAM | FOLLOW AT @Awesomeband
          </div>
        </div>
      </section>


      <Footer />

    </div>
  )
}
