import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class FounderMessage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      b {
        color: #f5bd34;
      }
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
        text-align: center;
       }

      .founders-message__short-text {
        text-align: center; }

        .founders-message__end {
          text-align: center;
          margin-bottom: 20px;
        }

        .founder-message-page {
          padding: 0 0 40px 0;
        }

      </style>
      <section class="founders-message__container founder-message-page">
        <p class="section-title">founder's message</p>
        <div class="founders-message__image-container">
          <div class="founders-message__image"></div>
          <div class="founders-message__name">Kimberley Leong</div>
          <div class="founders-message__title">Founder of MDMUN, Maktab Duli Graduate</div>
        </div>
        <div class="founders-message__text-container">
          <p class="founders-message__short-text">My name is Kimberley, I am a former student of Maktab Duli, Class of 2015, and I am also the Main Organizer of MD MUN 2016. Throughout my time in Maktab Duli and secondary school years, I have participated in many public speaking competitions and events, including being the title holder of Brunei's National Senior Level English Debate Competition 2015, however, some of my most memorable experiences through these years are my MUN experiences; which is why I was inspired to organize my very own.</p>
          <p class="founders-message__short-text">It started out with just an idea, that I’d never thought it would
          happen, let alone having the thoughts of it being run annually. I’d
          like to thank all the organizers especially teachers in charge for
          all their hard work throughout these years for making MD MUN
          a successful one</p>
          <p class="founders-message__short-text">I wish you all the best in having a fulfilling experience in this
          conference. You will leave this conference with great memories,
          knowledge on global issues, and also essential skills, such as
          debating and teamwork, that can help you greatly in future
          endeavors.</p>
          <b class="founders-message__end">Thank you to all delegates, I hope you have a wonderful MD
          MUN experience.</b>


          </div>
      </section>
    `
  }
}

window.customElements.define('founder-message', FounderMessage);
