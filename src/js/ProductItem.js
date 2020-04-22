export default class ProductItem {
    constructor(name, price, index) {
        this.data = { name, price };
        this.index = index;
    }

    render() {
        return `<tr class="product-list_item" data-index=${this.index}>
            <td data-name="name">${this.data.name}</td>
            <td data-name="price">${this.data.price}</td>
            <td data-name="actions">
                <button type="button" class="edit btn-ctrl">
                    <img class="edit" src="src/img/edit.png" alt="Отредактировать товар">
                </button>
                <button type="button" class="remove btn-ctrl">
                    <img class="remove" src="src/img/remove.png" alt="Удалить товар">
                </button>
            </td>
        </tr>`;
    }

    // get selector() {
    //     return `[data-index="${this.index}"]`;
    // }

    // addListener(action) {
    //     const itemEl = document.querySelector(this.selector);

    //     itemEl.addEventListener('click', (event) => action(event));
    // }
}
