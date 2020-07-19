import Component from '../Component';
import Note from '../Note';
import NoteForm from '../Note/Sections/NoteForm';
import './column.css';

export default class Column extends Component {
    constructor(parent, props) {
        super(parent, props, 'col');

        const { title } = this.props;

        this.$title = this.$.querySelector('.col-title');
        this.$removeBtn = this.$.querySelector('.col-delete-btn');
        this.$noteAddBtn = this.$.querySelector('.note-plus-btn');
        this.$colBody = this.$.querySelector('.col-body');
        this.columnAdder = this.parent.$.querySelector('.add-column-btn');

        this.noteForm = new NoteForm(this);

        this.setTitle(title);
        this.$removeBtn.addEventListener('click', this.removeCol.bind(this));
        this.$noteAddBtn.addEventListener('click', this.noteForm.open.bind(this.noteForm));
    }

    mount(parentElement) {
        parentElement.insertBefore(this.$, this.columnAdder);
        this.noteForm.mount(this.$colBody);
    }

    setTitle(title) {
        this.$title.innerHTML = title;
    }

    removeCol() {
        this.parent.$.removeChild(this.$);
    }

    addNote(value) {
        const note = new Note(this, value);
        note.mount(this);
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
            <div class="col-body"></div>
        `;
    }
}
