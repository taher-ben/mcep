<template>
  <div class="NewsAndSubjects lg:container mx-auto bg-zinc-100">
    <div
      class="relative h-[50vh] bg-cover bg-center bg-pattern before:absolute before:bg-black before:w-full before:h-full before:opacity-50"
    ></div>

    <div class="py-4">
      <div class="blurb my-24">
        <div
          class="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-none md:grid-rows-2 grid-rows-none justify-items-center"
        >
          <router-link
            v-for="(item, index) in news"
            :key="index"
            :to="{ name: 'showMangement', params: { type: item.link } }"
            class="bg-pattern bg-center relative lg:my-0 my-4 text-white bg-cover size-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-50 before:hover:opacity-0 before:duration-300"
          >
            <div class="flex flex-col justify-between h-full z-20 absolute">
              <h6 class="uppercase p-4 text-sm">{{ item.subtitle }}</h6>
              <p class="p-4 text-lg font-bold">{{ item.title }}</p>
              <p class="p-4 text-sm">{{ item.des }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-pattern {
  background-image: url("../assets/image/harbor.jpg");
  background-size: cover;
  background-position: center;
}
</style>

<script>
import { RouterLink } from "vue-router";
import manage from "../locales/api.json";

export default {
  name: "NewsAndSubjects",
  data() {
    return {
      // تحويل المصفوفة من شكل [ [ {} ], [ {} ] ] إلى [ {}, {}, {} ]
      news: manage.en.news.flat(),
    };
  },
};
</script>
