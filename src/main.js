import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {addIcons,OhVueIcon} from 'oh-vue-icons';
import { BiGithub as GithubIcon, BiLinkedin as LinkdedinIcon, MdEmailOutlined as EmailIcon,BiSkype as SkypeIcon,
    MdKeyboarddoublearrowrightOutlined as ArrowBulletin
 } from "oh-vue-icons/icons";

addIcons(GithubIcon,LinkdedinIcon,EmailIcon,SkypeIcon,ArrowBulletin);
const app = createApp(App);
app.component('v-icon',OhVueIcon);
app.mount('#app')
