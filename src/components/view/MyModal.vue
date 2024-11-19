<template>
  <div class="MyModal" v-if="open">
      <div class="MyModal_modal">
        <div class="MyModal_modal--nav">
          <span>Contact support</span>
          <div @click="close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" fill="#7F8A9F"/>
            </svg>
          </div>
        </div>
        <div class="MyModal_modal_content">
          <div v-if="true">
            <div class="MyModal_modal_content--text">Get in touch with our support team if you need help.</div>
            <div class="MyModal_modal_content_api">
              <input v-model="input" placeholder="Email" type="text">
              <textarea v-model="area" name="" id=""></textarea>
              <div class="MyModal_modal_content_api--btn btn" @click="MyFetch()">Send</div>
              <div class="MyModal_modal_content_api--policy">By clicking 'Send' I agree with <a href="#">Privacy Policy</a></div>
            </div>
          </div>
          <div v-else>
            <div class="MyModal_modal_content--img">
              <img src="@/assets/3.png" alt="">
            </div>
            <div class="MyModal_modal_content--text MyModal_modal_content--text1">Your message has been sent</div>
            <div class="MyModal_modal_content--close" @click="close">Close</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  });
  const open = ref(false);
  const input = ref('');
  const area = ref('');
  const emit = defineEmits(['show']);
  watch(() => props.show, (newVal) => {
    open.value = newVal;
  });
  function close() {
    open.value = false
    emit('show', false)
    document.body.style.overflow = 'visible'
  }


  function MyFetch () {
    const data = {
      input: input.value,
      area: area.value
    }
    fetch('http://localhost:3000/api/save', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log('Ответ сервера:', result);
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
  }
</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as variables;
.MyModal {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: variables.$black;
  display: flex;
  align-items: center;
  justify-content: center;
  .MyModal_modal {
    max-width: 50rem;
    width: 100%;
    height: auto;
    padding: 3.2rem;
    border-radius: 1.2rem;
    background-color: #151324;
    &--nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        @include variables.fs-big();
        color: variables.$white;
      }
      svg {
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;
        transition: variables.$time;
        &:hover {
          stroke: variables.$white;
        }
      }
    }
  }
  .MyModal_modal_content {
    margin-top: 4.8rem;
    &--img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 9.6rem;
        height: 9.6rem;
      }
    }
    &--text1 {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &--close {
      margin-top: 1.6rem;
      width: 100%;
      @include variables.fs-nomrmal();
      color: variables.$white;
      border-radius: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.25px solid #FFFFFF1F;
      padding: 1.2rem;
      cursor: pointer;
      transition: variables.$time;
      &:hover {
        background-color: #FFFFFF1F;
      }
    }
    &--text {
      width: 100%;
      @include variables.fs-nomrmal();
      color: variables.$gray;;
    }
    .MyModal_modal_content_api {
      margin-top: 1.6rem;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      &--btn {
        margin-top: 1.6rem;
        width: 100%;
        padding: 1.2rem;
        height: 4.5rem;
        @include variables.fs-nomrmal();
        color: variables.$white;
      }
      &--policy {
        margin-top: 1.6rem;
        @include variables.fs-nomrmal();
        color: variables.$gray; 
        a {
          color: variables.$gray; 
        }
      }
      input, textarea {
        width: 100%;
        height: 5.6rem;
        padding: 1.6rem;
        background-color: #272E3C;
        border: 1px solid #272E3C;
        border-radius: 1.2rem;
        outline: none;
        @include variables.fs-nomrmal();
        color: variables.$gray;;
      }
      textarea {
        margin-top: 1.6rem;
        width: 100%;
        max-width: 43.6rem;
        height: 14.4rem;
        max-height: 14.4rem;
      }
    }
  }
}
</style>