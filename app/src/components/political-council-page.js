import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './council-people.js';
import { store } from '../store.js';
import council from '../reducers/council.js';
store.addReducers({
  council
})
import { SharedStyles } from './shared-styles.js';

class POLCouncilPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        .council__header {
          padding: 20px;
        }

        .council__content-container {
          margin: 10px auto;
          padding: 20px;
        }

        .council__header--title {
          color: white;
          font-family: 'Abril Fatface', serif;
          padding: 0px 20px 0 20px;
          margin: 0 auto;
        }
      </style>
      <section>
        <section class="header-card__container council__header">
          <h1 class="council__header--title">Political Council</h1>
        </section>
        <div class="council__content-container">
         <div class="council__brief-summary-container">
          <h1 class="council__brief-summary__title">Brief Introduction</h1>
          <p class="council__brief-summary__text">
          The United Nations Deparment of Political Affairs (UNDPA) is a department of the Secretariat of the
United Nations with the responsibility for monitoring and assessing global political developments and
advising and assisting the UN Secretary General and his envoys in the peaceful prevention and
revolution of conflict around the world.
          </p>
         </div>
        </div>
        <div class="council__people-container">
          <council-people category="chairs" pol=true></council-people>
          <council-people category="members" pol=true></council-people>
        </div>
      </section>
    `
  }
}

window.customElements.define('pol-council-page', POLCouncilPage);
