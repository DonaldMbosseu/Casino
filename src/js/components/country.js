Vue.component('country', {
    data: () =>{
        return {

        }
    },
    props: ['name' , 'flag'],
    template: `
    <p>{{ name }}</p>
     <img src="https://flagcdn.com/w320/cm.png" alt="flag Image">
    `,
    methods: {

    },
    computed: {
        
    }
}
)
