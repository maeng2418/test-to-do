export default class MouseEvent {
    constructor(element) {
        this.$ = element;
    }

    onDragStart(element) {
        element.classList.add('selected');
        return this;
    }

    onDragOver(element) {
        element.classList.add('dragging');
        return this;
    }

    onDrop(element) {
        element.classList.add('drop');
        return this;
    }
}
