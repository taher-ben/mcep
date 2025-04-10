<template>
  <div class="grid xl:grid-cols-4 xl:grid-rows-2 gap-4 grid-cols-1 py-12 px-7">
    <!-- Infection Control Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'InfectionControl' } }"
      class="relative box-events bg-Pest-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Infection Control Management</h5>
      </div>
    </router-link>

    <!-- Medical Waste Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'MedicalWaste' } }"
      class="relative box-events bg-Medical-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Medical Waste Management</h5>
      </div>
    </router-link>

    <!-- Pest Control Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'PestControl' } }"
      class="relative box-events bg-news-image-one bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Pest Control Management</h5>
      </div>
    </router-link>

    <!-- Pharmaceutical Waste Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'PharmaceuticalWaste' } }"
      class="relative box-events bg-pharmace-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Pharmaceutical Waste Management</h5>
      </div>
    </router-link>

    <!-- Oil Waste Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'OilWaste' } }"
      class="relative box-events bg-petrol-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Oil Waste Management</h5>
      </div>
    </router-link>

    <!-- Training and Development Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'TrainingDevelopment' } }"
      class="relative box-events bg-trining-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Training and Development Management</h5>
      </div>
    </router-link>

    <!-- Environmental Studies -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'EnvironmentalStudies' } }"
      class="relative box-events bg-study-1 bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Environmental Studies</h5>
      </div>
    </router-link>

    <!-- Cleaning Management and Café -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'GeneralCleanliness' } }"
      class="relative box-events bg-coffee-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Cleaning Management and Café</h5>
      </div>
    </router-link>

    <!-- Asbestos Disposal Management -->
    <router-link
      :to="{ name: 'showMangement', params: { type: 'AsbestosMcep' } }"
      class="relative box-events bg-Asbestos-Mcep bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Asbestos Disposal Management</h5>
      </div>
    </router-link>
  </div>
</template>

<style>
.box-events::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.box-events:hover::before {
  opacity: 0.3;
}

.bg-Pest-image {
  background-image: url(../../image/servece/Pharmaceutical-Waste/1.jpg);
}

.bg-Medical-image {
  background-image: url(../../image/servece/Medical/1.jpg);
}

.bg-news-image-one {
  background-image: url(../../image/servece/Infection/1.jpg);
}

.bg-pharmace-image {
  background-image: url(../../image/servece/Pharmaceutical-Waste/1.jpg);
}

.bg-petrol-image {
  background-image: url(../../image/servece/Oil-Waste/1.jpg);
}

.bg-trining-image {
  background-image: url(../../image/servece/Training-and-Development/1.jpg);
}

.bg-study-1 {
  background-image: url(../../image/servece/Environmental/1.jpg);
}

.bg-coffee-image {
  background-image: url(../../image/servece/Cleaning/1.jpg);
}

.bg-Asbestos-Mcep {
  background-image: url(../../image/servece/Asbestos/1.jpg);
}
</style>
