<template>
    <div class="py-16">
     <Parallax />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
  
  const enabled = ref(false);
  </script>