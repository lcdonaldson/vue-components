// Simple example of state management with vuex

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'James', registered: false},
            {id: 2, name: 'Jason', registered: false},
            {id: 3, name: 'Lars', registered: false},
            {id: 4, name: 'Kirk', registered: false}
        ]
    }
});
