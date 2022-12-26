Vue.component('render', {
    data: () => {
        return {
            searchInput: "",
        }
    },
    template: `
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" search Country..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,
    methods: {
        search(event) {
            fetch('https://restcountries.com/v3.1/name/' + this.searchInput, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })       .then(response => response.json())
            .then(response => { this.$root.countries = response;});
        },
    }
}
)
