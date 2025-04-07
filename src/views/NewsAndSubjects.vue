<template>
  <div class="NewsAndSubjects lg:lg:container mx-auto bg-zinc-100">
    <div
      class="relative h-[50vh] bg-cover before:absolute before:bg-black before:w-full before:h-full before:opacity-50 bg-pattern bg-center"
    ></div>
    <div class="py-4">
      <div class="blurb my-24">
        <div
          class="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-none md:grid-rows-2 grid-rows-none justify-items-center"
        >
          <a
            v-for="(service, index) in services"
            :key="index"
            href="#/TermomeccanicaVisit"
            class="bg-Tenica-Visit bg-center relative lg:my-0 my-4 text-white bg-cover size-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-50 before:hover:opacity-0 before:duration-300"
            ><div class="flex flex-col justify-between h-full z-20 absolute">
              <h6 v-if="service.title" class="uppercase p-4">News</h6>
              <p class="p-4 text-2xl">
                {{ service.title }}
              </p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg-pattern {
  background-image: url("../assets/image/harbor.jpg");
}
</style>
<script>
import manage from "../locales/api.json";
export default {
  name: "NewsAndSubjects",
  data() {
    return {
      services: manage.en.services,
    };
  },
};
</script>
