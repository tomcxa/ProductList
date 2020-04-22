/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
export default class FormWidget {
    constructor(action) {
        this.formEl = document.querySelector('.product-form');
        this.event = this.onClick.bind(this);
        this.action = action;
    }

    show() {
        const formControl = this.getCtrlPanel();

        formControl.addEventListener('click', this.event);
        this.formEl.classList.remove('hiden');
    }

    hide() {
        this.clearForm();
        const formControl = this.getCtrlPanel();

        formControl.removeEventListener('click', this.event);
        this.formEl.classList.add('hiden');
    }

    setData(item) {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const name = item[key];
                this.formEl[key].value = name;
            }
        }
    }

    getData() {
        let result = {};
        const data = new FormData(this.formEl);
        for (const [name, value] of data) {
            result = Object.assign(result, { [name]: value });
        }
        return result;
    }

    clearForm() {
        const inputs = this.formEl.elements;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].nodeName === 'INPUT' && inputs[i].type === 'text') {
                inputs[i].value = '';
            }
        }
    }

    getCtrlPanel() {
        return this.formEl.querySelector('.form-control');
    }

    onClick(event) {
        event.preventDefault();
        if (event.target.classList.contains('cancle')) {
            this.hide();
        }
        if (event.target.classList.contains('save')) {
            const data = this.getData();
            if (!Object.values(data).some((el) => el === '')) {
                this.action(data);
                this.hide();
            }
        }
    }

    addListener() {
        const formControl = this.getCtrlPanel();

        formControl.addEventListener('click', this.onClick);
    }

    removeListener() {
        const formControl = this.getCtrlPanel();

        formControl.removeEventListener('click', this.onClick);
    }
}
