<template>
  <div class="Recent-search">
    <h2>Recently searched</h2>
    <div class="row">
      <div class="col-md-4" v-for="(item,index) in searches" :key="index">
        <weatherbox :weatherresult="item.result"></weatherbox>
      </div>
    </div>
  </div>
</template>

<script>
import weatherbox from "../components/weatherbox.vue";
export default {
  data() {
    return {};
  },
  components: {
    weatherbox
  },
  methods: {},
  created() {},
  computed: {
    searches() {
      return this.$store.getters.searches;
    }
  }
};
</script>


