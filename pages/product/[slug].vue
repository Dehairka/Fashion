<template>
    <div class="md:p-8 grid grid-cols-2 max-md:grid-cols-1 max-md:pb-32">
        <div class="">
            <NuxtImg
            v-show="!loading"
            class="w-full h-[500px] object-cover productImage"
            :src="product.image"
            :alt="product.name"
            :width="isMobile ? 300 : 500"
            :height="isMobile ? 300 : 500"
            :blur="0"
            format="webp"
            :quality="100"
            :webp-optimized="true"
            :priority="true"
            @load="loading = false"/>
            <Skeleton v-if="loading" class="w-full h-[500px]" />
        </div>
        <section class="px-8 max-md:py-8 bg-white rounded-t-2xl relative max-md:-top-12">
            <h1 class="text-2xl font-bold productTitle">{{product.name}}</h1>
            <p class="text-gray-500 my-4">{{product.description}}</p>
            <div class="flex items-center">
                <div class="flex">
                    <StarIcon v-for="star in 5" :key="star" class="w-6 h-6 text-pink-500" />
                </div>
                <span class="text-gray-500">(0 avis)</span>
            </div>
            <p class="font-bold text-2xl my-8 productPrice">{{product.price * quantity}}€</p>
            <div v-if="product.quantity" class="flex items-center">
                <label class="mr-4">Quantité :</label>
                <div class="flex items-center">
                    <button class="px-4 py-2 rounded-lg border border-gray-300" @click="quantity > 1 ? quantity-- : null">-</button>
                    <span class="px-4 py-2 rounded-lg h-full border border-gray-300 block">{{ quantity }}</span>
                    <button class="px-4 py-2 rounded-lg border border-gray-300" @click="quantity++">+</button>
                </div>
            </div>
            <div class="flex items-center my-6 flex-wrap">
                <button class="px-4 py-2 btn mr-4 mb-2">Ajouter au panier</button>
                <button class="p-2 rounded-full border border-pink-500 transition hover:bg-pink-500 group mb-2" @click="favorite = !favorite">
                    <HeartIcon v-if="favorite" class="w-6 h-6 text-pink-500 group-hover:text-white" />
                    <HeartOutline v-else class="w-6 h-6 text-pink-500 group-hover:text-white" />
                </button>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { StarIcon, HeartIcon } from '@heroicons/vue/24/solid'
import { HeartIcon as HeartOutline} from '@heroicons/vue/24/outline'

const { isMobile, isTablet, isDesktop } = useDevice();
const loading = ref(true)
const {data: product} = await useAsyncData(async () => {
    const response = {
        name: 'Queen Rose - Pink',
        image: '/img/me.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
        price: 55,
        quantity: true
    }
    return response
})
const quantity = ref(1)
const favorite = ref(false)
</script>

<style scoped>
.productTitle{
    view-transition-name: product-title;
}
.productPrice{
    view-transition-name: product-price;
}
.productImage{
    view-transition-name: product-image;
}
</style>