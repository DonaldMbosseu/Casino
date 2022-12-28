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
            country: Object,
        }
    },
    methods: {
        countriesStore(countryArray, researchedArray){
            this.countries = countryArray;
            this.filterCountryArray(researchedArray);
        },

        filterCountryArray(researchedArray){
            var newArray = this.countries.filter(function (el)
            {
                for (var i = 0; i < researchedArray.length; i++) {
                    if (el.name.common == researchedArray[i]){
                        return true;
                    }
                  }
                  return false;
            }
            );
            this.countries = newArray;
            this.$forceUpdate();
        },

        filterByCountryName(name){
            var newArray = this.countries.filter(function (el)
            {
              return el.name.common == name;
            }
            );
            this.countries = newArray;
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


