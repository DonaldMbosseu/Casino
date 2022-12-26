import {} from "../components/render.js"
import {} from "../components/render1.js"
import {} from "../components/render2.js"
import {} from "../components/question3.js"
import {} from "../components/question4.js"
import {} from "../components/country.js"


var app = new Vue({
    el: '#renderB',
    data: () => {
        return {
            countries:[],
            countries1:[],
            country: Object,
        }
    },
    methods: {
        countriesStore(countryArray){
            alert(countryArray);
            this.countries = countryArray;
        },


        countryChooser(allCountries, countryArray){
        for(var i = 0; i<allCountries.length; i++){
            for(var j = 0; j < countryArray.length; j++){
                if(allCountries[i].name.common === countryArray[j]){
                    this.countries[j] = allCountries[i];
                }
            }
        }
        
        this.$forceUpdate();

        },

        filterByCountryName(name){
            for(let i = 0; i < this.countries.length; i++){
                if(this.countries[i].name.common !== name){
                    this.countries.splice(i, 1);
                }
            }
            this.$forceUpdate();
        },
    }
})




var choice1 = document.getElementById("button_one");
var choice2 = document.getElementById("button_two");
var choice3 = document.getElementById("button_three");
var choice4 = document.getElementById("button_four");


choice4.onclick = function(){
    window.location.href = "Q4.html";
};

choice3.onclick = function(){
    window.location.href = "Q3.html";
};

choice2.onclick = function(){
    window.location.href = "Q2.html";
};

choice1.onclick = function(){
    window.location.href = "Q1.html";
};


