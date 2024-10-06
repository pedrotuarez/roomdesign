import React from 'react';
import './css/RoomDesign.css';
import './css/FontAwesomeAll.css';
import ShowMenu from './js/menu.js';
import imagesRoom from './js/imagesRoom';

const submitForm = () => {
  alert('Message sent..!')
}

function RoomDesign() {
  
  return (
    <>
      <header className="main-header">
        <div className="container container-flex">
          <h1 className="main-title">
            <span className="color-span">Room</span> Design
          </h1>
          <nav className="main-nav">
            <button className="icon-menu" id="btn-menu" onClick={ShowMenu}>
              <span><i className="fa fa-bars"></i></span>
              <span className="none">X</span>
            </button>
            <ul className="menu hidden" id="menu">
              <li className="menu-item">
                <a href="https://pedrotuarez.github.io/portfolio"
                  className="menu-link">
                    <span>PORTFOLIO</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="menu-link">
                    <span>HOME</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="menu-link">
                    <span>SERVICES</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="menu-link">
                    <span>GALLERY</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="menu-link">
                    <span>CONTACT</span>
                </a>
              </li>
              <div className="menu-social">
                <a href="https://pedrotuarez.github.io/roomdesign"
                  className="icon-social">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://pedrotuarez.github.io/roomdesign"
                  className="icon-social">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512"
                      style={{width: "12px"}}
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                        106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                        48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                </a>
                <a href="https://pedrotuarez.github.io/roomdesign"
                  className="icon-social">
                    <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </header>

      <div className="banner">
        <div className="banner-content">
          <h2 className="banner-title">01.</h2>
          <p className="banner-txt">
            <span className="color-span">THIS YEAR I'VE</span> 
            COMPLETED MORE COMPLEX DESIGN PROJECTS.
          </p>
        </div>
      </div>

      <main className="main">
        <section className="welcome">
          <h2 className="welcome-title">WELCOME</h2>
          <p className="welcome-txt">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            doloribus, quisquam excepturi blanditiis sapiente beatae ex minima,
            itaque repudiandae sunt, dolor eaque rem reprehenderit error velit
            soluta consectetur. Incidunt, quaerat?
          </p>
          <a href="https://pedrotuarez.github.io/roomdesign"
            className="welcome-btn">
              READ MORE
          </a>
        </section>

        <section className="design">
          <div className="design-item">
            <h3 className="design-title">Commercial Interiors</h3>
            <img src={imagesRoom[0].src} alt={imagesRoom[0].alt}
              className="design-img"
            />
          </div>
          <div className="design-item">
            <h3 className="design-title">Hospitality Interiors</h3>
            <img src={imagesRoom[1].src} alt={imagesRoom[1].alt}
              className="design-img"
            />
          </div>
          <div className="design-item">
            <h3 className="design-title">Kitchen Design</h3>
            <img src={imagesRoom[2].src} alt={imagesRoom[2].alt}
              className="design-img"
            />
          </div>
          <div className="design-item">
            <h3 className="design-title">Bedroom Design</h3>
            <img src={imagesRoom[3].src} alt={imagesRoom[3].alt}
              className="design-img"
            />
          </div>
        </section>

        <section className="testimonials">
          <h3 className="testimonials-title">What People are Saying</h3>
          <img src={imagesRoom[4].src} alt={imagesRoom[4].alt}
            className="testimonials-img"
          />
          <p className="testimonials-txt">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
            non provident
          </p>
          <h4 className="testimonials-user">Richard Doe</h4>
        </section>

        <section className="tips">
          <div className="tips-cover">
            <h3 className="tips-cover-title">HOME DECOR & DESING TIPS</h3>
            <img src={imagesRoom[5].src} alt={imagesRoom[5].alt}
              className="tips-cover-img"
            />
          </div>
          <div className="tips-box">
            <div className="tips-box-item">
              <div className="tips-box-item-icon">
                <div className="tips-box-item-icon-2"></div>
                <i className="fas fa-cog"></i>
              </div>
              <div className="tips-box-content">
                <h4 className="box-content-title">BEDROOM DESIGN</h4>
                <p className="box-content-txt">
                  Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.
                </p>
              </div>
            </div>
            <div className="tips-box-item">
              <div className="tips-box-item-icon">
                <div className="tips-box-item-icon-2"></div>
                <i className="fas fa-university"></i>
              </div>
              <div className="tips-box-content">
                <h4 className="box-content-title">KITCHEN DESIGN</h4>
                <p className="box-content-txt">
                  Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.
                </p>
              </div>
            </div>
            <div className="tips-box-item">
              <div className="tips-box-item-icon">
                <div className="tips-box-item-icon-2"></div>
                <i className="fas fa-wrench"></i>
              </div>
              <div className="tips-box-content">
                <h4 className="box-content-title">KIDS ROOM DESIGN</h4>
                <p className="box-content-txt">
                  Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <h2 className="newsletter-title">NEWSLETTER</h2>
          <form className="form">
            <input type="email" placeholder="Email" className="form-mail"/>
            <input
              type="submit" 
              value="Subscribe" 
              className="form-submit"
              onClick={submitForm}  
            />
          </form>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container-footer">
          <div className="footer-column column-50-25">
            <h2 className="footer-title">Company</h2>
            <p className="footer-txt">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of Latin at Hampden-Sydney College in
              Virginia from a Lorem Ipsum passage, undoubtable source.
            </p>
            <p className="footer-author">- Petter Tuárez, CEO</p>
          </div>
          <div className="footer-column column-50-25">
            <h2 className="footer-title">Tweets</h2>
            <p className="footer-txt">
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                style={{width: "14px", marginBottom: "-2px"}}
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                  106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                  48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
              Sed ut perspiciatis unde omnis iste 
              natus error sit voluptatem accus.
            </p>
            <a href="https://pedrotuarez.github.io/roomdesign"
              className="footer-link">
                http://example.com
            </a>
            <p className="footer-date">About a day ago</p>
            <p className="footer-txt">
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                style={{width: "14px", marginBottom: "-2px"}}
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                  106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                  48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
              Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accus.
            </p>
            <a href="https://pedrotuarez.github.io/roomdesign" 
              className="footer-link">
                http://example.com
            </a>
            <p className="footer-date">About a day ago</p>
          </div>
          <div className="footer-column column-50-25">
            <h2 className="footer-title">Connect</h2>
            <div className="footer-socials">
              <div className="social-icon icon-facebook">
                <i className="fab fa-facebook-f"></i>
                <a href="https://pedrotuarez.github.io/roomdesign"
                  className="social-link facebook-txt">
                    Like us on Facebook
                </a>
              </div>
              <div className="social-icon icon-twitter">
                <span className="svg-twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                    style={{marginRight: "10px"}}
                    className="fa-twitter"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                      106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                      48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </span>
                <a href="https://pedrotuarez.github.io/roomdesign"
                  className="social-link twitter-txt">
                    Follow us on Twitter
                </a>
              </div>
              <div className="social-icon icon-dribbble">
                <i className="fab fa-dribbble"></i>
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="social-link dribbble-txt">
                    Follow us on Dribble
                </a>
              </div>
              <div className="social-icon icon-pinterest">
                <i className="fab fa-pinterest"></i>
                <a href="https://pedrotuarez.github.io/roomdesign" 
                  className="social-link pinterest-txt">
                    Follow us on Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="footer-column column-50-25">
            <h2 className="footer-title">Contact</h2>
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contact-txt">
                The company name Lorem ipsum dolor, Polo Street (Yellow Door)
              </p>
            </div>
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
              <p className="contact-txt">
                1234567890
              </p>
            </div>
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
              <p className="contact-txt">
                example@example.com
              </p>
            </div>
          </div>
        </div>
        <p className="copy">
          &copy; 2024 Room Design. All Right Reserved | Design by
          &nbsp;<span className="color-span">@pedrotuarez</span>
        </p>
      </footer>
    </>
  )
}

export default RoomDesign;