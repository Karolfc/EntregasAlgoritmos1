import {getData} from "./data.js"
import {Attribute} from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const data = await getData();
        this.render(data);
    }

     render(data: Array<Attribute>) {
        if(!this.shadowRoot) return;

        const pokemons = data.map(({ name, nickname, img, birthday, occupation }) => `<article>
        <link rel="stylesheet" href="./app/components/Profile/style.css">
             <section class="card">
                <h2 id="name">${name}</h2>
                <img class="ImgCharacter" src="${img}">
                <section class="DataCharacter">
                    <p><b>Birthday: </b> ${birthday}</p>
                    <p><b>Nickname: </b> ${nickname}</p>
                    <p><b>Occupation: </b> ${occupation}</p>
                </section>
             </section>
        </article>`);
        
        this.shadowRoot.innerHTML = `<section>
            ${pokemons.join("")}
        </section>`;
        }}

customElements.define("app-container",AppContainer)