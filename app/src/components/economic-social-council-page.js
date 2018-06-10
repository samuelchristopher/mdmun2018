import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './council-people.js';
import { store } from '../store.js';
import council from '../reducers/council.js';
store.addReducers({
  council
})
import { SharedStyles } from './shared-styles.js';

class ECOSOCCouncilPage extends PageViewElement {
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
          <h1 class="council__header--title">Economic Social Council</h1>
        </section>
        <div class="council__content-container">
         <div class="council__brief-summary-container">
          <h1 class="council__brief-summary__title">Brief Introduction</h1>
          <p class="council__brief-summary__text">
          The Economic and Social Council is the principal body for coordination, policy review, policy dialogue
and recommendations on economic, social and environmental issues, as well as implementation of
internationally agreed development goals, it serves as the central mechanism for activities of the UN
system and its specialized agencies in economic, social and environmental fields, surpervising subsidiary
and expert bodies. It is the United Nations’ central platform for reflection, debate and innovative
thinking on sustainable development.
          </p>
         </div>
        </div>
        <div class="council__people-container">
          <council-people category="chairs" ecosoc=true></council-people>
          <council-people category="members" ecosoc=true></council-people>
        </div>
      </section>
    `
  }
}

window.customElements.define('ecosoc-council-page', ECOSOCCouncilPage);
