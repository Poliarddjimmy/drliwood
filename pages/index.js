import Image from 'next/image'

// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "../components/audio/audioPlayer"
import Navigation from "../components/layouts/navigation"


export default function Home() {
  return (
    <div >
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
        <div id="jquery_jplayer_1" className="jp-jplayer"></div>
        <AudioPlayer file="/musics/example.mp3" />
      </section>


      <nav className="navbar fixonscroll solidnavbar navbar-inverse" role="navigation" id="home-nav">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><Image src="/images/logo-dark.png" width={100} height={100} alt="Jukebox Logo" /></a>
          </div>

          <Navigation />
        </div>
      </nav>


      <section className="latest-album">
        <div className="container">
          <div className="col-md-3 col-sm-3 intro-wrap">
            <div className="intro wow animated fadeIn" data-wow-delay="0.3s">
              <h3>Latest Album</h3>
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


    </div>
  )
}
