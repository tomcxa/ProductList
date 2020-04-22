import ProductList from './ProductList';
import FormWidget from './FormWidget';

export default class ProductListControl {
    constructor() {
        this.element = document.querySelector('.product-list');
        this.productList = new ProductList(JSON.parse(localStorage.getItem('items')));
    }

    init() {
        this.addListener();
    }

    addListener() {
        const addBtn = this.element.querySelector('.add');

        addBtn.addEventListener('click', () => {
            const form = new FormWidget(this.added.bind(this));
            form.show();
        });
    }

    added(data) {
        this.productList.addItem(data);
    }
}
