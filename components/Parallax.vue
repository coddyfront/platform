<template>
    <div class="w-full h-full relative">
        <h1 class="font-extrabold bg-clip-text text-transparent bg-conic-to-r from-yellow-500 via-indigo-500 to-green-500  text-3xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, non? </h1>
        <div ref="target" :style="targetStyle" class="">
          <div :style="containerStyle" class="w-full">
              <div :style="cardWindowStyle">
                  <img
                :style="layer0"
                class="w-1/3"
                src="person.svg"
                alt=""
              >
              <img
              :style="layer2"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png"
              alt=""
            >
              </div>
          </div>
        </div> 
    </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { useMediaQuery, useParallax } from '@vueuse/core'
const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')
const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '500px',
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  overflow: 'hidden',
  position: 'absolute',
  top: 'calc(50%)',
  left: 'calc(50%)',
  height: '500px',
  width: '500px',
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  perspective: '300px',
}
const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.33)`,
}))
const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px) scale(1.33)`,
}))

</script>
