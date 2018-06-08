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
       .question {
         color: #f5bd34;
         margin: 10px;
       }
       .topic__category {
         color: #f5bd34;
         text-align: center;
         font-weight: bold;
         text-transform: uppercase;
       }

       .topic__container:not(:first-child) {
         margin: 50px auto;
       }
      </style>
      <section class="">
        <section class="header-card__container">
          <h1 class="header-card__title">Topics</h1>
          <h3 class="header-card__tagline">What will you be working on?</h3>
        </section>
        <div class="normal-page-body">
          <div class="topic__container">
            <p class="topic__category">human rights</p>
            <ul>
              <li class="topic">
                <h1>Syrian Refugee Crisis</h1>
                <p class="topic-desc">The question of effectively managing and coordinating the flow and livelihood of refugees in the new host countries.</p>
              </li>
              <li class="topic">
                <h1>Reinforcement of children's fundamental rights</h1>
                <p class="topic-desc">The question of ending abuse, exploitation, trafficking and all forms of violence and torture against children.</p>
              </li>
            </ul>
          </div>
          <div class="topic__container">
            <p class="topic__category">security</p>
            <ul>
              <li class="topic">
                <h1>Resolving the Syrian War</h1>
                <p class="topic-desc">The question of resolving the ongoing conflict in Syria and alleviating the affects of the war.</p>
              </li>
              <li class="topic">
                <h1>Illicit transnational crimes</h1>
                <p class="topic-desc">The question of reducing illicit financial and arm flows, and combatting all forms of organised crime.</p>
              </li>
            </ul>
          </div>
          <div class="topic__container">
            <p class="topic__category">political</p>
            <ul>
              <li class="topic">
                <h1>Immunities & Criminal Proceedings</h1>
                <p class="topic-desc">The question of effectively reinforcing and implementing international laws in carrying out criminal proceedings.</p>
              </li>
              <li class="topic">
                <p class="topic-desc">The question of substantially reducing corruption and bribery in all forms.</p>
              </li>
            </ul>
          </div>
          <div class="topic__container">
            <p class="topic__category">eco-soc</p>
            <ul>
              <li class="topic">
                <h1>Humanitarian aid and assistance</h1>
                <p class="topic-desc">The question of strengthening the coordination of emergency humanitarian assistance of the United Nations.</p>
              </li>
              <li class="topic">
                <h1>Indigenous rights</h1>
                <p class="topic-desc">The question of promoting the political, socioeconomic and cultural rights of indigenous peoples.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `
  }
}

window.customElements.define('topics-page', TopicsPage);
