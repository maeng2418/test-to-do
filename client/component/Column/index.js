import Component from '../Component';
import './column.css';

export default class Column extends Component {
    constructor(parent, props) {
        super(parent, props, 'col');

        const { title } = this.props;

        this.$title = this.$.querySelector('.col-title');
        this.columnAdder = this.parent.$.querySelector('.add-column-btn');

        this.setTitle(title);
    }

    mount(parentElement) {
        parentElement.insertBefore(this.$, this.columnAdder);
    }

    setTitle(title) {
        this.$title.innerHTML = title;
    }

    render() {
        return `
        <div class="col-header">
            <div class="note-counter">카운터</div>
            <div class="col-title">제목</div>
            <div class="col-btns">
                <button class="note-plus-btn">+</button>
                <button class="col-delete-btn">x</button>
            </div>
        </div>
        <div class="col-body">
            노트생성폼    
        </div>`;
    }
}
