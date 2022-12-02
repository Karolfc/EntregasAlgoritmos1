import data from "./Feed/data.js"

import "./Feed/components/index.js"
import MyProfile, {Attribute} from "./Feed/components/Profile/Profile.js";
import MyStories, {sAttribute} from "./Feed/components/stories/Stories.js";
import MySuggestions, {sugAttribute} from "./Feed/components/Sidebar/Sidebar.js";

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


export class Home extends HTMLElement{
    buttonOpenForm: HTMLElement;
    buttonCloseForm: HTMLElement;

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.buttonOpenForm = this.ownerDocument.createElement("img");
        this.buttonOpenForm.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/5948/5948495.png")
        this.buttonOpenForm.id = "masicon";
        this.buttonOpenForm.onclick = (this.OpenPopUp)

        this.buttonCloseForm = this.ownerDocument.createElement("img");
        this.buttonCloseForm.setAttribute('src', "./components/Home/Feed/components/Profile/images/cerca.png")
        this.buttonCloseForm.id = "equisicon";
        this.buttonCloseForm.onclick = (this.ClosePopUp)
    }

    OpenPopUp = () => {
        let PopUp = this.shadowRoot?.getElementById("AbrirForm");
        PopUp.style.display = "block";
        this.buttonCloseForm.style.display = "block";
    }

    ClosePopUp = () => {
        let PopUp = this.shadowRoot?.getElementById("AbrirForm");
        PopUp.style.display = "none";
        this.buttonCloseForm.style.display = "none";
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/Home/style.css" rel="stylesheet">

        <section id="Home">
            
            <header id="header">
                <nav id="headerNavbar">
                    <ul id="navbar">
                        <li><img id="logoInstagram"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                            alt="logoInstagram"></li>
                            <section class="searchgroup">
                                <li id="searchicon"><img src="./components/Home/Feed/components/Profile/images/search.png" alt="searchicon" width="19vw" height="19vh"></li>
                                <li id="searchText">Search</li>
                            </section>
                        <li id="homeicon"><img src="https://static.thenounproject.com/png/771236-200.png" alt="homeicon" width="35vw" height="35vh"></li>
                        <li id="messengericon"><img src="https://cdn-icons-png.flaticon.com/512/5948/5948514.png" alt="messengericon" width="21w" height="21vh"></li>
                        <li id="exploreicon"><img src="https://cdn-icons-png.flaticon.com/512/77/77521.png" alt="exploreicon" width="22vw" height="22vh"></li>
                        <li id="likeiconNav"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="likeiconNav" width="22vw" height="22vh"></li>
                        <li><img id="photoperfilNav" src="./components/Home/Feed/components/Profile/images/fotoPerfil.jpg" alt="photoperfilNav" width="24px" height="24px"></li>
                    </ul>
                </nav>
            </header>

            <div id="AbrirForm">
                <app-sendtodb></app-sendtodb>
            </div>

            /** body***/ 

            <section id="hometodo">

                <section>
                    <section id="storiescontainer">
                        <stories-container></stories-container>
                    </section>
                
                    <app-newcard></app-newcard>
                    <app-container></app-container>
                </section>

                <section id="sidebar">
                    <section id="usuarioContainer">
                        <img id="fotoUsuario" src="./components/Home/Feed/components/Profile/images/fotoPerfil.jpg " alt="fotoUsuario" width="32vw" height="32vh">
                        <h1 id="usuario">LittleMonkey22</h1>
                        <h2 id="nombreUsuario">Little Monkey</h2>
                        <p id="switch">Switch</p>
                    </section>

                    <section>
                        <h1 id="suggestionsTitle">Suggestions For You</h1>
                        <p id="seeAll">See All</p>
                    </section>

                    <suggestions-container></suggestions-container>
                
                    <section id="letrapequeña">
                        <p id="helpText">About·Help·Press·API·Jobs·Privacy·Terms·Locations·<br>Language</p>
                        <section id="copyright">
                            <img id="copyrightimagen" src="./components/Home/Feed/components/Profile/images/copyright.png" alt="copyright" width="7px" height="7px">
                            <p id="copyrightText">2022 INSTAGRAM FROM META</p>
                        </section>
                    </section>

                </section>
            </section>
        </section>        
        `
        this.shadowRoot.appendChild(this.buttonOpenForm);
        this.shadowRoot.appendChild(this.buttonCloseForm);
    }
}

customElements.define("app-home",Home);