<template>
  <nav ref="header" class="absolute top-0 left-0 w-full flex items-center z-10 bg-white h-[70px] lg:h-auto sm:py-2">
    <div class="container w-full">
      <div class="flex items-center justify-between relative">
        <div class="">
          <!-- Logo -->
          <router-link to="/" class="flex items-center lg:ml-8">
            <img src="../../assets/images/logo.png" alt="Logo" class="h-20 w-auto" />
            <span class="font-bold text-xl">Jersi Official</span>
          </router-link>
          <!-- End of Logo -->
        </div>
        <div class="flex items-center px-4">
          <button id="hamburger" ref="hamburger" name="hamburger" type="button" class="block absolute lg:hidden">
            <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>
          <nav ref="navMenu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
            <ul class="block lg:flex">
              <li>
                <router-link to="/" class="text-base text-dark py-2 mx-8 flex">Beranda</router-link>
              </li>
              <li>
                <router-link to="/tentang" class="text-base text-dark py-2 mx-8 flex">Tentang Kami</router-link>
              </li>
              <li>
                <router-link to="/program" class="text-base text-dark py-2 mx-8 flex">Program</router-link>
              </li>
              <li>
                <router-link to="/galeri" class="text-base text-dark py-2 mx-8 flex">Galeri</router-link>
              </li>
              <li>
                <router-link to="/kontak" class="text-base text-dark py-2 mx-8 flex">Lain-lain</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {
    window.onscroll = () => {
      const header = this.$refs.header;
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    const navMenu = this.$refs.navMenu;
    const hamburger = this.$refs.hamburger;

    const closeMenu = () => {
      this.isMenuOpen = false;
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    };

    hamburger.addEventListener('click', () => {
      this.isMenuOpen = !this.isMenuOpen;
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    });

    // Menutup menu jika salah satu menu dipilih
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  },
};
</script>

<style scoped>
/* Styles for the navbar */
</style>
