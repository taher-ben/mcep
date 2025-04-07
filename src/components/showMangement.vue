<template>
  <div class="p-4 space-y-6">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="border p-4 rounded-lg shadow-md bg-white"
    >
      <h2 v-if="service.title" class="text-xl font-bold mb-2">
        {{ service.title }}
      </h2>
      <p v-if="service.description" class="text-gray-700 mb-4">
        {{ service.description }}
      </p>

      <h3 v-if="service['title-two']" class="text-lg font-semibold mb-1">
        {{ service["title-two"] }}
      </h3>
      <p v-if="service['description-two']" class="text-gray-600 mb-2">
        {{ service["description-two"] }}
      </p>

      <ul
        v-if="service.steps && service.steps.length"
        class="list-disc list-inside space-y-1"
      >
        <li
          v-for="(step, stepIndex) in service.steps"
          :key="stepIndex"
          class="text-gray-600"
        >
          {{ step }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import manage from "../locales/api.json";
export default {
  name: "ServiceListComponent",
  data() {
    return {
      services: manage.en.services,
    };
  },
  mounted() {
    console.log(this.services);
  },
};
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}
</style>
