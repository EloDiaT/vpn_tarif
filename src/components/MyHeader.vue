<template>
  <header class="MyHeader">
    <div class="container">
      <div class="MyHeader_wrapper">
        <router-link to="/" class="MyHeader_wrapper_logo">
          <img src="@/assets/logo.svg" alt="logo">
        </router-link>
        <nav class="MyHeader_wrapper_nav">
          <div class="MyHeader_wrapper_nav--item" @click="modal">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16666 14.0003H9.83332V12.3337H8.16666V14.0003ZM8.99999 0.666992C7.90564 0.666992 6.82201 0.88254 5.81096 1.30133C4.79991 1.72012 3.88125 2.33395 3.10743 3.10777C1.54463 4.67057 0.666656 6.79019 0.666656 9.00033C0.666656 11.2105 1.54463 13.3301 3.10743 14.8929C3.88125 15.6667 4.79991 16.2805 5.81096 16.6993C6.82201 17.1181 7.90564 17.3337 8.99999 17.3337C11.2101 17.3337 13.3297 16.4557 14.8925 14.8929C16.4553 13.3301 17.3333 11.2105 17.3333 9.00033C17.3333 7.90598 17.1178 6.82234 16.699 5.8113C16.2802 4.80025 15.6664 3.88159 14.8925 3.10777C14.1187 2.33395 13.2001 1.72012 12.189 1.30133C11.178 0.88254 10.0943 0.666992 8.99999 0.666992ZM8.99999 15.667C5.32499 15.667 2.33332 12.6753 2.33332 9.00033C2.33332 5.32533 5.32499 2.33366 8.99999 2.33366C12.675 2.33366 15.6667 5.32533 15.6667 9.00033C15.6667 12.6753 12.675 15.667 8.99999 15.667ZM8.99999 4.00033C8.11593 4.00033 7.26809 4.35151 6.64297 4.97664C6.01785 5.60176 5.66666 6.4496 5.66666 7.33366H7.33332C7.33332 6.89163 7.50892 6.46771 7.82148 6.15515C8.13404 5.84259 8.55796 5.66699 8.99999 5.66699C9.44202 5.66699 9.86594 5.84259 10.1785 6.15515C10.4911 6.46771 10.6667 6.89163 10.6667 7.33366C10.6667 9.00033 8.16666 8.79199 8.16666 11.5003H9.83332C9.83332 9.62533 12.3333 9.41699 12.3333 7.33366C12.3333 6.4496 11.9821 5.60176 11.357 4.97664C10.7319 4.35151 9.88404 4.00033 8.99999 4.00033Z" fill="#F0F3F7"/>
            </svg>
            Help
          </div>
          <div class="btn MyHeader_wrapper_nav--btn">Get started</div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const emit = defineEmits(['show']);
function modal () {
  emit('show', true)
  document.body.style.overflow = 'hidden'
}

</script>

<style lang="scss" >
@use "@/assets/style/variables" as variables;
.MyHeader {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #FFFFFF14;
  .MyHeader_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .MyHeader_wrapper_logo {
      cursor: pointer;
      img {
        width: 14.1rem;
        height: 100%;
      }
    }
    .MyHeader_wrapper_nav {
      display: flex;
      align-items: center; 

      color: variables.$white;
      &--item {
        display: flex;
        align-items: center;
        margin-right: 2.4rem;
        @include variables.fs-nomrmal();
        cursor: pointer;
        transition: variables.$time;
        svg {
          margin-right: .56rem;
          width: 1.6rem;
          height: 1.6rem;
          path {
            transition: variables.$time;
          }
        }
        &:hover {
          color: variables.$gray;
          svg {
            path {
              fill: variables.$gray;
            }
          }
        }
      }
      &--btn {
        width: 13rem;
        height: 100%;
        padding: .95rem 2.4rem;
        @include variables.fs-nomrmal();
      }
    }
  }
  
}
</style>