<template>
  <Popover v-slot="{ open }" as="div" class="relative">
     <PopoverButton class=" flex  relative items-center p-2 w-12 h-12 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <div :class="['p-2 transition-all  ease absolute w-full h-full flex items-center justify-center top-0 left-0 duration-300', open ? 'rotate-45 translate-y-3  opacity-0' : '' ]">
           <HeroiconsBars220Solid class="w-7 h-7  text-white hover:text-slate-100" aria-hidden="true" />
        </div>
        <div :class="['p-2 transition-all flex items-center justify-center w-full h-full top-0 left-0 absolute ease transform duration-300', open ? '' : '-rotate-45 translate-y-3 opacity-0 ' ]">
           <HeroiconsXMark20Solid class="w-7 h-7 text-white hover:text-slate-100" aria-hidden="true" />
        </div>
     </PopoverButton>
     <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0">
        <Teleport to="body">
        <PopoverPanel class="bg-neutral-900 bg-opacity-95  absolute w-72 right-7 top-28 z-50 px-2 py-1 rounded-lg ring-2 ring-neutral-800  ">
           <ul class="flex flex-col gap-1 divide-y-2 divide-zinc-800 ">
              <a href="https://coddyschool.com/" target="_blank" class="n-link-base">coddy</a>
              <NuxtLink to="/cources" class="n-link-base">курсы</NuxtLink>
              <NuxtLink to="/blog" class="n-link-base">блог</NuxtLink>
              <NuxtLink to="/help" class="n-link-base">поддержка</NuxtLink>
           </ul>
        </PopoverPanel>
      </Teleport>
     </transition>
  </Popover>
</template>

<script setup>
//   import {
//      Bars2Icon,
//      XMarkIcon
//   } from '@heroicons/vue/24/outline'
  import HeroiconsBars220Solid from '~icons/heroicons/bars-2-20-solid'
  import HeroiconsXMark20Solid from '~icons/heroicons/x-mark-20-solid'
  import {
     Popover,
     PopoverButton,
     PopoverPanel
  } from '@headlessui/vue'
</script>