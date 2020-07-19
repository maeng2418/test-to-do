export default class MouseEvent {
    constructor(container) {
        this.$ = container;
    }

    onDragStart(element) {
        element.classList.add('selected');
        const copy = element.cloneNode(true);
        copy.classList.add('copy');
        this.$.appendChild(copy);
        return this;
    }

    // onDragOver(element) {
    //     // element.classList.add('dragging');
    //     return this;
    // }

    onDrop(element) {
        // element.classList.replace('dragging', 'drop');
        element.classList.remove('selected');
        const copy = this.$.querySelector('.copy');
        this.$.removeChild(copy);
        return this;
    }
}
