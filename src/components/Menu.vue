<script setup>
import {ref, watchEffect} from "vue";

    const props = defineProps({show:Boolean,onHandleClick:Function})
    let show = ref(props.show);
    const emit = defineEmits('handleClick');
    
    watchEffect(()=>{
        show = props.show;
    })
</script>

<template>
    <div v-on:click="emit('handleClick')"  :class="`${show?'dark:border-primary border-white':'border-primary dark:border-white'} wrapper cursor-pointer flex w-[40px] h-[40px] border-2  rounded-[8px] px-[4px] items-center justify-between`">
        <span :class="`${!show?'bg-primary dark:bg-white w-[28px] -rotate-45 rounded-[6px] absolute':'w-[6px] rounded-lg dark:bg-primary bg-white'} h-[6px]`"></span>
        <span :class="`${show?'inline-block dark:bg-primary bg-white':'hidden'} w-[6px] h-[6px] rounded-lg`"></span>
        <span :class="`${!show?'bg-primary dark:bg-white w-[28px] rotate-45 rounded-[6px] absolute':'w-[6px]  rounded-lg dark:bg-primary bg-white'} h-[6px]`" ></span>
    </div>
</template>

<style scoped>
    .wrapper > span{
        transition: all .5s;
    }


</style>