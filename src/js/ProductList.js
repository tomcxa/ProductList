import ProductItem from './ProductItem';
import FormWidget from './FormWidget';

export default class ProductList {
    constructor(items) {
        this.element = document.querySelector('.product-item-box');
        this.items = items || [];

        this.update();
    }

    addItem(item) {
        this.items.push(item);
        this.update();
    }

    removeItem(itemIndex) {
        this.items.splice(itemIndex, 1);
        this.update();
    }

    editItem(itemIndex, newData) {
        const editedItem = this.getItem(itemIndex);
        editedItem.name = newData.name;
        editedItem.price = newData.price;
        this.update();
    }

    getItem(index) {
        const iNumber = parseInt(index, 10);
        return this.items[iNumber];
    }

    edited(index, data) {
        this.editItem(index, data);
    }

    action(event) {
        if (event.target.classList.contains('edit')) {
            const i = event.currentTarget.dataset.index;
            const item = this.getItem(i);
            const form = new FormWidget(this.edited.bind(this, i));
            form.show();
            form.setData(item);
        }
        if (event.target.classList.contains('remove')) {
            const i = event.currentTarget.dataset.index;
            this.removeItem(i);
        }
    }

    update() {
        localStorage.setItem('items', JSON.stringify(this.items));
        this.element.innerHTML = '';
        if (this.items.length) {
            this.items.forEach((item, index) => {
                const product = new ProductItem(item.name, item.price, index);
                this.element.innerHTML += product.render();
                // product.addListener(this.action.bind(this));
            });
        }
        const productItems = [...this.element.getElementsByClassName('product-list_item')];
        productItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                this.action(event);
            });
        });
    }
}
