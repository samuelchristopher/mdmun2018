import { html } from '@polymer/lit-element';

export const SharedStyles = html`
<style>
  /* :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  } */

  /* section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  } */
   /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */@import url(https://fonts.googleapis.com/css?family=Abril+Fatface|Open+Sans:400,700);button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}html{line-height:1.15;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}body{margin:0;font-family:'Open Sans',sans-serif}h1{font-family:'Abril Fatface',serif}
  .section-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 30px; }

  .button {
    background-color: #f5bd34;
    -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.35);
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 20px;
    display: inline-block;
    text-align: center;
    border-radius: 60px; }
    .logo__text {
      font-family: 'Abril Fatface', serif;
      font-size: 30px;
    }

    .logo__md {
      color: #59b5a0; }
    h1 {
      font-family: 'Abril Fatface', sans-serif;
    }

    .main-content {
      margin-top: 100px;
    }

    .normal-page-container {
      margin: 20px auto;
      max-width: 450px;
      text-align: center;
    }

    .normal-page-body {
      margin-top: 20px;
      padding: 20px;
    }

    /* need to componentize */
    .header-card__container {
      background: #59b5a0;
      border-radius: 20px;
      -webkit-box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0px 13px 114px 0px rgba(0, 0, 0, 0.35);
      overflow: hidden;
      position: relative;
      max-width: 450px;
      z-index: -1;
      margin: 0px 20px 20px 20px;
     }

    .header-card__title {
      color: white;
      font-family: 'Abril Fatface', serif;
      padding: 20px 20px 0 20px;
      margin: 0 auto; }

    .header-card__tagline {
      color: #050a09;
      text-transform: uppercase;
      opacity: .5;
      padding: 0 20px;
      margin: 10px auto; }
</style>
`;
