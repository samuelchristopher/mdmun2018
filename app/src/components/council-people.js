import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
// import { getHRChairs, getHRMembers, getSECChairs, getSECMembers, getECOSOCChairs, getECOSOCMembers, getPOLChairs, getPOLMembers } from '../actions/council.js';
import { getHRChairs, getHRMembers, getSECChairs, getSECMembers } from '../actions/council.js';

class CouncilPeople extends connect(store)(LitElement) {
  _firstRendered() {
    let { _props } = this
      if (_props.category === 'chairs' && _props.hr === true) {
        return store.dispatch(getHRChairs())
      } else if (_props.category === 'members' && _props.hr === true) {
        return store.dispatch(getHRMembers())
      }
      if (_props.category === 'chairs' && _props.sec === true) {
        return store.dispatch(getSECChairs())
      } else if (_props.category === 'members' && _props.sec === true) {
        return store.dispatch(getSECMembers())
      }
      // } else if (_props.category === 'chairs' && _props.ecosoc === true) {
      //   return store.dispatch(getECOSOCChairs())
      // }
      // } else if (_props.category === 'members' && _props.ecosoc === true) {
      //   return store.dispatch(getECOSOCMembers())
      // }
      // } else if (_props.category === 'chairs' && _props.pol === true) {
      //   return store.dispatch(getPOLChairs())
      // }
      // } else if (_props.category === 'members' && _props.pol === true) {
      //   return store.dispatch(getPOLMembers())
      // }
    return
  }

  _stateChanged(state) {
    let { _props } = this
    this._data = []
    if (_props) {
      if (_props.category === 'chairs' && _props.hr === true) {
        this._data = state.council.HRChairs
        return this._requestRender()
      } else if (_props.category === 'members' && _props.hr === true) {
        this._data = state.council.HRMembers
        return this._requestRender()
      }
      if (_props.category === 'chairs' && _props.sec === true) {
        this._data = state.council.SECChairs
        return this._requestRender()
      } else if (_props.category === 'members' && _props.sec === true) {
        this._data = state.council.SECMembers
        return this._requestRender()
      }
      // } else if (_props.category === 'chairs' && _props.ecosoc === true) {
      //   this._data = state.council.ECOSOCChairs
      //   return this._requestRender()
      // }
      // } else if (_props.category === 'members' && _props.ecosoc === true) {
      //   this._data = state.council.ECOSOCMembers
      //   return this._requestRender()
      // }
      // } else if (_props.category === 'chairs' && _props.pol === true) {
      //   this._data = state.council.POLChairs
      //   return this._requestRender()
      // }
      // } else if (_props.category === 'members' && _props.pol === true) {
      //   this._data = state.council.POLMembers
      //   return this._requestRender()
      // }
    }
    return this._requestRender()
  }
  _render(props) {
    this._props = props
    return html`
        <style>
          .council__people-category {
            color: #f5bd34;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
          }
        </style>
        <p class="council__people-category">${props.category}</p>
        <ol>
        ${this._data.map((item) =>
          html`
          <li class="council__person">${item.name}<span class="council__person-info">${item.info}</span></li>
          `)}
        </ol>
    `;
  }

  static get properties() {
    return {
      category: String,
      hr: Boolean
    }
  }
}

window.customElements.define('council-people', CouncilPeople);
