(()=>{Vue.component("render",{data:()=>({searchInput:""}),template:`
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" search Country..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,methods:{search(t){fetch("https://restcountries.com/v3.1/name/"+this.searchInput,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{this.$root.countries=e})}}});Vue.component("render1",{data:()=>({searchInput:"",storage:[]}),template:`
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" Countries search with ','" v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,methods:{search(t){var e=this.searchInput.split(","),n=0;for(let r=0;r<e.length;r++)this.putDataToVariable(e[r]),n++},async search1(t,e){var n=await fetch("https://restcountries.com/v3.1/name/"+t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(console.log(e)).then(r=>{this.$root.countriesStore(r.json())})},async putDataToVariable(t,e){await this.search1(t,e)}}});Vue.component("render2",{data:()=>({searchInput:""}),template:`
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" search Countries by ','..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,methods:{search(t){var e=this.searchInput.split(",");fetch("https://restcountries.com/v3.1/all",{method:"GET",headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{this.$root.countriesStore(n,e)})}}});Vue.component("question3",{data:()=>({searchInput:""}),template:`
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" Filter by Country name..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,methods:{search(t){this.$root.filterByCountryName(this.searchInput)},displayAll(){fetch("https://restcountries.com/v3.1/all",{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>this.$root.countries=t)}},watch:{"$store.state.list":{handler(){this.displayAll()},immediate:!0}}});Vue.component("question4",{data:()=>({searchInput:"",reel1:["cherry","lemon","apple","lemon","banana","banana","lemon","lemon"],reel2:["lemon","apple","lemon","lemon","cherry","apple","banana","lemon"],reel3:["lemon","apple","lemon","apple","cherry","lemon","banana","lemon"],coins:20,dFruit1:"",dFruit2:"",dFruit3:""}),template:`
      <form v-on:submit.prevent="spin">
      <input type="submit" value="Spin" id="button">

      <p>{{ this.coins }}</p>

      <p>{{ this.dFruit1 }}</p>
      <p>{{ this.dFruit2 }}</p>
      <p>{{ this.dFruit3 }}</p>
      </form>`,methods:{spin(t){this.coins--,this.dFruit1=this.reel1[Math.floor(Math.random()*this.reel1.length)],this.dFruit2=this.reel2[Math.floor(Math.random()*this.reel2.length)],this.dFruit3=this.reel3[Math.floor(Math.random()*this.reel3.length)],this.dFruit1==="cherry"&&this.dFruit2==="cherry"&&this.dFruit3==="cherry"&&(this.coins=this.coins+50),(this.dFruit1==="cherry"&&this.dFruit2==="cherry"||this.dFruit2==="cherry"&&this.dFruit3==="cherry")&&(this.coins=this.coins+40),this.dFruit1==="apple"&&this.dFruit2==="apple"&&this.dFruit3==="apple"&&(this.coins=this.coins+20),(this.dFruit1==="apple"&&this.dFruit2==="apple"||this.dFruit2==="apple"&&this.dFruit3==="apple")&&(this.coins=this.coins+10),this.dFruit1==="banana"&&this.dFruit2==="banana"&&this.dFruit3==="banana"&&(this.coins=this.coins+15),(this.dFruit1==="banana"&&this.dFruit2==="banana"||this.dFruit2==="banana"&&this.dFruit3==="banana")&&(this.coins=this.coins+5),this.dFruit1==="lemon"&&this.dFruit2==="lemon"&&this.dFruit3==="lemon"&&(this.coins=this.coins+3)}}});Vue.component("country",{data:()=>({}),props:["name","flag"],template:`
    <div>
    <p>{{ name }}</p>
    <img :src="flag" alt="flag Image">
    </div>
    `,methods:{runTest(){alert(this.flag)}},computed:{}});var I=new Vue({el:"#renderB",data:()=>({countries:[],country:Object}),methods:{countriesStore(t,e){this.countries=t,this.filterCountryArray(e)},filterCountryArray(t){var e=this.countries.filter(function(n){for(var r=0;r<t.length;r++)if(n.name.common==t[r])return!0;return!1});this.countries=e,this.$forceUpdate()},filterByCountryName(t){var e=this.countries.filter(function(n){return n.name.common==t});this.countries=e,this.$forceUpdate()}}}),i=document.getElementById("button_one"),o=document.getElementById("button_two"),s=document.getElementById("button_three"),a=document.getElementById("button_four");a.onclick=function(){window.location.href="Q4.html"};s.onclick=function(){window.location.href="Q3.html"};o.onclick=function(){window.location.href="Q2.html"};i.onclick=function(){window.location.href="Q1.html"};})();
//# sourceMappingURL=index.js.map
