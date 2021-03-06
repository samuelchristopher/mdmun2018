import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class HomePage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      .header-card__container {
        text-align: center;
       background: #59b5a0;
       border-radius: 20px;
       -webkit-box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
       box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
       overflow: hidden;
       position: relative;
       max-width: 450px;
       z-index: -1;
       margin: 0px 20px 20px 20px;
       height: 250px;
       display: -webkit-box;
       display: -ms-flexbox;
       display: flex;
       -webkit-box-orient: vertical;
       -webkit-box-direction: normal;
       -ms-flex-direction: column;
               flex-direction: column;
       -webkit-box-align: center;
       -ms-flex-align: center;
               align-items: center;
       }

      .header-card__title {
        color: white;
        font-family: 'Abril Fatface', serif;
        padding: 20px 20px 0 20px;
        margin: 0 auto; }

      .header-card__tagline {
        color: #050a09;
        text-transform: uppercase;
        opacity: .5;
        padding: 0 20px;
        margin: 10px auto; }

      .header-card__button {
        margin: 10px 0 20px 10px; }

      .header-card__side-image {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        position: absolute;
        bottom: -30px;
        background: url("images/md-logo.png");
        background-position: center 5px;
        background-size: cover; }

      .quick-links__container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px; }

      .quick-links__link {
        height: 150px;
        background: #f5bd34;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-decoration: none;
       }

      .quick-link__title {
        color: white;
        text-decoration: none;
        /* text-transform: capitalize; */
        text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
        padding-left: 20px;
         }
        .quick-link__title:active {
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
          transform: scale(1.1); }

      .regulations-image {
        background-image: url("images/regulations.png");
        background-position: fixed;
        background-size: cover; }

      .founders-message__container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        max-width: 450px; }

        /* .founders-message__container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            padding: 0 20px;
            max-width: 450px;
        } */

      .founders-message__image-container {
        text-align: center; }

      .founders-message__image {
        width: 100px;
        height: 100px;
        border: 5px solid #59b5a0;
        border-radius: 60px;
        margin: 20px auto;
        background: url("images/founder-image.jpg");
        background-position: -55px center; }

      .founders-message__name {
        font-weight: bold;
        margin-bottom: 10px; }

      .founders-message__title {
        font-size: 15px; }

        .founders-message__text-container {
          position: relative;
          z-index: -1;
         }


      .founders-message__short-text {
        text-align: center; }

      /* .founders-message__gradient-cover {
        width: 100%;
        height: 70px;
        background: -webkit-gradient(linear, left bottom, left top, from(white), to(rgba(0, 212, 255, 0)));
        background: -webkit-linear-gradient(bottom, white 0%, rgba(0, 212, 255, 0) 100%);
        background: -o-linear-gradient(bottom, white 0%, rgba(0, 212, 255, 0) 100%);
        background: linear-gradient(0deg, white 0%, rgba(0, 212, 255, 0) 100%);
        position: absolute;
        bottom: 0; } */

      .founders-message__button {
        margin: 20px 40px; }

      .center-horizontally-container {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
      }
        .p-1 {
          background-image: url('images/p-1.png');
          background-size: cover;
        }
        .p-2 {
          background-image: url('images/p-2.png');
          background-size: cover;
        }
        .p-3 {
          background-image: url('images/p-3.png');
        }
        .hr-1 {
          background-image: url('images/hr-1.png');
          background-size: cover;
          background-position: center;
        }
        .sec-1 {
          background-image: url('images/sec-1.png');
          background-size: cover;
        }
        .ecosoc-1 {
          background-image: url('images/ecosoc-1.png');
          background-position: -20px;
        }
        .pol-1 {
          background-size: cover;
          background-image: url('images/pol-1.png');
        }
      </style>
      <section class="header-card__container">
        <h1 class="header-card__title">Peace, Justice and Strong Institutions</h1>
        <h3 class="header-card__tagline">sdg goal 16</h3>
        <div class="header-card__side-image"></div>
      </section>
      <div class="center-horizontally-container">
        <a href="https://drive.google.com/open?id=1o8E3kXdmJoMxNX_rzbn4JSIlNZQJN-hG" target="_blank" class="button header-card__button">
        <p class="button__text">view schedule</p></a>
      </div>
      <section class="quick-links__container">
        <p class="section-title">get started</p>
        <a class="quick-links__link p-1" href="/intro"><h1 class="quick-link__title">
            MDMUN</h1></a>
        <a class="quick-links__link p-2" href="/topics"><h1 class="quick-link__title">
        Topics</h1></a>
        <a class="quick-links__link p-3" href="/rules-of-procedure"><h1 class="quick-link__title">
        Rules of Procedure</h1></a>
        <a class="quick-links__link hr-1" href="/human-rights"><h1 class="quick-link__title">
            Human Rights</h1></a>
        <a class="quick-links__link sec-1" href="/security"><h1 class="quick-link__title">
            Security</h1></a>
        <a class="quick-links__link ecosoc-1" href="/economic-social"><h1 class="quick-link__title">
            Economic Social</h1></a>
        <a class="quick-links__link pol-1" href="/political"><h1 class="quick-link__title">
            Political</h1></a>
      </section>
      <section class="founders-message__container">
        <p class="section-title">founder's message</p>
        <div class="founders-message__image-container">
          <div class="founders-message__image"></div>
          <div class="founders-message__name">Kimberley Leong</div>
          <div class="founders-message__title">Founder of MDMUN, Maktab Duli Graduate</div>
        </div>
        <div class="founders-message__text-container">
          <p class="founders-message__short-text">My name is Kimberley, I am a former student of Maktab Duli, Class of 2015, and I am also the Main Organizer of MD MUN 2016. Throughout my time in Maktab Duli and secondary school years, I have participated in many public speaking competitions and events, including being the title holder of Brunei's National Senior Level English Debate Competition 2015, however, some of my most memorable experiences through these years are my MUN experiences; which is why I was inspired to organize my very own.</p>
          <!-- <div class="founders-message__gradient-cover"> </div> -->
        </div><a class="button founders-message__button" href="/founder-message">
          <p class="button__text">view full message</p></a>
      </section>

    `;
  }
}

window.customElements.define('home-page', HomePage);
