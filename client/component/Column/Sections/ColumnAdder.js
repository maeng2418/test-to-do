import Component from '../../Component';
import './columnAdder.css';

export default class ColumnAdder extends Component {
    constructor(parent) {
        super(parent, null, 'add-column-btn');

        this.$.addEventListener('click', this.parent.addColumn.bind(this.parent));
    }

    render() {
        return '+';
    }
}
