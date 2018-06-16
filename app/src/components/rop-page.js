import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class RoPPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        .more-space {
          padding: 25px 10px;
        }

        .rules-category__container {
          margin: 0px auto;
          padding: 20px;
        }

        .rules-category__title {
          text-align: center;
        }
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
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
        }

        .space-bottom {
          margin-bottom: 20px;
        }

        .nested-list {
          padding-left: 15px;
        }

        li {
          margin-bottom: 15px;
        }

        .rules-def__title {
          text-transform: uppercase;
        }

        .rules-def__container {
          padding: 0 20px 20px 20px;
        }

        .rules-category__container > ol {
          padding-left: 15px;
        }

      </style>
      <section>
        <section class="header-card__container more-space">
          <h1 class="header-card__title">Rules of Procedure</h1>
          <h3 class="header-card__tagline">code of conduct and working regulations for the MDMUN conference</h3>
        </section>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Secretariat</h1>
          <ol>
            <li>The Secretary General has the ultimate authority in regards to the rules of procedure(RoP). The interpretation of the RoP shall be at his/her discretion and his/her decision on the matters not specified in the RoP shall prevail over all other.</li>
            <li>The Secretary General may at any time make oral and written statements to the Committee concerning any topic. Any deviation from the provisional agenda shall be at the approval of the Secretary General.</li>
            <li>The Secretary General shall assist the Chairs if necessary, receive and correct documents as proposed by the committees and in general shall supervise over the good functioning of the MDMUN conference.</li>
          </ol>
        </div>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Chairs</h1>
          <ol>
            <li>The chairs shall act as the directors of the committee and shall preside over its sessions. They shall declare the opening and closure of each session, open and close of floor to the points and motions and ensure the observance of the RoP.</li>
            <li>The chairs shall have the authority in regards to the proceedings of the committee; they shall have the right to rule out the points and motions they deem to be not constructive. They shall keep the committee in order and direct them towards consensus. The chairpersons are in all time responsible to the Secretary General.</li>
          </ol>
        </div>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Attendance</h1>
          <ol>
            <li>At the beginning of each session and upon the Motion to verify the Quorum, Chairpersons shall call in an alphabetical order on all members states in order to state their status of attendance. Members states reply “present and voting”.</li>
            <li>If any of the delegates were not present surging the role call, upon their arrival they shall send a note to the chairpersons clarifying their status of presence.</li>
          </ol>
        </div>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Quorum</h1>
          <ol>
            <li>The quorum signifies the minimum number of delegates who needs to be present in order to open session for the debate.</li>
            <li>The quorum is met when at least one-third of all delegates registered are present at the committee session. The quorum shall be verified at the beginning of each session by roll call.</li>
          </ol>
        </div>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Formal Debate</h1>
          <ol>
            <li>Delegates are given 1 minute to give an opening speech, to introduce their country’s view/position on the issue being debated.</li>
            <li>Debate starts with a reading of the operative clauses of the resolution followed by the points of clarification.</li>
            <li>The chairperson then allows debate on the resolution by a set number of debating rounds following the Speaker’s list the chairs have arranged. Speakers will be invited to speak for or against a resolution.</li>
            <li>If a delegate wishes to amend a resolution, the amendment must be written clearly on a note then sent to the chair who will present amendments at their desecration and at any time during the debate process. The chairperson acknowledges a proposed amendment then sets 1 or 2 rounds of debate at their discretion. An amendment is added to a resolution if it receives a simple majority.</li>
            <li>
              Motion for moderated caucus
              <ul class="nested-list">
                <li>The moderated caucus is aimed to facilitate and accelerate the discussion on the issues deemed as essential and critical for the topic.</li>
                <li>The motion for moderated caucus can be introduced by any delegates once the floor is open. The delegates shall specify the total time of the motion (not exceeding 20 mins), individual speaker’s time (not exceeding the speaker’s time set for the General Speaker’s list) and the purpose of the Motion.</li>
                <li>A simple majority is required for the motion to pass.</li>
                <li>In case that the delegate will not take advantage of whole allotted time assigned to them; the remaining time and floor is yield automatically to the chairpersons.</li>
                <li>The Motion can be ruled out at the discretion of the chairperson – such decision is not a subject to appeal.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="rules-def__container">
          <h3 class="rules-def__title">informal debate</h3>
          <p class="rules-def__text">
            Motion for unmoderated caucus
            <ul>
              <li>Unmoderated caucus is the most informal out of all forms of debate, during which delegates are able to discuss freely all issues with other delegates.</li>
              <li>The motion for un-moderated caucus can be introduced by any of the delegates once the floor is open. The delegates shall specify the purpose of the motion and shall state the total time  of the motion ( not exceeding 20 mins )</li>
              <li>A simple majority is required for the motion to pass</li>
              <li>The motion can be ruled out at the discretion of the chairperson – such decision is not a s subject to appeal.</li>
            </ul>
          </p>
        </div>
        <div class="rules-def__container">
          <h3 class="rules-def__title">closure of debate</h3>
          <p class="rules-def__text">After the speaker’s list had been exhausted and all caucuses completed, debate is closed and the committee automatically moves to voting.</p>
        </div>
        <div class="rules-def__container">
          <h3 class="rules-def__title">voting</h3>
          <p class="rules-def__text">All voting on a resolution is by role call; all other votings including that for amendments is done by a placard vote. Delegate may abstain from any vote. A delegate may propose to the chair that another delegate explain their vote by rising to a motion to request an explanation. The chairs will ask why the request has been made and if the chairperson feels the reason warrants the request can allow it. The delegate is then asked to explain their vote and given the option to change their vote.</p>
        </div>
        <div class="rules-def__container space-bottom">
          <h3 class="rules-def__title">rights of statement</h3>
          <p class="rules-def__text">If a delegate wishes to make a statement they may request a right to statement. A rights to statement can only be allowed when no other business is being addressed and at the prompting of the chair are there any rights of statement on the floor. All rights of statement are allowed at the chair’s discretion.</p>
        </div>
        <div class="center-horizontally-container">
          <a href="https://drive.google.com/open?id=16AUvjsoQkQmzcu3SbsA0t1R50NuuwdHe" target="_blank" class="space-bottom button header-card__button">
          <p class="button__text">view lexicon flowchart</p></a>
          <a href="https://drive.google.com/open?id=10dAnqevOpnzNc2IaAaE4SpMlrAlgQxyc" target="_blank" class="space-bottom button header-card__button">
          <p class="button__text">view sample documents</p></a>
          <a href="https://drive.google.com/open?id=1O2YNdHilOdhQvhuZdh77xHuRn5TWxq6D" target="_blank" class="space-bottom button header-card__button">
          <p class="button__text">view procedures</p></a>
          <a href="https://drive.google.com/open?id=181hAaQropGZwVaoBFctJC_r0_6P0KdOC" target="_blank" class="button header-card__button">
          <p class="button__text">view resolution format</p></a>
        </div>
      </section>
    `
  }
}

window.customElements.define('rop-page', RoPPage);
