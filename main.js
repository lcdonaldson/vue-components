
Vue.component('product-list', {
    template: '<div><product v-for="product in products">{{product.product}}</product></div>',

    data() {
        return {
            products: [
                { product: 'Rod', instock: true },
                { product: 'Reel', instock: true },
                { product: 'Mono', instock: true },
                { product: 'Braid', instock: false },
                { product: 'Baits', instock: true }
            ]
        };
    }
});

Vue.component('message', {
    
    props: ['title', 'body'],

    template: `
        <article class = "center mw5 mw6-ns hidden ba mv4">
            <h1 class = "f4 bg-near-black white mv0 pv2 ph3"> {{ title }} </h1>

            <div class = "pa3 bt">
                <p class = "f6 f5-ns lh-copy measure mv0"> {{ body }} </p> 
            </div> 
        </article>     
    `
});

Vue.component('product', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});

Vue.config.devtools = true;