import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import { SharedStyles } from './shared-styles.js';
import './snack-bar.js';

class MDMUNApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`
    ${SharedStyles}
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #E91E63;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
      }

      .toolbar-top {
        background-color: var(--app-header-background-color);
      }

      [main-title] {
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* .main-content {
        padding-top: 64px;
        min-height: 100vh;
      } */

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      /* footer {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        text-align: center;
      } */

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }
      }
      .footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #59b5a0;
        margin-top: 30px;
       }
        .footer__links-container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 100%; }
        .footer__link {
          font-family: 'Open Sans', sans-serif;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.5);
          font-weight: bold; }
          .footer__link:active {
            color: rgba(0, 0, 0, 0.8); }
        .footer__copyright {
          text-transform: capitalize;
          margin: 0 20px 20px 20px; }

        a:focus, .menu-btn:focus {
          outline: none;
        }

        main {
          min-height: 100vh;
        }

    </style>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
        <div main-title><h3 class="logo__text"> <span class="logo__md">MD</span>MUN</h3></div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a selected?="${_page === 'home'}" href="/home">Home</a>
        <a selected?="${_page === 'intro'}" href="/intro">MDMUN</a>
        <a selected?="${_page === 'topics'}" href="/topics">Topics</a>
        <a selected?="${_page === 'rules-of-procedure'}" href="/rules-of-procedure">RoP</a>
        <a selected?="${_page === 'human-rights'}" href="/human-rights">Human Rights</a>
        <a selected?="${_page === 'security'}" href="/security">Security</a>
        <a selected?="${_page === 'economic-social'}" href="/economic-social">Economic Social</a>
        <a selected?="${_page === 'political'}" href="/political">Political</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer opened="${_drawerOpened}"
        on-opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}">
      <nav class="drawer-list">
        <a selected?="${_page === 'home'}" href="/home">Home</a>
        <a selected?="${_page === 'intro'}" href="/intro">MDMUN</a>
        <a selected?="${_page === 'topics'}" href="/topics">Topics</a>
        <a selected?="${_page === 'rules-of-procedure'}" href="/rules-of-procedure">Rules of Procedure</a>
        <a selected?="${_page === 'human-rights'}" href="/human-rights">Human Rights</a>
        <a selected?="${_page === 'security'}" href="/security">Security</a>
        <a selected?="${_page === 'economic-social'}" href="/economic-social">Economic Social</a>
        <a selected?="${_page === 'political'}" href="/political">Political</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main class="main-content">
      <home-page class="page" active?="${_page === 'home'}"></home-page>
      <intro-page class="page" active?="${_page === 'intro'}"></intro-page>
      <topics-page class="page" active?="${_page === 'topics'}"></topics-page>
      <rop-page class="page" active?="${_page === 'rules-of-procedure'}"></rop-page>
      <founder-message class="page" active?="${_page === 'founder-message'}"></founder-message>
      <hr-council-page class="page" active?="${_page === 'human-rights'}"></hr-council-page>
      <sec-council-page class="page" active?="${_page === 'security'}"></sec-council-page>
      <ecosoc-council-page class="page" active?="${_page === 'economic-social'}"></ecosoc-council-page>
      <pol-council-page class="page" active?="${_page === 'political'}"></pol-council-page>
      <my-view404 class="page" active?="${_page === 'view404'}"></my-view404>
    </main>

    <footer class="footer">
      <h3 class="logo__text">MDMUN</h3>
      <!-- <div class="footer__links-container"><a class="footer__link" href="#">about</a><a class="footer__link" href="#">rules</a><a class="footer__link" href="#">contact</a></div> -->
      <div class="footer__copyright">copyright 2018 </div>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = 'MDMUN - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('mdmun-app', MDMUNApp);
