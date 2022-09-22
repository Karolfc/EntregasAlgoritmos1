class MyProfile extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['name', 'place', 'views', 'description', 'comments', 'date'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link href="./src/components/profile/style.css" rel="stylesheet">
        <section>
            <h1 id="name">${this.name}</h1>
            <h2 id="place">${this.place}</h2>
            <h3 id="views">${this.views} views</h3>
            <span id="description"><strong>${this.name}</strong> ${this.description}</span>
            <p id="comments">${this.comments}</p>
            <p id="date">${this.date}</p>
        </section>
        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
