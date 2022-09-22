import data from "./data.js"

import "./components/index.js"
import MyProfile, {Attribute} from "./components/Profile/Profile.js";
import MyStories, {sAttribute} from "./components/stories/Stories.js";
import MySuggestions, {sugAttribute} from "./components/Sidebar/Sidebar.js";

class AppContainer extends HTMLElement{
    profiles: MyProfile[] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
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

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

class StoriesContainer extends HTMLElement{
    stories: MyStories[] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        data.forEach((user)=>{
            const storiesCard = this.ownerDocument.createElement("my-stories") as MyStories;
            storiesCard.setAttribute(sAttribute.name, user.name);
            storiesCard.setAttribute(sAttribute.photostory, user.photostory);
            this.stories.push(storiesCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.stories.forEach((story)=>{
                this.shadowRoot?.appendChild(story);
            })
        }
    }
}

class SuggestionsContainer extends HTMLElement{
    suggestions: MySuggestions[] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        data.forEach((user)=>{
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions") as MySuggestions;
            suggestionsCard.setAttribute(sugAttribute.name, user.name);
            suggestionsCard.setAttribute(sugAttribute.photostory, user.photostory);
            this.suggestions.push(suggestionsCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.suggestions.forEach((suggestions)=>{
                this.shadowRoot?.appendChild(suggestions);
            })
        }
    }
}

customElements.define("app-container",AppContainer);
customElements.define("stories-container",StoriesContainer);
customElements.define("suggestions-container",SuggestionsContainer);