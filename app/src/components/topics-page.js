import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class TopicsPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
       b {
         color: #f5bd34;
       }
      </style>
      <section class="">
        <section class="header-card__container">
          <h1 class="header-card__title">Topics</h1>
          <h3 class="header-card__tagline">What will you be working on?</h3>
        </section>
        <div class="normal-page-body">
          <div class="topic">
            <p class="section-title">human rights</p>
            <ol>
              <li>Syrian Refugee Crisis.</li>
              <li>Ending abuse, exploitation, trafficking and all forms of violence against and torture against children.</li>
            </ol>
            <b>Countries</b>
            <div class="countries">South Africa, Phillippines, China, Mexico, Iran, Russia, France, Germany, UK, Lebanon, USA, Syria, Singapore, Japan, Nigeria, India, Zimbabwe</div>
          </div>
          <div class="topic">
            <p class="section-title">economic social</p>
            <ol>
              <li>Strenghtening the coordination of humanitarian assistance.</li>
              <li>Promoting the Political, Socioeconomic, and Cultural Rights of Indigenous Peoples.</li>
            </ol>
            <b>Countries</b>
            <div class="countries">Brunei, Netherlands, South Korea, Burundi, Maldives, Congo, Malaysia, Ghana</div>
          </div>
          <div class="topic">
            <p class="section-title">security</p>
            <ol>
              <li>Resolving the Syrian War.</li>
              <li>Reducing illicit financial and arm flows, and combatting all forms or organized crime.</li>
            </ol>
            <b>Countries</b>
            <div class="countries">Iraq, Iran, Portugal, Ghana, Sierra Leone, Australia, Germany, Switzerland, USA</div>
          </div>
          <div class="topic">
            <p class="section-title">political</p>
            <ol>
              <li>Effectively reinforcing and implementing international laws in carrying out criminal proceedings.</li>
              <li>Substantially reduce corruption and bribery in all forms.</li>
            </ol>
            <b>Countries</b>
            <div class="countries">South Africa, Sudan</div>
          </div>
        </div>
      </section>
    `
  }
}

window.customElements.define('topics-page', TopicsPage);
