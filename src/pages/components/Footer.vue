<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px;">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Bersama Jersi, Membangun Negeri</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Kamu dapat temukan kami di platform lain
          </h5>
          <div class="mt-2 flex space-x-4">
            <a href="https://www.instagram.com/jersi_id/?hl=id" target="_blank"
              class="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3">
              <i class="flex fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@jersi_id" target="_blank"
              class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3">
              <i class="flex fab fa-tiktok"></i>
            </a>
          </div>
          <div class="mt-4">
            <div class="flex items-center text-gray-600">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <a href="https://goo.gl/maps/2dKVXjojBg5aHjjV6" target="_blank" rel="noopener noreferrer"
                class="hover:text-blue-400">
                Juwono RT.01, Triharjo, Pandak, Bantul, D.I Yogyakarta
              </a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4"></div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} Muda-Mudi Jersi
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style>
/* Tambahkan gaya tambahan sesuai kebutuhan Anda di bagian ini */

/* Responsif */
@media (max-width: 767px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
