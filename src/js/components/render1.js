Vue.component('render1', {
    data: () => {
        return {
            searchInput: "",
            storage:[],
        }
    },
    template: `
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" Countries search with ','" v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,
    methods: {
        search(event) {
            var countriesf = this.searchInput.split(',');
            var cursor = 0;
            for(let i=0; i<countriesf.length; i++){
                this.putDataToVariable(countriesf[i]);
                cursor++;
            }
        },

       async search1(countr, cursor){
            var response = await fetch('https://restcountries.com/v3.1/name/'+ countr, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
         .then(console.log(cursor)).
         then(response => { this.$root.countriesStore(response.json())})
        },
        
        async putDataToVariable(countr, cursor){
            await this.search1(countr,cursor);            
        }

    }
}
)
