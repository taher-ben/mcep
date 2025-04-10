<template>
  <div class="p-4 space-y-6">
    <h2 v-if="currentService?.title" class="text-xl font-bold mb-2">
      {{ currentService.title }}
    </h2>

    <p v-if="currentService?.description" class="text-gray-700 mb-4">
      {{ currentService.description }}
    </p>

    <h3 v-if="currentService?.['title-two']" class="text-lg font-semibold mb-1">
      {{ currentService["title-two"] }}
    </h3>

    <p v-if="currentService?.['description-two']" class="text-gray-600 mb-2">
      {{ currentService["description-two"] }}
    </p>

    <ul
      v-if="currentService?.steps && currentService.steps.length"
      class="list-disc list-inside space-y-1"
    >
      <li
        v-for="(step, stepIndex) in currentService.steps"
        :key="stepIndex"
        class="text-gray-600"
      >
        {{ step }}
      </li>
    </ul>
  </div>
</template>

<script>
import manage from "../locales/api.json";

export default {
  name: "ServiceListComponent",
  data() {
    return {
      kind: this.$route.params.type,
      services: manage.en.services,
    };
  },
  computed: {
    currentService() {
      return this.services[this.kind] || null;
    },
  },
  mounted() {
    console.log("Service kind:", this.kind);
    console.log("Current service data:", this.currentService);
  },
};
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}
</style>
