<template>
    <div class="bg-black p-2 min-h-screen overflow-hidden antialiased " :style="{backgroundImage: `url(stars.png)`}" id="main-app" >
        <Header />
        <main class="relative z-10 min-h-screen lg:px-8 overflow-hidden px-2 mt-4 text-white">
          <slot />
        </main>
        <Footer />
    </div>
</template>
<style>
#main-app {
  background-repeat: repeat;
}
</style>