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
        background: #59b5a0;
        border-radius: 20px;
        -webkit-box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
        box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        position: relative;
        max-width: 450px;
        z-index: -1;
        margin: 0px 20px 20px 20px;
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
        right: -20px;
        bottom: -32px;
        background: url("images/md-logo.png");
        background-position: top;
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
        border-bottom: 10px dashed white; }

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

      .parallax::after {
        /* Display and position the pseudo-element */
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* Move the pseudo-element back away from the camera,
         * then scale it back up to fill the viewport.
         * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
        -webkit-transform: translateZ(-1px) scale(1.5);
        transform: translateZ(-1px) scale(1.5);
        /* Force the background image to fill the whole element. */
        background-size: 100%;
        /* Keep the image from overlapping sibling elements. */
        z-index: -1; }

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

      .founders-message__gradient-cover {
        width: 100%;
        height: 70px;
        background: -webkit-gradient(linear, left bottom, left top, from(white), to(rgba(0, 212, 255, 0)));
        background: -webkit-linear-gradient(bottom, white 0%, rgba(0, 212, 255, 0) 100%);
        background: -o-linear-gradient(bottom, white 0%, rgba(0, 212, 255, 0) 100%);
        background: linear-gradient(0deg, white 0%, rgba(0, 212, 255, 0) 100%);
        position: absolute;
        bottom: 0; }

      .founders-message__button {
        margin: 20px 40px; }


      </style>
      <section class="header-card__container">
        <h1 class="header-card__title">Peace, Justice and Strong Institutions</h1>
        <h3 class="header-card__tagline">sdg goal 16</h3>
        <div class="header-card__side-image"></div><a class="button header-card__button">
          <p class="button__text">view schedule</p></a>
      </section>
      <section class="quick-links__container">
        <p class="section-title">get started</p>
        <div class="quick-links__link regulations-image"><a class="quick-link__title" href="/intro">
            <h1>MDMUN</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/topics">
        <h1>Topics</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/rules-of-procedure">
        <h1>Rules of Procedure</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/human-rights">
            <h1>Human Rights</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/security-council">
            <h1>Security Council</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/economic-social">
            <h1>Economic Social</h1></a></div>
        <div class="quick-links__link"><a class="quick-link__title" href="/political">
            <h1>Political</h1></a></div>
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
          <div class="founders-message__gradient-cover"> </div>
        </div><a class="button founders-message__button" href="/founder-message">
          <p class="button__text">view full message</p></a>
      </section>

    `;
  }
}

window.customElements.define('home-page', HomePage);
