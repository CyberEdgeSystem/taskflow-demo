import { createApp } from 'vue';

import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, {
  registerComponents,
} from 'framework7-vue/bundle';

import 'framework7/css/bundle';
import './css/app.css';

import App from './App.vue';

// Підключення Framework7 до Vue
Framework7.use(Framework7Vue);

// Створення застосунку
const app = createApp(App);

// Реєстрація компонентів Framework7
registerComponents(app);

// Запуск застосунку
app.mount('#app');