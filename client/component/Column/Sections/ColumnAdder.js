import Component from '../../Component';

export default class ColumnAdder extends Component {
    constructor(parent) {
        super(parent, null, 'add-column-btn');

        this.$.addEventListener('click', this.parent.addColumn.bind(this.parent));
    }

    render() {
        return '+';
    }
}
