<template>
    <div>
        <form class="flex items-center px-8 py-4">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <MagnifyingGlassIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Que recherchez-vous ?" required>
            </div>
            <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-pink-400 rounded-full border border-pink-500 hover:bg-pink-600 focus:ring-4 outline-none focus:outline-none focus:ring-pink-300 ">
                <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
                <span class="sr-only">Rechercher</span>
            </button>
        </form>
        <section class="md:px-8 py-4">
            <div class="flex items-center justify-between max-md:px-8 ">
                <h2 class="font-bold text-xl">Nouveaux sur la boutique</h2>
                <span class="text-pink-500 text-sm cursor-pointer hover:text-pink-700">Voir plus</span>
            </div>
            <Swiper
                v-show="!loading"
                @after-init="loading = false"
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="swiperWidth"
                :loop="true"
                :parallax="true"
                :effect="'coverflow'"
                :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
                }"
                :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }"
            >
                <SwiperSlide class="" v-for="slide in 8" :key="slide">
                    <div class="p-4 mx-2 mt-2 mb-6 rounded-lg shadow-lg max-w-96 bg-white transition cursor-pointer hover:shadow-xl">
                        <div class="grid grid-cols-2 gap-4">
                            <NuxtImg class="row-span-2 h-full w-full object-cover rounded-lg object-left" src="/img/me.jpg" width="300" height="300" format="webp" quality="50" />
                            <NuxtImg class="w-full h-full object-cover rounded-lg object-left" src="/img/me.jpg" width="300" height="300" format="webp" quality="50" />
                            <NuxtImg class="w-full h-full object-cover rounded-lg object-left" src="/img/me_2.jpg" width="300" height="300" format="webp" quality="50" />
                        </div>
                        <div class="pt-4">
                            <span class="text-pink-500" data-swiper-parallax="-100">Vidéo</span>
                            <div class="flex items-center justify-between" data-swiper-parallax="-200">
                                <h3 class="font-semibold text-xl" >Titre</h3>
                                <span class="text-pink-500 text-xl font-semibold">55€</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperControllers class="max-md:hidden"/>
            </Swiper>
            <div v-if="loading" class="flex items-center">
                <pre>{{ swiperWidth }}</pre>
                <Skeleton v-for="skeleton in Math.round(swiperWidth)" :key="skeleton" class="h-[280px] mx-2" />
            </div>
        </section>
        <section class="md:px-8 py-4">
            <div class="flex items-center justify-between max-md:px-8 ">
                <h2 class="font-bold text-xl py-4">Mes réseaux</h2>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="rounded-lg shadow-lg p-4 flex items-center justify-center h-32 cursor-pointer transition hover:shadow-xl">
                    <NuxtImg class="w-full object-cover object-left" src="/img/OnlyFans.svg" width="166" height="30" />
                </div>
                <div class="rounded-lg shadow-lg p-4 flex items-center justify-center h-32 cursor-pointer transition hover:shadow-xl">
                    <NuxtImg class="" src="/img/VTC.png" width="200" height="120" />
                </div>
                <div class="rounded-lg shadow-lg p-4 flex items-center justify-center h-32 cursor-pointer transition hover:shadow-xl">
                    <NuxtImg class="" src="/img/Mym.png" width="150" height="100" />
                </div>
                <div class="rounded-lg shadow-lg p-4 flex items-center justify-center h-32 cursor-pointer transition hover:shadow-xl">
                    <NuxtImg class="" src="/img/Swame.svg" width="150" height="100" />
                </div>
            </div>
        </section>
        <section class="md:px-8 py-4 mb-32">
            <div class="flex items-center justify-between max-md:px-8 ">
                <h2 class="font-bold text-xl py-4">Recommandé</h2>
                <span class="text-pink-500 text-sm cursor-pointer hover:text-pink-700">Voir plus</span>
            </div>
            <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="swiperWidthTwo"
                :loop="false"
                :parallax="true"
                :effect="'coverflow'"
                :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
                }"
                :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }"
            >
                <SwiperSlide class="" v-for="slide in 8" :key="slide">
                    <div class="shadow-lg rounded-lg bg-white mb-8 mx-6 p-4 flex items-center transition cursor-pointer hover:shadow-xl">
                        <NuxtImg class="object-cover rounded-lg" src="/img/me.jpg" format="webp" quality="50" width="100" height="100" />
                        <div class="flex-1 flex flex-col justify-between px-4 text-sm">
                            <span class="text-pink-500">Vidéo</span>
                            <h4 class="font-semibold truncate">Titre du produit</h4>
                            <span class="text-pink-500 font-semibold">55€</span>
                        </div>
                        <button class="bg-pink-500 cursor-pointer transition p-2 rounded-full relative left-8 text-white border border-pink-500 hover:bg-white hover:text-pink-500">
                            <PlusIcon class="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperControllers class="max-md:hidden"/>
            </Swiper>
        </section>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, ChevronRightIcon, PlusIcon } from '@heroicons/vue/24/solid'

const loading = ref(true)
const swiper = useSwiper()
const swiperWidth = ref(1)
const swiperWidthTwo = ref(1)
const { isMobile, isTablet, isDesktop } = useDevice();


function detectWidthScreen(){
    if(process.client){
        if (window.innerWidth < 450) {
            swiperWidth.value = 1.3
        } else if (window.innerWidth < 640) {
            swiperWidth.value = 2.3
        } else if (window.innerWidth < 765) {
            swiperWidth.value = 3.3
        } else if (window.innerWidth < 1280) {
            swiperWidth.value = 3
        } else {
            swiperWidth.value = 4
        }
    }else{
        if(isMobile){
            swiperWidth.value = 1.3
        }else if(isTablet){
            swiperWidth.value = 2.3
        }else if(isDesktop){
            swiperWidth.value = 3
        }else{
            swiperWidth.value = 3
        }
    }
}
function detectWidthScreenSlideTwo(){
    if(process.client){
        if (window.innerWidth < 450) {
            swiperWidthTwo.value = 1
        } else if (window.innerWidth < 650) {
            swiperWidthTwo.value = 1.3
        } else if (window.innerWidth < 770) {
            swiperWidthTwo.value = 1
        } else if (window.innerWidth < 1280) {
            swiperWidthTwo.value = 1
        } else {
            swiperWidthTwo.value = 2
        }
    }else{
        swiperWidthTwo.value = 2.3
    }
}

detectWidthScreen();
detectWidthScreenSlideTwo();

onMounted(() => {
    addEventListener('resize', () => {
        detectWidthScreen();
        detectWidthScreenSlideTwo();
    })
})
</script>