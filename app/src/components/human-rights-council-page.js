import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './council-people.js';
import { store } from '../store.js';
import council from '../reducers/council.js';
store.addReducers({
  council
})
import { SharedStyles } from './shared-styles.js';

class HRCouncilPage extends PageViewElement {
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
          <h1 class="council__header--title">Human Rights Council</h1>
        </section>
        <div class="council__content-container">
         <div class="council__brief-summary-container">
          <h1 class="council__brief-summary__title">Brief Summary</h1>
          <p class="council__brief-summary__text">
          The Human Rights Council is an inter-governmental body within the United Nation system, responsible
  for strengthening the promotion and protection of all human rights around the globe. The United Nation
  Human Rights Council also addresses important thematic human rights issues such as freedom of
  association and assembly, freedom of expression, freedom of belief and religion, women’s rights, LGBTQ
  rights, and the rights of racial and ethnic minorities
          </p>
         </div>
        </div>
        <div class="council__people-container">
          <council-people category="chairs" hr=true></council-people>
          <council-people category="members" hr=true></council-people>
        </div>
      </section>
    `
  }
}

window.customElements.define('hr-council-page', HRCouncilPage);
