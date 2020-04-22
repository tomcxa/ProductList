import ProductListControl from '../src/js/ProductListControl';

test('Should be kak v brouzere', () => {
    const productList = new ProductListControl();
    productList.init();


    console.log(productList);
});
