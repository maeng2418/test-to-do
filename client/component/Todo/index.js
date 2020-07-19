import Component from '../Component';
import ColumnAdder from '../Column/Sections/ColumnAdder';
import Column from '../Column';
import MouseEvent from '../MouseEvent';
import './todo.css';

export default class Todo extends Component {
    constructor(parent) {
        super(parent, null, 'todo');

        this.addColumnBtn = new ColumnAdder(this);
        this.mouseEvent = new MouseEvent(this.$);
        this.addColumnBtn.mount(this.$);
    }

    addColumn() {
        const column = new Column(this, { title: '제목' });
        column.mount(this.$);
    }

    render() {
        return '';
    }
}
