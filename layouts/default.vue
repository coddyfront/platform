<template>
    <div class="bg-black p-2 min-h-screen" :style="{backgroundImage: `url(stars.png)`}" id="main-app" >
        <Header />
        <main>
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