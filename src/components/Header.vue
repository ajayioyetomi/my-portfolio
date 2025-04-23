<script setup>
    import { ref, defineEmits, defineProps } from 'vue';
    import {Switch,Socials,Menu,ViewCV} from '.';
    import {links} from '../constants';

    const props = defineProps({
        handleTheme:{
            type:Function,
        }
    })
    const show = ref(true);
    const showCV = ref(false);
    const handleShow = ()=>{
        show.value = !show.value;
    }
    const handleShowCV = ()=>{
        showCV.value = true;
    }

    const handleCloseCV = () =>{
        showCV.value = false;
        console.log('close')
    }

    
</script>

<template>
    <ViewCV :show="showCV" @handleClose="handleCloseCV()" />
    <header class="fixed sm:sticky z-50 items-center w-screen top-0 left-0 flex py-[10px] px-[5%] bg-[rgba(8,24,196,0.8)] dark:bg-[rgba(3,9,73,0.8)] transition-all duration-500">
        <span class="absolute top-0 left-0 w-full h-full -z-0 blur-4xl backdrop-blur-lg"></span>
        <a href="/" class="relative z-40 w-[60px] h-[60px]">
            <img src="/logo.png" class="relative z-40 w-[60px] h-[60px]" />
        </a>
        <nav class="relative flex flex-1 justify-end gap-4 sm:gap-6 items-center">
            <div class="hidden gap-4 sm:gap-6 md:flex items-center">
                <a class="relative font-bold text-white dark:text-primary transition-all duration-75 after:absolute after:w-full after:h-1 after:bg-white after:dark:bg-primary after:inline-block after:content-[''] after:-bottom-2 after:left-0 after:opacity-0 hover:after:opacity-100 " 
                v-for="link in links" :key="link.id" :href="link.path?'#'+link.path:''" >{{ link.name }}
                </a>
                <a href="./taiwo_ajayi_cv.pdf" class="relative font-bold text-white dark:text-primary transition-all duration-75 after:absolute after:w-full after:h-1 after:bg-white after:dark:bg-primary after:inline-block after:content-[''] after:-bottom-2 after:left-0 after:opacity-0 hover:after:opacity-100 " download>Download CV</a>
                <span class="cursor-pointer relative font-bold text-white dark:text-primary transition-all duration-75 after:absolute after:w-full after:h-1 after:bg-white after:dark:bg-primary after:inline-block after:content-[''] after:-bottom-2 after:left-0 after:opacity-0 hover:after:opacity-100" @click="handleShowCV()"  >View CV</span>
            </div>
            <!-- <Socials />             -->
            <Switch @handleTheme="props.handleTheme" />
            <Menu :show="show" @handleClick="handleShow()" class="relative z-50 md:hidden"/>
        </nav>
        <aside :class="`md:left-[100vw] ${!show?'left-0':'left-[100vw]'} fixed top-0 z-10 w-screen h-full bg-[rgba(244,244,250,0.9)] dark:bg-[rgba(12,10,20,0.9)]  transition-all duration-100 flex justify-end`">
            <ul class="flex flex-col gap-5 w-[300px] bg-[white] dark:bg-[black] h-full pt-[80px] pb-4 px-4">
                <li v-for="link in links" :key="link.id">
                    <a class="font-bold text-dark-primary dark:text-primary" :href="'#'+link.path">
                        {{ link.name }}
                    </a>
                </li>
                <li>
                    <a href="./taiwo_ajayi_cv.pdf" class="font-bold text-dark-primary dark:text-primary" download>Download CV</a>
                </li>
                <li class="mt-auto">
                    <Socials /> 
                </li>
            </ul>
        </aside>
    </header>
</template>

<style scoped>

</style>