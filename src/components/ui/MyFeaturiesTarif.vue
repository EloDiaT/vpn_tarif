<template>
  <div 
    @click="flag = index"
    :class="['MyFeaturiesTarif',{'MyFeaturiesTarif--active': flag === index}]"
    v-for="(item, index) in list"
    :key="index"
  >
    <div v-for="(items, indexElem) in item.col" :key="indexElem" class="MyFeaturiesTarif_col">
        <div 
          v-if="items.value && !/\.(png|svg|jpg)$/i.test(items.value)"
          :style="{'color': items.color}"
        >{{ items.value }}</div>
        <span 
          v-if="items.subtile"
         :style="{'textDecoration': items.color ? 'line-through' : 'none'}"
         >{{ items.subtile }}</span>
        <div v-if="/\.(png|svg|jpg)$/i.test(items.value)">
          <img :src="require('@/assets/' + items.value)" :alt="items.value">
        </div>
    </div>
    <div class="MyFeaturiesTarif_input">
      <input :checked="flag === index" type="radio">
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const flag = ref(0)

</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyFeaturiesTarif {
  margin-bottom: .8rem;
  width: 100%;
  border-radius: 1.2rem;
  min-height: 6.4rem;
  height: 100%;
  border: .2rem solid #FFFFFF1F;
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) minmax(8rem, 1fr) minmax(8rem, 1fr) auto 4.5rem;
  padding: .8rem 2rem;
  transition: variables.$time;
  cursor: pointer;
  &--active {
    border: .2rem solid #775CFF
  }
  &:last-child {
      margin-bottom: 0;
  }
  &:hover {
    border: .2rem solid #775CFF
  }
  .MyFeaturiesTarif_col {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: variables.$white;
    @include variables.fs-mb();
    
    span {
      color: variables.$gray;
      @include variables.fs-mid();
    }
  }
  .MyFeaturiesTarif_input {
    display: flex;
    align-items: center;
    justify-content: end;
    input {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>