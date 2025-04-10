<template>
  <div>
    <div v-for="(item, index) in maindata" :key="index" class="news-item">
      <h2>{{ item.subtitle }}</h2>
      <h3>{{ item.title }}</h3>
      <p>{{ item.des }}</p>
    </div>
  </div>
</template>

<script>
import ar from "../locales/ar.json";
export default {
  name: "Test",
  data() {
    return {
      ar: ar,
      maindata: [],
    };
  },
  methods: {},
  mounted() {
    this.changeLanguage();
    console.log(this.maindata);
  },
};
</script>
