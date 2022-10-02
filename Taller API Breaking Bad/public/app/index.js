var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./data.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield getData();
            this.render(data);
        });
    }
    render(data) {
        if (!this.shadowRoot)
            return;
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
    }
}
customElements.define("app-container", AppContainer);
