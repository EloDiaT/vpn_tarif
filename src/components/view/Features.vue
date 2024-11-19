<template>
  <div class="Features">
    <ul class="Features_list">
      <li>33 countries</li>
      <li>Reliable connection from best networks.</li>
      <li>You will only get mobile data and keep your original phone number.</li>
      <li>Works with all smartphones with eSIM technology.</li>
    </ul>
    <div class="Features_tarif">
      <MyFeaturiesTarif :list="list"/>
    </div>
    <div class="Features_btn btn">
      Buy now
    </div>
    <div class="Features_info">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 7.33334C14 11.0333 11.44 14.4933 8 15.3333C4.56 14.4933 2 11.0333 2 7.33334V3.33334L8 0.666672L14 3.33334V7.33334ZM8 14C10.5 13.3333 12.6667 10.36 12.6667 7.48001V4.20001L8 2.12001L3.33333 4.20001V7.48001C3.33333 10.36 5.5 13.3333 8 14ZM6.66667 11.3333L4 8.66667L4.94 7.72667L6.66667 9.44667L11.06 5.05334L12 6.00001" fill="#57BC08"/>
      </svg>
      <span>
        Secure payment guaranteed.
      </span>
    </div>
  </div>
</template>

<script setup>
  import MyFeaturiesTarif from '../ui/MyFeaturiesTarif.vue';

  const list = [
    {
      col: [
        { value: '500 MB', subtile: '7 days eSIM' },
        { value: '∞ GB', subtile: '7 days VPN' },
        { value: '', subtile: '' },
        { value: '$ 10.00'}
      ]
    },
    {
      col: [
        { value: '1 GB', subtile: '30 days eSIM' },
        { value: '∞ GB', subtile: '30 days VPN' },
        { value: '', subtile: '' },
        { value: '$ 20.00'}
      ]
    },
    {
      col: [
        { value: '3 GB', subtile: '30 days eSIM' },
        { value: '∞ GB', subtile: '30 days VPN' },
        { value: '' },
        { value: '$ 30.00'}
      ]
    },
    {
      col: [
        { value: '5 GB', subtile: '7 days eSIM' },
        { value: '∞ GB', subtile: '6 months VPN' },
        { value: 'tag.png' },
        { value: '$ 42.12', subtile: '$ 50.00', color: '#FF86A4'}
      ]
    },
    {
      col: [
        { value: '10 GB', subtile: '60 days eSIM' },
        { value: '∞ GB', subtile: '6 months VPN' },
        { value: 'tag.png' },
        { value: '$ 51.03', subtile: '$ 60.00', color: '#FF86A4'}
      ]
    },
    {
      col: [
        { value: '20 GB', subtile: '60 days eSIM' },
        { value: '∞ GB', subtile: '1 year VPN' },
        { value: '' },
        { value: '$ 80.00'}
      ]
    },
  ]
</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.Features {
  .Features_list {
    list-style-type: none;
    color: variables.$gray;
    @include variables.fs-mid();
    li {
      margin-left: 2rem;
      position: relative;
      &::before {
        content: '';
        width: .5rem;
        height: .5rem;
        background-color: variables.$gray;
        border-radius: 100%;
        position: absolute;
        display: block;
        left: -1.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .Features_tarif {
    margin-top: 2.4rem;
  }
  .Features_btn {
    margin-top: 2.4rem;
    @include variables.fs-nomrmal();
    color: variables.$white;
    height: 5.6rem;
    padding: 1rem 1.7rem;
  }
  .Features_info {
    margin-top: 1.2rem;
    @include variables.fs-mid();
    color: variables.$gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6.4rem;
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
</style>