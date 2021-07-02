import { useState, useEffect } from "react";
import Layout from "../../components/layouts/layout";
import Image from "next/image";
import tracks from "../tracks.json"
import AudioPlayerList from "../../components/audio/audioPlayerList"

const SingleWork = () => {
  const [mouseHove, setMouseHover] = useState(false)
  const [musicSelected, setMusicSelected] = useState();
  const [next, setNext] = useState();

  useEffect(() => {
    setMusicSelected({ ...tracks[0], track: 0, autoPlay: false })
  }, [])

  useEffect(() => {
    next && tracks[next] && setMusicSelected({ ...tracks[next], track: next, autoPlay: true })
    next === 0 && setMusicSelected({ ...tracks[0], track: 0, autoPlay: true })
  }, [next])

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
            {musicSelected?.image && <Image src={musicSelected?.image} alt="Event image" width={700} height={700} />}
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
                    <span className="shape"><i className="fa fa-calendar"></i></span>Release Date::
                  </span> 07 / October / 2015
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-clock"></i></span>Length:
                  </span> 44:09
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-map-marker"></i></span>Label:
                  </span> Lipet Recording Studio
                </li>
                <li>
                  <span className="bold">
                    <span className="shape"><i className="fa fa-phone"></i></span>Producer:
                  </span> Oki Prasastio
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
          <div className="content">
            <div id="jquery_jplayer_3" className="jp-jplayer" style={{ width: "0px", height: "0px" }}>
              {musicSelected?.image && <Image src={musicSelected?.image} id="jp_poster_0" style={{ width: "0px", height: "0px", display: "none" }} width={700} height={700} alt="image" /> }
              <audio id="jp_audio_0" preload="metadata" src="http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg" title="Cro Magnon Man"></audio>
            </div>
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

export default SingleWork;