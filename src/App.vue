<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const { locale } = "00";

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const changeLanguage = (lang) => {
  locale.value = lang;
};

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/NewsAndSubjects", label: "News and Topics" },
];
</script>
<template>
  <nav class="lg:container mx-auto text-white" dir="ltr">
    <div
      class="flex relative justify-between items-center h-16 px-3 before-line"
    >
      <div class="lg:w-80 w-32 pt-2">
        <router-link to="/">
          <img
            class="lg:p-2 p-0"
            src="../src/assets/image/main-logo.png"
            alt="Logo"
          />
        </router-link>
      </div>
      <button @click="toggleMenu" class="lg:hidden text-white text-lg">
        <font-awesome-icon icon="bars" />
      </button>
      <div
        class="flex"
        :class="['menu-links', { hidden: !menuOpen, 'lg:flex': true }]"
      >
        <div class="flex lg:flex-row flex-col">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="menu-item text-white"
          >
            {{ link.label }}
          </router-link>
          <div class="lg:flex items-center text-white hidden">
            <button @click="changeLanguage('en')">EN</button>
            <button @click="changeLanguage('ar')">AR</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg-white container mx-auto">
    <router-view class="  " />
  </div>
  <!-- <div
    class="pt-32 container mx-auto grid xl:grid-cols-5 md:grid-cols-2 md:grid-row-2 gap-8 place-content-between"
  >
    <div class="text-white text-lg divide-y-2 font-light">
      <h3 class="py-2 font-semibold">Company</h3>
      <ul class="pt-3">
        <router-link
          to="/"
          class="router-link-active router-link-exact-active"
          aria-current="page"
        >
          <li>Home</li>
        </router-link>
        <router-link to="/about"><li>About Company</li></router-link>
        <router-link to="/ApplyForJops"><li>Jobs</li></router-link>
        <router-link to="/ContractView"><li>Contract with us</li></router-link>
        <router-link to="/NewsAndSubjects"
          ><li>News and topics</li></router-link
        >
      </ul>
    </div>

    <div class="text-white text-lg divide-y-2 font-light">
      <h3 class="py-2 font-semibold">Managements</h3>
      <ul class="pt-3 text-[16px]">
        <router-link to="/MedicalWaste"
          ><li>Medical Waste Management</li></router-link
        >
        <router-link to="/InfectionControl"
          ><li>Infection Control Management</li></router-link
        >
        <router-link to="/PestControl"
          ><li>Pest Control Management</li></router-link
        >
        <router-link to="/OilWaste"><li>Oil Waste Management</li></router-link>
        <router-link to="/PharmaceuticalWaste"
          ><li>Pharmaceutical Waste Management</li></router-link
        >
        <router-link to="/EnvironmentalStudies"
          ><li>Environmental Studies Management</li></router-link
        >
        <router-link to="/TrainingDevelopment"
          ><li>Training Development Management</li></router-link
        >
        <router-link to="/GeneralCleanliness"
          ><li>Cleaning and Cafeteria Management</li></router-link
        >
      </ul>
    </div>

    <div class="text-white text-lg divide-y-2 font-light">
      <h3 class="py-2 font-semibold">News and topics</h3>
      <ul class="pt-3">
        <router-link to="/CollegeCleaning"
          ><li>The Engineering College Cleanliness Campaign</li></router-link
        >
        <router-link to="/HarborTripole"
          ><li>
            Disposal of expired medications at the port of Tripoli.
          </li></router-link
        >
        <router-link to="/LanfillLibya"
          ><li>Security Burial Cell</li></router-link
        >
      </ul>
    </div>

    <div class="text-white text-lg divide-y-2 font-light">
      <h3 class="py-2 font-semibold">Contact Us</h3>
      <ul class="pt-3 rtl:justify-end" dir="ltr">
        <li>218-91 766 1212</li>
        <li>218-91 788 1212</li>
        <li>218-91 088 1212</li>
        <li>218-21 719 4444</li>
      </ul>
    </div>

    <div class="text-white text-lg divide-y-2 font-light">
      <h3 class="py-2 font-semibold">Location</h3>
      <ul class="pt-3">
        <router-link to=""
          ><li class="capitalize">
            Hai Alandalus - Tripoli - Libya
          </li></router-link
        >
        <router-link to=""
          ><li class="capitalize">Alkrarim - Misrata - Libya</li></router-link
        >
        <router-link to=""><li>Alkesh - Benghazi - Libya</li></router-link>
        <router-link to=""><li>Hai Abd Alkafi - Sabha - Libya</li></router-link>
      </ul>
    </div>
    <div
      class="grid md:gap-0 my-12 gap-3 md:grid-cols-1 gird-cols-1 xl:col-span-3 xl:order-none order-last"
    >
      <span class="text-white py-2">
        <img class="md:max-w-40 max-w-32 me-auto" src="" alt="" />
        <h2 class="text-2xl">Marsellia Company for Environmental Protection</h2>
        <p class="font-light text-balance">
          Marsellia Company is considered one of the leading companies in the
          field of cleanliness and environmental protection in Libya. The
          company was founded with an ambitious vision to achieve excellence in
          the field of cleaning services and environmental protection.
        </p>
      </span>
      <div class="flex justify-start items-end gap-2">
        <span class="flex flex-col items-center">
          <img
            class="max-w-16"
            src="./assets/image/iso.png"
            loading="lazy"
            alt=""
          />
          <div class="text-white md:text-md text-xs pt-3">ISO 9001:2015</div>
        </span>
        <span class="flex flex-col items-center">
          <img
            class="max-w-16"
            src="./assets/image/iso.png"
            loading="lazy"
            alt=""
          />
          <div class="text-white md:text-md text-xs pt-3">ISO 14001:2015</div>
        </span>
        <span class="flex flex-col items-center">
          <img
            class="max-w-16"
            src="./assets/image/iso.png"
            loading="lazy"
            alt=""
          />
          <div class="text-white md:text-md text-xs pt-3">ISO 45001:2018</div>
        </span>
      </div>
    </div>
  </div> -->
</template>
<style scoped>
.menu-links {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.menu-item {
  margin: 1rem 0;
  font-size: 1.2rem;
}
@media (min-width: 1024px) {
  .menu-links {
    position: static;
    background: transparent;
    height: auto;
    flex-direction: row;
  }
}
</style>
