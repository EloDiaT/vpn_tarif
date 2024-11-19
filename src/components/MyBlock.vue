<template>
  <div class="MyBlock">
    <div class="MyBlock_title">
      <img src="@/assets/icon.svg" alt="icon">
      <span>
        eSIM Europe + VPN
      </span>
    </div>
    <div class="MyBlock_content">
      <div class="MyBlock_content--nav">
        <router-link active-class="nav--active" :to="{ path: 'features' }" >Features</router-link>
        <router-link active-class="nav--active" :to="{ path: 'tech-specs' }">Tech specs</router-link>
      </div>
      <RouterView/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyBlock {
  @media all and (max-width: 885px) {
    margin-top: 1.6rem;
  }
  height: 100%;
  .MyBlock_title {
    display: flex;
    align-items: center;
    justify-content: start;
    color: variables.$white;
    @include variables.fs-big();
    span {
      margin-left: 1.6rem;
    }
    svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
  .MyBlock_content {
    margin-top: 2.4rem;
    &--nav {
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: .8rem;
      .nav--active {
        background-color: variables.$white;
        color: variables.$black
      }
      a {
        @include variables.fs-nomrmal();
        border-radius: 10rem;
        border: .1rem solid #FFFFFF1F;
        padding: .9rem 1.6rem;
        display: block;
        text-decoration: none;
        color: variables.$white;
        transition: variables.$time;
        &:hover {
          background-color: variables.$white;
          color: variables.$black
        }
      }
    }
  }
}
</style>