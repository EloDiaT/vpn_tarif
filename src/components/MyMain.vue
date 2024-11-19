<template>
  <main class="MyMain">
    <div class="container">
      <div class="MyMain_wrapper">
        <div class="MyMain_wrapper--nav">
          <MyNav :list="[{to: '/', value: 'Home'}, {to: '/', value: 'Region'}, {to: '/', value: 'Europe', active: true}]"/>
        </div>
        <div class="MyMain_wrapper_content">
          <div class="content_img">
            <img src="@/assets/image.png" alt="image">
          </div>
          <div class="content_block">
            <MyBlock/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template> 

<script setup>
import MyBlock from './MyBlock.vue';
import MyNav from './ui/MyNav.vue';
</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyMain {
  margin-top: 1.6rem;
  width: 100%;
  height: 100%;
  @media all and (max-width: 885px) {
    margin-top: 1.6rem;
  }
  .MyMain_wrapper {
    &--nav {
      width: 100%;
    }
    .MyMain_wrapper_content {
      margin-top: 1.6rem;
      display: grid;
      grid-template-columns: 40.6rem 1fr;
      gap: 9.6rem;
      @media all and (max-width: 885px) {
        gap: 0;
        grid-template-columns: auto;
      }
      .content_img {
        img {
          width: 40.6rem;
          height: 58.5rem;
        }
        @media all and (max-width: 885px) {
          display: none;
        }
      }
      .content_block {

      }
    }
  }
}
</style>