Vue.component('render2', {
    data: () => {
        return {
            searchInput: "",
        }
    },
    template: `
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" search Countries by ','..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,
    methods: {
        search(event) {
            var countriesf = this.searchInput.split(',');

            fetch('https://restcountries.com/v3.1/all',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })       .then(response => response.json())
            .then(response => { this.$root.countryChooser(response, countriesf)});
        },
    }
}
)
