
// Like button component
Vue.component('like-button-component', {
    data: function () {
        return {
          count: Math.floor(Math.random() * Math.floor(8))
        }
      },
    template: `
        <button @click="count++" type="button" class="btn btn-sm btn-outline-secondary">
            <i class="fa fa-heart text-danger" aria-hidden="true"></i>  
            I like 
            <span class="badge badge-light">{{count}}</span>
        </button>
    `
})

new Vue({
    el: '#app',
    mounted: function () {
        this.prepareComponent()
    },
    data: {
        entities: {}
    },
    methods: {
        /**
         * Prepare the component.
         */
        prepareComponent() {
            this.getData();
        },

        /**
         * Get entities.
         */
        getData() {
            axios.get('/appart/entities.json')
                    .then(response => {
                        this.entities = response.data.response
                        console.log(response.data.response)
                    });
        },
    }
})
    