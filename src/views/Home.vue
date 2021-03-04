<template>
  <div class="home">
    <nav div class="dateday">{{ moment().format("MMM Do YY") }}</nav>
    <div class="col-6 offset-3">
      <div class="maindiv vh-100">
        <b-input-group>
          <template #prepend>
            <b-input-group-text class="cursorPointer" @click="checkWeather"
              >Search</b-input-group-text
            >
          </template>
          <b-form-input v-model="city"></b-form-input>
          <template #append>
            <b-dropdown
              class="navbutton"
              text="Country"
              variant="primary"
              v-on:change="checkWeather()"
              v-model="city"
            >
              <b-dropdown-item @click="city = 'Sweden'">Sweden</b-dropdown-item>
              <b-dropdown-item @click="city = 'England'"
                >England</b-dropdown-item
              >
              <b-dropdown-item @click="city = 'USA'">USA</b-dropdown-item>
              <b-dropdown-item @click="city = 'Australia'"
                >Australia</b-dropdown-item
              >
            </b-dropdown>
          </template>
        </b-input-group>
        <div v-if="weatherResult">
          <weatherbox :weatherresult="weatherResult"></weatherbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
let moment = require("moment");
import weatherbox from "../components/weatherbox.vue";
export default {
  name: "Home",
  components: {
    weatherbox,
  },
  data() {
    return {
      moment: moment,
      weatherResult: null,
      city: "",
    };
  },
  methods: {
    checkWeather() {
      // let previousSearches = localStorage.getItem("items");
      // let searches = [];
      // if (previousSearches != null) {
      //   searches = JSON.parse(previousSearches);
      // }
      // searches.push(this.city);
      // localStorage.setItem("items", JSON.stringify(searches));
      // if (window.navigator.onLine) {
      fetch(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
          this.city +
          "&days=3",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "b439b67740msh370f0ca1f7f80d8p148b74jsn26ad6f4ca21e",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          this.weatherResult = response;
          this.$store.commit("addSearch", {
            city: this.city,
            result: response,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      // } else {
      //   this.weatherResult = this.result.result;
      // }
    },
  },
  computed: {
    searches() {
      return this.$store.getters.searches;
    },
    result() {
      return this.searches.filter((u) => u.city == this.city)[0];
    },
  },
};
</script>
