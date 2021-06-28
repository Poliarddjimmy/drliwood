import Image from "next/image"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="col-md-4 col-sm-4 footer-row">
            <div className="title"><h4>About Our Band</h4></div>
            <div className="content">
              <div className="text">
                <p>Fusce sed nibh porttitor, scelerisque elit id, pretium justo. Integer venenatis tempus nisi non varius. Sed dui enim, lobortis et tempor.</p>
                <p>Fusce sed nibh porttitor, scelerisque elit id, pretium justo. Integer venenatis tempus nisi non varius. Sed dui enim, lobortis et tempor.</p>
              </div>
            </div>

            <div className="title"><h4>Keep Connected</h4></div>
            <p>Connect With Our Social Media.</p>
            <div className="content">
              <div className="socmed-wrap">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-soundcloud"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 footer-row">
            <div className="title"><h4>Upcoming Events</h4></div>
            <div className="content">
              <ul className="upcoming-event">
                <li>
                  <div className="col-md-1 col-sm-1 col-xs-1 date"><span className="number">20</span><br />Oct</div>
                  <div className="col-md-10 col-sm-10 col-xs-10 name">New Sound Wave - Camp Nou Stadium <br /> <a href="#" className="buy">Buy Ticket</a></div>
                </li>
                <li>
                  <div className="col-md-1 col-sm-1 col-xs-1 date"><span className="number">21</span><br />Sep</div>
                  <div className="col-md-10 col-sm-10 col-xs-10 name">Glory Sound - Brigif Kujang 15 <br /> <a href="#" className="buy">Buy Ticket</a></div>
                </li>
                <li>
                  <div className="col-md-1 col-sm-1 col-xs-1 date"><span className="number">10</span><br />Nov</div>
                  <div className="col-md-10 col-sm-10 col-xs-10 name">Bandung Berisik - Lanud Sulaeman <br /> <a href="#" className="buy">Buy Ticket</a></div>
                </li>
                <li>
                  <div className="col-md-1 col-sm-1 col-xs-1 date"><span className="number">17</span><br />Dec</div>
                  <div className="col-md-10 col-sm-10 col-xs-10 name">Hammersonic - Gasibu Stadium<br /> <a href="#" className="buy">Buy Ticket</a></div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 footer-row">
            <div className="title"><h4>Instagram</h4></div>
            <div className="content">
              <div className="content footer-images">
                <a className="fancybox" href="/images/footer-image1.jpg" data-fancybox-group="gallery">
                  <div className="image"><Image width={70} height={70} src="/images/footer-image1.jpg" alt="footer image" /></div>
                </a>
                <a className="fancybox" href="/images/footer-image2.jpg" data-fancybox-group="gallery">
                  <div className="image"><Image width={70} height={70} src="/images/footer-image2.jpg" alt="footer image" /></div>
                </a>
                <a className="fancybox" href="/images/footer-image3.jpg" data-fancybox-group="gallery">
                  <div className="image"><Image width={70} height={70} src="/images/footer-image3.jpg" alt="footer image" /></div>
                </a>
                <a className="fancybox" href="/images/footer-image4.jpg" data-fancybox-group="gallery">
                  <div className="image"><Image width={70} height={70} src="/images/footer-image4.jpg" alt="footer image" /></div>
                </a>
              </div>
            </div>

            <div className="title"><h4>Tag cloud</h4></div>
            <div className="content">
              <div className="tag-wrap">
                <a href="#" className="tag">Music</a>
                <a href="#" className="tag">Band</a>
                <a href="#" className="tag">Rock</a>
                <a href="#" className="tag">Distortion</a>
                <a href="#" className="tag">Guitar</a>
                <a href="#" className="tag">Drum</a>
                <a href="#" className="tag">Bass</a>
                <a href="#" className="tag">DRLiwood</a>
                <a href="#" className="tag">Hard</a>
                <a href="#" className="tag">Metal</a>
                <a href="#" className="tag">Hardcore</a>
                <a href="#" className="tag">Punk</a>
                <a href="#" className="tag">Scream</a>
                <a href="#" className="tag">Shout</a>
                <a href="#" className="tag">Progressive</a>
                <a href="#" className="tag">Fast</a>
                <a href="#" className="tag">Pop</a>
              </div>
            </div>
          </div>
        </div>

      </footer>


      <section className="copyright">
        <div className="container">
          <p>&copy; <a className="orange" href="">DRLiwood {(new Date()).getFullYear()}</a> All Right Reserved</p>
        </div>
      </section>
    </>
  )
}
export default Footer