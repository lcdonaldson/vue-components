Vue.component('message', {

    props: ['title', 'body'],

    template: `
        <article class = "center mw5 mw6-ns hidden ba mt4">
            <h1 class = "f4 bg-near-black white mv0 pv2 ph3"> {{ title }} </h1>
            <div class = "pa3 bt">
                <p class = "f6 f5-ns lh-copy measure mv0"> {{ body }} </p> 
            </div> 
        </article>     
    `
});


Vue.component('product-list', {
    template: `<div class="b--black bg-light-gray mv3 w-100 w-50-m w-25-l mw5 pa1 center tc">
                   <product v-for="product in products">{{product.product}}</product>
               </div>`,

    data() {
        return {
            products: [
                { product: 'Rods', instock: true },
                { product: 'Reels', instock: true },
                { product: 'Mono', instock: true },
                { product: 'Braid', instock: false },
                { product: 'Bait', instock: true }
            ]
        };
    }
});


Vue.component('items', {
    template: `<div class="b--black bg-washed-green mv3 w-100 w-50-m w-25-l mw5 pa1 center">
                   <item v-for="item in items">{{item.item}} {{item.qty}} 
                       <button @click="deleteFind(index)"> x </button>
                   </item>
               </div>`,

    data() {
        return {
            items: [
                { item: 'Mitchel', qty: 10 },
                { item: 'Penn', qty: 5 },
                { item: 'Abu', qty: 8 },
                { item: 'Shimmano', qty: 4 }
            ]
        };
    },
    
    methods: {
  
      deleteFind: function (index) {
        console.log(index);
        console.log(this.items);
        this.items.splice(index, 1);
      }
    }
    
});


Vue.component('product', {
    template: `<li><slot></slot></li>`
});

Vue.component('item', {
    template: `<li><slot></slot></li>`
});

Vue.component('goto', {
    template: `<a v-bind:href="link">Shark Rigs</a>`,
    data() {
      return {
        link: 'https://www.tacklecrafters.com/shop/blacktiph-shark-rig/'
      };
    }
});

new Vue({
  el: '#root'
});

Vue.config.devtools = true;
