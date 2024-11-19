<template>
  <footer class="MyFooter">
    <div class="container">
      <div class="MyFooter_wrapper">
        <a class="MyFooter_wrapper--item" href="">© 2024 Esimvpn, All Rights Reserved.</a>
        <a class="MyFooter_wrapper--item" href="">Terms of Use</a>
        <a class="MyFooter_wrapper--item" href="">Privacy Policy</a>
      </div>
    </div>
    <MyChat/>
  </footer>
  
</template>

<script setup>
  import MyChat from '@/components/MyChat.vue';
</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyFooter {
  position: relative;
  border-top: 1px solid #272E3C;
  width: 100%;
  height: 100%;
  .MyFooter_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2.4rem;
    &--item {
      color: variables.$gray;
      @include variables.fs-mini();
      &:first-child {
        text-decoration: none;
      }
      transition: variables.$time;
      &:hover {
        color: #535965;
      }
    }
  }
}
</style>