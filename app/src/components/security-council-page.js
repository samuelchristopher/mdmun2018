import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './council-people.js';
import { store } from '../store.js';
import council from '../reducers/council.js';
store.addReducers({
  council
})
import { SharedStyles } from './shared-styles.js';

class SECCouncilPage extends PageViewElement {
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
          <h1 class="council__header--title">Security Council</h1>
        </section>
        <div class="council__content-container">
         <div class="council__brief-summary-container">
          <h1 class="council__brief-summary__title">Brief Introduction</h1>
          <p class="council__brief-summary__text">
          The Security Council has primary responsibility under the United Nation Charter, for the maintainence of
international peace and security. Under the Charter, all member states are obligated to comply with
Council’s decisions. The Security Council takes the lead in determining the existence of a threat to the
peace and act of aggression. It calls upon the parties to a dispute to settle it by peaceful means and
recommends methods of adjustments or terms of settlement.
          </p>
         </div>
        </div>
        <div class="council__people-container">
          <council-people category="chairs" sec=true></council-people>
          <council-people category="members" sec=true></council-people>
        </div>
      </section>
    `
  }
}

window.customElements.define('sec-council-page', SECCouncilPage);
