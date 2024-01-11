<template>
    <div>
        <div class="absolute right-0 bottom-[45%] z-50 bg-white border border-pink-500 rounded-full p-4 transition hover:bg-pink-500 cursor-pointer text-pink-500 hover:text-white" @click="swiper.slideNext()">
            <ChevronRightIcon class="w-6 h-6" />
        </div>
        <div class="absolute left-0 bottom-[45%] z-50 bg-white border border-pink-500 rounded-full p-4 transition hover:bg-pink-500 cursor-pointer text-pink-500 hover:text-white" @click="swiper.slidePrev()">
            <ChevronLeftIcon class="w-6 h-6" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'

const swiper = useSwiper()
</script>