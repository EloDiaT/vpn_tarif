<template>
  <MyHeader @show="modal"/>
  <router-view/>
  <MyFooter/>
  <div style="color: red; font-size: 33px;">
  </div>
  <MyModal @show="modal" :show="modalState"/>
</template>

<script setup>
  import MyFooter from '@/components/MyFooter.vue';
  import MyHeader from '@/components/MyHeader.vue';
  import MyModal from '@/components/view/MyModal.vue';
  import { ref } from 'vue';

  const modalState = ref(false);
  function modal(eve) {
    modalState.value = eve; 
  }
</script>

<style lang="scss">
@use "@/assets/style/variables" as variables;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}
html { 
  font-size: 10px;
  @media all and (max-width: 999px) {
    font-size: 9px;
  }
  @media all and (max-width: 749px) {
  }
  @media all and (max-width: 425px) {
    font-size: 2.35vw;
  }
}
body {
  width: 100%;
  height: 100%;
  background: url('@/assets/bg.png') no-repeat variables.$black;
  background-size: cover;
  background-position: right;
  font-family: 'Roboto', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7.2rem 100dvh 4.1rem;
  align-items: center;
}
</style>