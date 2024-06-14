import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {addIcons,OhVueIcon} from 'oh-vue-icons';
import { BiGithub as GithubIcon, BiLinkedin as LinkdedinIcon } from "oh-vue-icons/icons";
addIcons(GithubIcon,LinkdedinIcon);
const app = createApp(App);
app.component('v-icon',OhVueIcon);
app.mount('#app')
