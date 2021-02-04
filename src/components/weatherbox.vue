<template>
  <div>
    <b-card title="Weather" img-top tag="article" style="margin-top:5px" class="mb-2">
      <b-card-text>
        Temperature
        {{weatherresult.current.feelslike_c}} C
        <br />
        Humidity
        {{weatherresult.current.humidity}}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["weatherresult"],
  created() {
    console.log(this.weatheresult);
  }
};
</script>