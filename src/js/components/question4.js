Vue.component('question4', {
    data: () => {
        return {
            searchInput: "",
            reel1:["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
            reel2:["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
            reel3:["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana","lemon"],
            coins: 20,
            dFruit1: "",
            dFruit2: "",
            dFruit3: "",
        }
    },
    template: `
      <form v-on:submit.prevent="spin">
      <input type="submit" value="Spin" id="button">

      <p>{{ this.coins }}</p>

      <p>{{ this.dFruit1 }}</p>
      <p>{{ this.dFruit2 }}</p>
      <p>{{ this.dFruit3 }}</p>
      </form>`,
    methods: {
        spin(event) {  
            
            this.coins--;

            this.dFruit1 = this.reel1[
                Math.floor(Math.random() * this.reel1.length)
            ];
            this.dFruit2 = this.reel2[    
                Math.floor(Math.random() * this.reel2.length)
            ];
    
            this.dFruit3 = this.reel3[    
                Math.floor(Math.random() * this.reel3.length)
            ];
            
            if((this.dFruit1 === "cherry" && this.dFruit2 === "cherry" &&  this.dFruit3=== "cherry")){
                this.coins = this.coins + 50;
            }
            if((this.dFruit1 === "cherry" && this.dFruit2 === "cherry" )|| (this.dFruit2 === "cherry" &&   this.dFruit3=== "cherry")){
                this.coins = this.coins + 40;
            }
            if((this.dFruit1 === "apple" && this.dFruit2 === "apple" &&   this.dFruit3=== "apple")){
                this.coins = this.coins + 20;
            }
            if((this.dFruit1 === "apple" && this.dFruit2 === "apple" )|| (this.dFruit2 === "apple" &&   this.dFruit3 === "apple")){
                this.coins = this.coins + 10;
            }
            if((this.dFruit1 === "banana" && this.dFruit2 === "banana" &&   this.dFruit3=== "banana")){
                this.coins = this.coins + 15;
            }
            if((this.dFruit1 === "banana" && this.dFruit2 === "banana" )|| (this.dFruit2 === "banana" &&   this.dFruit3=== "banana")){
                this.coins = this.coins + 5;
            }
            if((this.dFruit1 === "lemon" && this.dFruit2 === "lemon" &&   this.dFruit3=== "lemon")){
                this.coins = this.coins + 3;
            }

        },
    }
}
)
