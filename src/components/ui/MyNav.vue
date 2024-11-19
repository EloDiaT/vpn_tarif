<template>
  <nav class="MyNav">
    <router-link 
      class="MyNav_item" 
      v-for="(item, index) in list" 
      :key="index" 
      :to="item.to"
    >
      <span :class="[{'MyNav_item--active': item?.active}]">
        {{ item.value }}
      </span>
    </router-link>
  </nav>
</template>

<script setup>
defineProps({
  list: {
    default: []
  }
})

</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyNav {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 3.2rem;
  .MyNav_item {
    position: relative;
    text-decoration: none;
    span {
      color: variables.$white;
      transform: variables.$time;
      @include variables.fs-mid();
      &:hover {
        color: variables.$gray;
      }
    }
    &:last-child::before {
      content: none;
    }
    &::before {
      content: '/';
      position: absolute;
      right: -1.6rem;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 1.6rem;
      display: block;
      cursor: default;
    }
    &--active {
      color: variables.$gray !important;
    }
  }
}
</style>