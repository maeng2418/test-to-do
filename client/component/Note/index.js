import Component from '../Component';

export default class Note extends Component {
    constructor(parent, props) {
        super(parent, props, 'note');

        const { title, content, writer } = this.props;

        this.$noteTitle = this.$.querySelector('.note-title');
        this.$noteContent = this.$.querySelector('.note-content');
        this.$noteWriter = this.$.querySelector('.note-writer');

        this
            .setTitle(title)
            .setContent(content)
            .setWriter(writer);
    }

    setTitle(value) {
        this.$noteTitle.innerText = value;
        return this;
    }

    setContent(value) {
        this.$noteContent.innerText = value;
        return this;
    }

    setWriter(value) {
        this.$noteWriter.innerText = value;
        return this;
    }

    render() {
        return `
            <div class="note-header">
                <div class="note-icon"><img/></div>
                <div class="note-title">제목</div>
                    <button class="note-delete-btn">X</button>
                </div>
                <div class="note-body">
                    <div class="note-content">내용</div>
                <div class="note-footer">Added by <span class="note-writer"></span></div>  
            </div>
        `;
    }
}
