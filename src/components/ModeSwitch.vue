<script setup>
import { defineEmits,onMounted } from 'vue';
import {useDark,useToggle} from '@vueuse/core';
const emit = defineEmits(['handleTheme']);
const isDark = useDark();
const handleToggle = useToggle(isDark);
const moveToggle = () =>{
    emit('handleTheme',isDark.value)
}

onMounted(()=>{
    moveToggle();
})
    
</script>

<template>
    <div @click="()=>{handleToggle();moveToggle()}" class="cursor-pointer justify-start dark:justify-end flex items-center w-[50px] h-[22px] p-[1px] bg-gray-200 dark:bg-blue-50 rounded-2xl overflow-clip ease-linear transition-all duration-[3s]">
        <span class="w-[20px] h-[20px] rounded-[20px] inline-block bg-white dark:bg-primary ease-linear transition-all duration-[3s]"></span>
    </div>
</template>

<style scoped>
    

</style>