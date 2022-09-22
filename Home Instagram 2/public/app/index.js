import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
import { sAttribute } from "./components/stories/Stories.js";
import { sugAttribute } from "./components/Sidebar/Sidebar.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.place, user.place);
            profileCard.setAttribute(Attribute.photopost, user.photopost);
            profileCard.setAttribute(Attribute.views, user.views);
            profileCard.setAttribute(Attribute.description, user.description);
            profileCard.setAttribute(Attribute.comments, user.comments);
            profileCard.setAttribute(Attribute.date, user.date);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
class StoriesContainer extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const storiesCard = this.ownerDocument.createElement("my-stories");
            storiesCard.setAttribute(sAttribute.name, user.name);
            storiesCard.setAttribute(sAttribute.photostory, user.photostory);
            this.stories.push(storiesCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.stories.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
        }
    }
}
class SuggestionsContainer extends HTMLElement {
    constructor() {
        super();
        this.suggestions = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions");
            suggestionsCard.setAttribute(sugAttribute.name, user.name);
            suggestionsCard.setAttribute(sugAttribute.photostory, user.photostory);
            this.suggestions.push(suggestionsCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.suggestions.forEach((suggestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestions);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
customElements.define("stories-container", StoriesContainer);
customElements.define("suggestions-container", SuggestionsContainer);
