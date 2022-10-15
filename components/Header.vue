<template>
    <header class="my-2 mx-2 lg:mx-8  bg-transparent  ">
    <nav class=" ring-neutral-800 ring-2  px-4 lg:px-9 py-4 lg:py-6 backdrop-blur-2xl  backdrop-opacity-80 rounded-2xl w-full text">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NuxtLink to="/" class="n-link-base flex items-center " > 
                <span  class="mr-3 h-6 w-6 bg-primary-200 sm:h-9 sm:w-9 rounded-full" alt="Flowbite Logo" ></span>
                <span class="self-center  text-xl font-semibold whitespace-nowrap dark:text-white text">CODDY LEARN</span>
            </NuxtLink>
            <div :class="['lg:flex hidden items-center lg:order-2 gap-4  ']"  >
                <NuxtLink to="/" class=" py-2.5 px-3.5 text-xl rounded-md font-medium leading-snug tracking-wide  text-white ring-neutral-800 ring-2 transition  hover:ring-primary-500 active:bg-neutral-900 active:ring-neutral-700 ">Войти</NuxtLink>
                <NuxtLink to="/" class=" py-2.5 px-3.5 text-xl rounded-md font-medium leading-snug tracking-wide  text-white ring-primary-500/95 ring-2 transition bg-primary-500">Регистрация</NuxtLink>
            </div>
            <Menu :class="'visible' ? nonDesktop: ''" />
            <!-- <button v-if="!isDesktop" type="button" class=" flex  relative items-center p-2 w-8 h-8 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="toggle()">
                    <span class="sr-only">Открыть главное меню</span>
                    <div :class="[' transition-all  ease absolute w-full h-full flex items-center justify-center top-0 left-0 duration-300', value ? 'rotate-45 translate-y-3  opacity-0' : '' ]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    <div  :class="[' transition-all flex items-center justify-center w-full h-full top-0 left-0 absolute ease transform duration-300', value ? '' : '-rotate-45 translate-y-3 opacity-0 ' ]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </button> -->
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" ref="list_of_links">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 tracking-wide">
                    <li>
                        <NuxtLink to="/" class="n-link-base"> coddy </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="n-link-base"> курсы </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog" class="n-link-base"> блог </NuxtLink>
                    </li>
                    <li>
                        <Popover class="relative" v-slot="{ open }">
                            <PopoverButton class="n-link-base" :class="open ? '' : 'text-opacity-90'">поддержка</PopoverButton>
                            <PopoverPanel class="absolute z-10">
                                <div class="grid grid-cols-2">
                                    <NuxtLink to="/blog" class="n-link-base"> Вопросы </NuxtLink>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints, useToggle  } from '@vueuse/core';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { watchEffect, onMounted,   } from 'vue'  
const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater('lg')
const nonDesktop = breakpoints.smaller('lg')
const [value, toggle] = useToggle();
onMounted(()=> {
    
})
</script>
<style scoped>
nav {
    background: linear-gradient(90deg, #000000, rgba(255, 255, 255, 0.115), #000000);
}
</style>