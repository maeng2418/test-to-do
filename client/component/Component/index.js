export default class Component {
    constructor(parent = null, props, className) {
        // 부모 객체 가져옴.
        this.parent = parent;
        // props 가져옴.
        this.props = props;
        // div 생성
        this.$ = document.createElement('div');
        this.$.classList.add(className);
        this.$.innerHTML = this.render();
    }

    // 부모 컴포넌트에 집어넣기
    mount(parentElement) {
        parentElement.append(this.$);
    }

    open() {
        this.$.classList.remove('hidden');
        return this;
    }

    close() {
        this.$.classList.add('hidden');
        return this;
    }

    // 컴포넌트 생성함수
    render() {
        return '';
    }
}
