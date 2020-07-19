export default class MouseEvent {
    constructor(container) {
        this.$ = container;
        this.copy = null;
    }

    onDragStart(event, element) {
        element.classList.add('selected');
        this.copy = element.cloneNode(true);
        this.copy.classList.add('copy');
        this.copy.addEventListener('mouseover', this.onDragOver.bind(this));
        this.copy.addEventListener('mouseup', this.onDrop.bind(this));
        const { offsetX, offsetY } = event;
        this.copy.setAttribute('style', `left: ${offsetX}; top: ${offsetY};`);
        this.$.appendChild(this.copy);
        return this;
    }

    onDragOver() {
        this.copy.classList.add('dragging');
        return this;
    }

    onDrop() {
        // element.classList.replace('dragging', 'drop');
        this.$.removeChild(this.copy);
        this.copy = null;
        return this;
    }
}
