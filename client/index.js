import 'core-js/modules/es.array.flat';
import './style.css';
import { Todo, Header } from './component';

const header = new Header();
const todo = new Todo();
header.mount(document.getElementById('root'));
todo.mount(document.getElementById('root'));
