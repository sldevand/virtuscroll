export default class VirtualScrollRow extends HTMLElement {
    constructor(data) {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.wrapper = document.createDocumentFragment();
        this.data = data;
    }
    connectedCallback() {
        this.root.innerHTML = `
        <style>
            :host {
                padding: 20px;
                display: grid;
                grid-template-columns: 1fr 6fr repeat(2, 1fr);
                grid-auto-rows: auto;
                align-items:center;
                text-align:center;
                border-bottom: solid;
            }
        </style>
        `;

        this.setData(this.data);
        this.root.appendChild(this.wrapper);
    }

    setData(data) {
        this.data = data;
        this.clear();
        this.render();
    }

    clear() {
        Array.from(this.wrapper.children).forEach(c => c.remove())
    }

    render() {
        for (const key in this.data) {
            if (Object.hasOwnProperty.call(this.data, key)) {
                let span = document.createElement("span");
                span.innerText = this.data[key];
                this.wrapper.appendChild(span)
            }
        }
    }
}

customElements.define("virtual-scroll-row", VirtualScrollRow);
