import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class IntroPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
       b {
         color: #f5bd34;
       }
      </style>
      <section class="normal-page-container">
        <section class="header-card__container">
          <h1 class="header-card__title">Introduction to MDMUN</h1>
          <h3 class="header-card__tagline">What is MDMUN?</h3>
        </section>
        <p class="normal-page-body">MDMUN is MD’s version of Model UNITED NATIONS. Model UN is an extra curricular activity that allows students to take on the role of delegates of a country and take part in a simulative conference as is done by the UN. Here students have an opportunity to learn the ways of the UN, the problems they face and actions taken to combat the issues our world encounters. It is also an excellent way gain skills such as leadership, public speaking, critical thinking and cooperation, all of which are essential to a student in their future endeavours. It also opens students’ eyes to the world we live in and instill in them an awareness. This awareness is what will lead them to be the leaders of tomorrow and the hope of the future that our world so desperately needs.
        </p>
        <b>So let’s all unite for a better tomorrow!</b>
      </section>
    `
  }
}

window.customElements.define('intro-page', IntroPage);
