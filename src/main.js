import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router/router';

// استيراد FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// استيراد الأيقونات المطلوبة فقط
import { faHome, faUser, faCog , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// إضافة الأيقونات إلى المكتبة
library.add(faHome, faUser, faCog, faFacebook, faTwitter,faArrowRight);

const app = createApp(App);

// استخدام المكونات
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
