class HelloWorldComponent extends HTMLElement {
    connectedCallback() {
        this.textContent = "Hello Fucking World!!!"
    }
}
customElements.define('x-hello-world', HelloWorldComponent);
