<template>
  <article class="MyChath">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 21.3333C28 22.0406 27.719 22.7188 27.219 23.2189C26.7189 23.719 26.0406 24 25.3333 24H9.33333L4 29.3333V5.33332C4 4.62608 4.28095 3.9478 4.78105 3.4477C5.28115 2.94761 5.95942 2.66666 6.66667 2.66666H25.3333C26.0406 2.66666 26.7189 2.94761 27.219 3.4477C27.719 3.9478 28 4.62608 28 5.33332V21.3333Z" fill="#181E29"/>
      <rect x="8.33331" y="12.3333" width="3.33333" height="3.33333" rx="1.66667" fill="#F0F3F7"/>
      <rect x="14.3333" y="12.3333" width="3.33333" height="3.33333" rx="1.66667" fill="#F0F3F7"/>
      <rect x="20.3333" y="12.3333" width="3.33333" height="3.33333" rx="1.66667" fill="#F0F3F7"/>
    </svg>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
  .MyChath {
    position: absolute;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 100%;
    background-color: variables.$white;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 3rem;
    top: -6rem;
    cursor: pointer;
    transition: variables.$time;
    &:hover {
      background-color: variables.$gray;
    }
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
    &::before {
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      border: .3rem solid variables.$black;
      background-color: variables.$red;
      top: .2rem;
      right: .2rem;
      border-radius: 100%;
      position: absolute;

    }
  }
</style>