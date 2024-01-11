<template>
    <div class="md:w-2/3 md:m-auto w-full">
        <header>
            <nav class="flex items-center justify-between px-8 py-4">
                <h1 class="text-3xl font-semibold cursor-pointer transition hover:text-pink-500" @click="goToPage('/')">Fashion</h1>
                <div class="flex items-center">
                    <ul class="max-lg:hidden flex items-center">
                        <li>
                            <NuxtLink to="/">Accueil</NuxtLink>
                        </li>
                        <li class="mx-2">
                            <NuxtLink to="/">Boutique</NuxtLink>
                        </li>
                        <li class="mr-2">
                            <NuxtLink to="/">Favoris</NuxtLink>
                        </li>
                        <li class="mr-4">
                            <NuxtLink to="/">Panier</NuxtLink>
                        </li>
                    </ul>
                    <div class="bg-pink-200 rounded-full flex items-center px-2 py-1 group transition hover:bg-pink-500 cursor-pointer">
                        <NuxtImg class="rounded-full grayscale transition group-hover:grayscale-0" width="40" height="40" quality="50" format="webp" src="/img/me.jpg" />
                        <span class="text-pink-500 ml-2 transition group-hover:text-neutral-100">Maria Parker</span>
                    </div>
                </div>
            </nav>
        </header>
        <slot />
        <div class="fixed bottom-0 z-10 w-full p-8 text-neutral-400 sm:hidden">
            <svg class="w-full absolute left-0 -bottom-4" viewBox="0 0 375 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_15_693)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M142.003 24H20C8.95431 24 0 32.9543 0 44V122H375V44C375 32.9543 366.046 24 355 24L232.997 24C232.729 48.8986 212.462 69 187.5 69C162.538 69 142.271 48.8986 142.003 24Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_15_693" x="-20" y="0" width="415" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-4"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_693"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_693" result="shape"/>
                </filter>
                </defs>
            </svg>
            <ul class="flex items-end justify-between relative z-20">
                <li class="text-pink-500 border-b-2 border-pink-500">
                    <HomeIcon class="w-6 h-6" />
                </li>
                <li class="hover:text-pink-500 transition cursor-pointer">
                    <FireIcon class="w-6 h-6" />
                </li>
                <li class="bg-pink-500 rounded-full p-4 text-white relative bottom-4 z-50">
                    <ShoppingCartIcon class="w-10 h-10" />
                </li>
                <li class="hover:text-pink-500 transition cursor-pointer">
                    <HeartIcon class="w-6 h-6" />
                </li>
                <li class="hover:text-pink-500 transition cursor-pointer">
                    <UserIcon class="w-6 h-6" />
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup lang="ts">
import { HomeIcon, FireIcon, HeartIcon, UserIcon, ShoppingCartIcon} from '@heroicons/vue/24/solid'

function goToPage(path: string): void {
    const router = useRouter()
    router.push(path)
}
</script>