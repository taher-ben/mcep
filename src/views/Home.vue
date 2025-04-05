<template>
  <div class="relative container mx-auto">
    <div class="box-filter mx-auto relative overflow-hidden md:h-[35rem] h-96">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="{
          'opacity-0 pointer-events-none': index !== currentSlide,
          'opacity-100 pointer-events-auto': index === currentSlide,
        }"
      >
        <img
          loading="lazy"
          :src="slide.image"
          class="absolute w-full h-full object-cover top-0 left-0"
          :alt="slide.alt"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        <div
          class="box absolute md:top-1/4 top-1/3 rtl:right-0 ltr:left-0 md:w-2/4 text-white z-10 -translate-y-2/4 py-8 px-4 my-2 bg-black/60 opacity-0"
          :class="{
            'ltr:animate-slideLTR rtl:animate-slideRTL opacity-100':
              index === currentSlide,
          }"
        >
          <h2 class="font-semibold text-xl">{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative mt-2 container mx-auto" id="video">
    <div class="overflow-hidden md:h-128 sm:h-32 video-section -z-10">
      <video
        autoplay
        muted
        loop
        class="w-full"
        src="../../image/MCEP.mp4"
      ></video>
    </div>
    <div
      class="bg-white shadow-2xl max-w-5xl grid gap-4 xl:absolute top-5/6 left-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2 px-8 pt-8 pb-2 mx-auto white-box"
    >
      <div class="text-center">
        <h3 class="text-xl mb-6 font-bold tracking-wider text-blue-500">
          Marsellia Company for Environmental Protection
        </h3>
        <p class="mb-4 text-lg light">
          MCEP is considered one of the leading companies in the sector of
          cleaning and environmental protection services in Libya. The company
          continuously strives to develop innovative and effective solutions to
          meet the needs of its clients, while maintaining high environmental
          and social standards. Through a specialized and dedicated team, MCEP
          offers a diverse range of cleaning and environmental protection
          services, including commercial and industrial cleaning, hazardous and
          solid waste management, and disinfection and sterilization services.
          The company is committed to achieving the highest standards of quality
          and safety in all its services.
        </p>
        <div class="button my-auto flex items-center">
          <div class="w-fit flex items-center mx-auto">
            <a
              href="#/about"
              class="capitalize p-1 text-lg hover:text-blue-400"
            >
              About Company
            </a>
            <font-awesome-icon
              class="text-blue-400 text-2xl mx-1 my-auto"
              :icon="['fas', 'arrow-right']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-32">
    <!-- Apply Now Section 1 -->
    <div id="Apply-now" class="md:pb-16 py-4">
      <div class="part w-5/6 text-white p-4 mx-auto bg-violet-800 bg-cover">
        <div class="w-5/6 py-5 text-center mx-auto">
          <p class="text-2xl font-light">
            Contract with Marsellia Company for unmatched, credible, and skilled
            services in medical waste management. Trust us to meet your
            expectations efficiently and professionally.
          </p>
          <div class="button w-fit pt-6 mx-auto">
            <div class="w-fit flex items-center mx-auto">
              <a
                href="#/ContractView"
                class="capitalize p-1 text-xl hover:text-blue-400"
              >
                Apply Now
              </a>

              <font-awesome-icon
                class="text-blue-500 icon px-2"
                :icon="['fas', 'arrow-right']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Apply Now Section 2 -->
    <div class="part w-5/6 text-white mt-16 p-8 mx-auto bg-slate-800 bg-cover">
      <div class="w-5/6 py-5 text-center mx-auto">
        <p class="text-2xl font-light">
          We believe in investing in our employees and provide opportunities for
          career advancement based on performance and competence.
        </p>
        <div class="w-fit pt-6 mx-auto">
          <a
            href="#/ApplyForJops"
            class="capitalize p-1 text-xl hover:text-blue-400"
          >
            Apply Now
          </a>
          <font-awesome-icon
            class="text-blue-500 icon px-2"
            :icon="['fas', 'arrow-right']"
          />
        </div>
      </div>
    </div>
    <div
      class="grid gap-4 pt-10 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-none md:grid-rows-2 grid-rows-none justify-items-center"
    >
      <a
        href="#/CollegeCleaning"
        class="news-card bg-College-cleaning bg-right relative lg:my-0 my-4 text-white bg-cover md:w-80 w-64 h-80"
      >
        <div class="flex flex-col justify-between h-full z-20 absolute">
          <h6 class="uppercase p-4">news</h6>
          <p class="p-4 text-xl">
            Marsellia Company organizes a cleaning campaign for the Faculty of
            Engineering at the University of Tripoli.
          </p>
        </div>
      </a>

      <a
        href="#/DarnaCity"
        class="news-card bg-news-image-one relative lg:my-0 my-4 text-white bg-cover md:w-80 w-64 h-80"
      >
        <div class="flex flex-col justify-between h-full z-20 absolute">
          <h6 class="uppercase p-4">news</h6>
          <p class="p-4 text-xl">
            Darnah: Marsellia Company Leads Community Support Initiative After
            Hurricane Daniel
          </p>
        </div>
      </a>

      <a
        href="#/HarborTripole"
        class="news-card bg-buril bg-center relative lg:my-0 my-4 text-white bg-cover md:w-80 w-64 h-80"
      >
        <div class="flex flex-col justify-between h-full z-20 absolute">
          <h6 class="uppercase p-4">news</h6>
          <p class="p-4 text-xl">
            Marsellia Company for Cleanliness and Environmental Protection
            Announces the Final Disposal of Expired Pharmaceutical and Food
            Waste at the Port of Tripoli.
          </p>
        </div>
      </a>
    </div>
  </div>
  <div
    class="flex 2xl:flex-row flex-col items-center 2xl:p-0 p-4 focus-pattern bg-right bg-no-repeat bg-slate-200"
  >
    <div
      class="m-0 relative 2xl:w-5/12 overflow-hidden h-75vh mb-2 before:bg-black before:absolute before:w-full before:h-full before:opacity-35"
    >
      <img class="" src="../assets/image/back.jpg" alt="" loading="lazy" />
      <div class="absolute text-blue-400 top-4 right-4 text-7xl">
        <h4 class="uppercase">mcep</h4>
      </div>
    </div>

    <div
      class="2xl:w-7/12 w-full grid md:grid-cols-2 2xl:grid-row-2 rid-cgols-1 gap-8 justify-items-center mx-4"
    >
      <!-- Card 1 -->
      <div class="size-80 sm:size-96 bg-white rounded-tl-2xl">
        <div
          class="bg-harbor-image bg-cover bg-center h-3/6 rounded-tl-2xl opacity-100"
        >
          <svg
            class="svg-inline--fa fa-circle-notch text-white p-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-notch"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
            ></path>
          </svg>
        </div>
        <div class="p-4 h-3/6">
          <div class="flex items-center mb-4">
            <svg
              class="svg-inline--fa fa-lightbulb"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lightbulb"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              ></path>
            </svg>
            <div class="px-2 text-lg">Innovation</div>
          </div>
          <p class="lg:text-md text-sm font-light">
            We are committed to innovation and using the latest technologies and
            methods in environmental protection and cleaning.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="size-80 sm:size-96 bg-white rounded-tl-2xl">
        <div
          class="bg-Innovation-1 bg-cover bg-center h-3/6 rounded-tl-2xl opacity-100"
        >
          <svg
            class="svg-inline--fa fa-circle-notch text-white p-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-notch"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
            ></path>
          </svg>
        </div>
        <div class="p-4 h-3/6">
          <div class="flex items-center mb-4">
            <svg
              class="svg-inline--fa fa-leaf"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="leaf"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
              ></path>
            </svg>
            <div class="px-2 text-lg">Sustainability</div>
          </div>
          <p class="lg:text-md text-sm font-light">
            We are striving tirelessly to be pioneers in the field of
            sustainability and social responsibility, and we provide solutions
            that meet the needs of the current and future generations.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="size-80 sm:size-96 bg-white rounded-tl-2xl">
        <div
          class="bg-lap-image bg-cover bg-center h-3/6 rounded-tl-2xl opacity-100"
        >
          <svg
            class="svg-inline--fa fa-circle-notch text-white p-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-notch"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
            ></path>
          </svg>
        </div>
        <div class="p-4 h-3/6">
          <div class="flex items-center mb-4">
            <svg
              class="svg-inline--fa fa-eye"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 288 0zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              ></path>
            </svg>
            <div class="px-2 text-lg">Our Vision</div>
          </div>
          <p class="lg:text-md text-sm font-light">
            At Marsellia Cleaning and Environmental Protection Company, our
            vision is to be global leaders in sustainability and environmental
            protection.
          </p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="size-80 sm:size-96 bg-white rounded-tl-2xl">
        <div
          class="bg-news-image-one bg-cover bg-center h-3/6 rounded-tl-2xl opacity-100"
        >
          <svg
            class="svg-inline--fa fa-circle-notch text-white p-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-notch"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
            ></path>
          </svg>
        </div>
        <div class="p-4 h-3/6">
          <div class="flex items-center mb-4">
            <svg
              class="svg-inline--fa fa-rss"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="rss"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M407.9 0C406 0 404 1.3 403 3.4 361.3 60.6 280.4 96 192 96 86.5 96 3.1 139.5 0 253.3c-.1 2.8-.2 5.5-.2 8.2 0 8.5 7 15.3 15.6 15.3 8.4 0 15.2-6.9 15.2-15.3 0-141.8 95.5-261.5 234.2-274.4 128.1-11.5 240.8 59.8 288 179.8 9.8 19.2 33.1 26.9 54.7 19.2 20.7-6.9 29.1-28.4 20.5-47.1C423.4 9.1 417.7 0 407.9 0zM192 192c-106.7 0-192 86.5-192 192 0 8.5 7 15.3 15.6 15.3 8.4 0 15.2-6.9 15.2-15.3 0-88.4 71.8-160 160-160 8.4 0 15.2-6.9 15.2-15.3C207.2 185.5 200.4 192 192 192z"
              ></path>
            </svg>
            <div class="px-2 text-lg">News</div>
          </div>
          <p class="lg:text-md text-sm font-light">
            Stay updated with the latest developments in environmental
            protection, sustainability, and innovation through our news section.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid xl:grid-cols-4 xl:grid-rows-2 gap-4 grid-cols-1 py-12 px-7">
    <!-- Infection Control Management -->
    <a
      href="#/InfectionControl"
      class="relative box-events bg-Pest-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Infection Control Management</h5>
      </div>
    </a>

    <!-- Medical Waste Management -->
    <a
      href="#/MedicalWaste"
      class="relative box-events bg-Medical-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Medical Waste Management</h5>
      </div>
    </a>

    <!-- Pest Control Management -->
    <a
      href="#/PestControl"
      class="relative box-events bg-news-image-one bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Pest Control Management</h5>
      </div>
    </a>

    <!-- Pharmaceutical Waste Management -->
    <a
      href="#/PharmaceuticalWaste"
      class="relative box-events bg-pharmace-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Pharmaceutical Waste Management</h5>
      </div>
    </a>

    <!-- Oil Waste Management -->
    <a
      href="#/OilWaste"
      class="relative box-events bg-petrol-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Oil Waste Management</h5>
      </div>
    </a>

    <!-- Training and Development Management -->
    <a
      href="#/TrainingDevelopment"
      class="relative box-events bg-trining-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Training and Development Management</h5>
      </div>
    </a>

    <!-- Environmental Studies -->
    <a
      href="#/EnvironmentalStudies"
      class="relative box-events bg-study-1 bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Environmental Studies</h5>
      </div>
    </a>

    <!-- Cleaning Management and Café -->
    <a
      href="#/GeneralCleanliness"
      class="relative box-events bg-coffee-image bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Cleaning Management and Café</h5>
      </div>
    </a>

    <!-- Asbestos Disposal Management -->
    <a
      href="#/AsbestosMcep"
      class="relative box-events bg-Asbestos-Mcep bg-cover bg-center text-white h-64"
    >
      <div class="absolute top-0 px-4 py-4 z-20">
        <h5 class="text-xl">Asbestos Disposal Management</h5>
      </div>
    </a>
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
.news-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  z-index: 10;
}
.news-card:hover::before {
  opacity: 0;
}
.size-80 {
  height: 20rem;
  width: 100%;
}
@keyframes slideLTR {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRTL {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.ltr\:animate-slideLTR {
  animation: slideLTR 1s ease-in-out;
}

.rtl\:animate-slideRTL {
  animation: slideRTL 1s ease-in-out;
}
.part {
  background-image: url(../assets/image/event-background.svg);
}
.focus-pattern {
  background-image: url(../assets/image/pattern.svg);
}
.bg-harbor-image {
  background-image: url(../assets/image/harbor.jpg);
}
.bg-Innovation-1 {
  background-image: url(../assets/image/Innovation.jpg);
}
.bg-lap-image {
  background-image: url(../assets/image/lap.png);
}
.bg-news-image-one {
  background-image: url(../assets/image/darna.jpg);
}
.bg-buril {
  background-image: url(../assets/image/buril.jpg);
}
.bg-College-cleaning {
  background-image: url(../assets/image/college-cleaning.jpg);
}
</style>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: "../../image/slider/2.jpg",
          alt: "Harbor Image",
          // title: "Environmental Protection",
          description:
            "Marsellia Company takes pride in providing comprehensive and integrated environmental solutions in the field of cleanliness and environmental protection. The company aims to play a pivotal role in the journey of development and in enhancing the quality of life in our beloved country.",
        },
        {
          image: "../../image/slider/1.jpg",
          alt: "Darna Image",
          // title: "Safe Waste Disposal",
          description:
            "With pride, we announce the initiation of the final disposal operations for hazardous waste at the first sanitary landfill (secure burial cell) in Libya. In the presence of a specialized committee from the Ministry of Environment, Marsellia Cleaning and Environmental Protection Company has commenced safe burial operations for hazardous waste using internationally and locally approved methods.",
        },
        {
          image: "../../image/slider/3.jpg",
          alt: "Environmental Solutions",
          // title: "Comprehensive Environmental Solutions",
          description:
            "Marsellia Company aims to enhance the quality of life through environmental solutions.",
        },
      ],
    };
  },
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
  },
};
</script>
