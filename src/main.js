// src/main.js
import { createPinia } from 'pinia';
import { createApp } from 'vue'; // Vue 3에서는 createApp을 사용합니다.
import App from './App.vue';
import router from './router'; // router 설정 import
import { registerPlugins } from '@/plugins';

import '@/style/tailwind.css';
import '@/style/tooltip.scss';

// Vue 인스턴스 생성 및 마운트
const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);

// 플러그인 등록
app.use(pinia);

app.use(router);

// out-side-click 디렉티브 전역 등록
app.directive('out-side-click', {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
});

app.mount('#app');
