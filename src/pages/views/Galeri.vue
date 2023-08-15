<template>
    <section class="py-16 min-h-screen relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="container mx-auto px-4xl text-white">
            <h1 class="text-4xl font-semibold mt-16 mb-4">
                Galeri
            </h1>
            <p class="my-4 text-white text-justify">
                Kami ingin berbagi pengalaman visual dengan Anda melalui gambar-gambar ini, sehingga Anda dapat merasakan
                atmosfer, kegembiraan, dan makna di balik setiap momen yang tertangkap dalam gambar. Lihatlah galeri kami
                untuk menemukan koleksi visual yang menginspirasi dan menggambarkan perjalanan kami seperti kegiatan program
                yang telah dilaksanakan ataupun kegiatan yang bersifat sosial.
            </p>
            <div class="container mx-auto text-center my-8 flex justify-center items-center">
                <div class="flex overflow-x-auto space-x-4">
                    <button v-for="(category, index) in categories" :key="index" :class="[
                        'px-12 lg:py-2 rounded-2xl focus:outline-none text-base transition duration-300 ease-in-out',
                        selectedCategory === category ? 'bg-sky-400 text-white transform scale-100' : 'bg-emerald-500 text-white hover:scale-105'
                    ]" @click="selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
        </div>
        <div class="container mx-auto overflow-x-hidden">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div v-for="(image, index) in filteredImages" :key="index">
                    <img :src="image.url" alt="Gambar"
                        class="w-full h-auto rounded shadow hover:scale-105 transition duration-300 ease-out" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import galeri from "../../data/galeri";

export default {
    data() {
        return {
            categories: ["Semua", "Rekreasi", "17 Agustus", "Ramadhan"],
            selectedCategory: "Semua",
            galeri,
        };
    },
    computed: {
        filteredImages() {
            if (this.selectedCategory === "Semua") {
                return this.galeri;
            } else {
                return this.galeri.filter((image) => image.category === this.selectedCategory);
            }
        },
    },
};
</script>
  