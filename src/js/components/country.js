Vue.component('country', {
    data: () =>{
        return {

        }
    },
    props: ['name', 'flag'],
    template: `
    <div>
    <p>{{ name }}</p>
    <img :src="flag" alt="flag Image">
    </div>
    `,
    methods: {
        runTest(){
            alert(this.flag);
        }

    },
    computed: {
        
    }
}
)
