export default class MouseEvent {
    constructor(container) {
        this.$ = container;
        this.copy = null;
    }

    onDragStart(event, element) {
        element.classList.add('selected');
        this.copy = element.cloneNode(true);
        this.copy.classList.add('copy');
        this.copy.addEventListener('mouseup', () => this.onDrop(element));
        this.$.addEventListener('mousemove', this.onDragOver.bind(this));
        const { clientX, clientY } = event;
        this.copy.setAttribute('style', `left: ${clientX}; top: ${clientY};`);
        this.$.appendChild(this.copy);
        return this;
    }

    onDragOver(event) {
        this.copy.classList.add('dragging');
        const { clientX, clientY } = event;
        this.copy.setAttribute('style', `left: ${clientX}; top: ${clientY};`);
        return this;
    }

    onDrop(element) {
        element.classList.remove('selected');
        this.$.removeChild(this.copy);
        this.copy = null;
        return this;
    }
}
