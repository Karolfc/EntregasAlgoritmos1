import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile name="karolfuentes" place="Uptown cat" views="20.144" description="Let's get in the wild" comments="View all 419 comments" date="2 DAYS AGO"></my-profile>
        `
    }
}

customElements.define("app-container",AppContainer);