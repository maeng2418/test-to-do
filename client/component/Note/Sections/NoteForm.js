import Component from '../../Component';
import { parseNoteText } from '../../../utils';

export default class NoteForm extends Component {
    constructor(parent) {
        super(parent, null, 'note-form');

        this.$noteText = this.$.querySelector('.note-text');
        this.$addBtn = this.$.querySelector('.add-btn');
        this.$cancelBtn = this.$.querySelector('.cancel-btn');

        this.$addBtn.addEventListener('click', this.onSubmitHandler.bind(this));
        this.$cancelBtn.addEventListener('click', this.close.bind(this));
    }

    mount(parentElement) {
        parentElement.prepend(this.$); // 선택한요소의 자식요소 앞에 내용삽입
        this.close();
    }

    onSubmitHandler() {
        this.parent.addNote(parseNoteText(this.$noteText.value));
        this.$noteText.value = '';
        this.close();
    }

    render() {
        return `
            <div class="note-form-body">
                <textarea class="note-text"></textarea>
            </div>
            <div class="note-form-footer">
                <button class="add-btn">Add</button>
                <button class="cancel-btn">Cancel</button>
            </div>
          `;
    }
}
