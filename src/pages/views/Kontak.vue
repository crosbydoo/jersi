<template>
    <section class="py-16 min-h-screen relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="container mx-auto px-4xl">
            <h1 class="text-4xl font-semibold mt-16 text-white">Informasi</h1>
            <p class="mt-4 mb-10 text-white text-justify">Kami menyediakan penjelasan detail tentang produk dan layanan
                kami, panduan
                penggunaan,
                kebijakan
                privasi,
                informasi kontak, dan berbagai topik penting lainnya. Tujuan kami adalah memberikan klarifikasi dan
                pemahaman yang mendalam, sehingga Anda dapat membuat keputusan yang tepat dan merasa nyaman dengan informasi
                yang kami sajikan. Jelajahi halaman 'Informasi' kami untuk mendapatkan wawasan yang lebih baik tentang kami
                dan apa yang kami tawarkan.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                <div class="bg-white p-6 shadow rounded-lg flex flex-col justify-between">
                    <div>
                        <h2 class="text-xl font-semibold mb-2">Informasi lain</h2>
                        <p class="text-md font-thin mb-4 text-justify">
                            Adapun informasi yang nantinya akan ditampilkan disini, nantinya akan ada link Foto Google drive
                            kegiatan yang telah diselenggarakan</p>
                        <ul class="list-disc ml-3">
                            <li>
                                <a href="https://drive.google.com/drive/folders/1NsyXW4NVB2wSM1TkCKBDfIQ4JWRilSev"
                                    target="_blank" rel="noopener noreferrer"
                                    class="hover:text-purple-400 font-bold text-blue-400"> Google Drive Semua
                                    Foto
                                </a>
                            </li>
                            <li>
                                <a href="http:https://drive.google.com/drive/u/0/folders/19Cb-8nUyCxvtfepZJnvfumZ3HtHvBArp"
                                    target="_blank" rel="noopener noreferrer"
                                    class="hover:text-purple-400 font-bold text-blue-400"> Google
                                    Drive Haornas
                                    2022
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src="../../assets/koneksi.png" alt="informasi dan komunikasi" class="rounded-lg">
                </div>
                <div class="bg-white p-6 shadow rounded-lg">
                    <h2 class="text-lg font-semibold mb-4">Hubungi Kami</h2>
                    <p class="text-gray-700">
                        <i class="fas fa-map-marker-alt fa-lg mr-2 text-primary text-red-400"></i>
                        Jl. Juwono, Juwono RT.01, Triharjo, Pandak, Kota Bantul 55761
                    </p>
                    <!-- WhatsApp contact and icon -->
                    <div class="flex items-center mt-4">
                        <i class="fab fa-whatsapp text-primary text-2xl mr-2 text-green-400"></i>
                        <a href="https://wa.me/+6282326113580" target="_blank"
                            class="text-green-400 hover:underline">Hubungi
                            Kami via WhatsApp</a>
                    </div>
                    <h2 class="text-lg font-semibold mt-5">Lokasi Peta</h2>
                    <!-- Google Maps embed -->
                    <iframe
                        src="https://maps.google.com/maps?q=-7.916877,110.279525&hl=en&z=18&output=embed&markers=-7.916877,110.279525"
                        width="100%" height="400" frameborder="0" style="border:0" allowfullscreen class="my-2 rounded">
                    </iframe>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8">
                <form class=" bg-white p-6 shadow rounded-lg" @submit.prevent="sendEmail">
                    <h2 class="text-xl font-semibold mb-2">Kirim Pesan</h2>
                    <p class="text-md font-thin mb-8 text-justify">
                        Bila anda memiliki kritik/saran ataupun bertanya seputar jersi
                        dan ingin kolaborasi bisa lakukan kirim pesan dibawah ini ataupun bisa menghubungi melalui
                        WhatsApp yang terlampir</p>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Nama</label>
                        <input type="text" id="name" name="name" v-model="name"
                            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            placeholder="Masukkan nama Anda" required />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" v-model="email"
                            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            placeholder="Masukkan email Anda" required />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-gray-700">Pesan</label>
                        <textarea id="message" name="message" v-model="message"
                            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-primary" rows="4"
                            placeholder="Tulis pesan Anda" required></textarea>
                    </div>
                    <button type="submit" value="Send"
                        class="w-full bg-sky-400 text-white py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>

    </section>
</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            isSent: false
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_g5jeuch', 'template_ektiixh', e.target, 'VPvjiZdxDvzmO2dn4', {
                    name: this.name,
                    email: this.email,
                    message: this.meessage
                }).then(() => {
                    this.isSent = true;
                    Swal.fire({
                        icon: 'success',
                        title: 'Pesan Berhasil Terkirim!',
                        text: 'Terima kasih atas pesan Anda.',
                        confirmButtonText: 'Tutup'
                    });
                });

            } catch (err) {
                if (err instanceof ReferenceError) {
                    alert("JSON Error: " + err.message);
                } else {
                    throw err; // rethrow
                }
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>
