customElements.define('heymint-button', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="heymint-mint-button"></div>`;
  }
});
