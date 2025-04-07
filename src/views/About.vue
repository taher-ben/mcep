<template>
  <div class="about lg:container mx-auto bg-slate-100">
    <div
      class="relative h-[50vh] bg-cover before:absolute before:bg-black before:w-full before:h-full before:opacity-50 bg-College-cleaning"
    ></div>
    <div class="my-8 lg:px-80 px-8 text-xl">
      <p>
        MCEP is considered one of the leading companies in the sector of
        cleaning and environmental protection services in Libya. The company
        continuously strives to develop innovative and effective solutions to
        meet the needs of its clients, while maintaining high environmental and
        social standards. Through a specialized and dedicated team, MCEP offers
        a diverse range of cleaning and environmental protection services,
        including commercial and industrial cleaning, hazardous and solid waste
        management, and disinfection and sterilization services. The company is
        committed to achieving the highest standards of quality and safety in
        all its services.
      </p>
    </div>
    <div class="flex justify-center md:h-90">
      <img src="../assets/image/map.png" alt="Map" />
    </div>
    <h3 class="capitalize mt-16 flex justify-center text-3xl">
      Our Management
    </h3>
    <div>
      <management />
    </div>
  </div>
</template>

<script>
import Management from "../components/management.vue";

export default {
  name: "MCEPManagement",
};
</script>

<style scoped>
.bg-College-cleaning {
  background-image: url("../assets/image/buril.jpg");
}
</style>
