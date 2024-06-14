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
    <div v-on:click="emit('handleClick')"  class="wrapper cursor-pointer flex w-[40px] h-[40px] border-2 border-primary rounded-[8px] px-[4px] items-center justify-between">
        <span :class="`${!show?'w-[28px] -rotate-45 rounded-[6px] absolute':'w-[6px] rounded-lg'} h-[6px] bg-primary`"></span>
        <span :class="`${show?'inline-block':'hidden'} w-[6px] h-[6px] rounded-lg bg-primary`"></span>
        <span :class="`${!show?'w-[28px] rotate-45 rounded-[6px] absolute':'w-[6px]  rounded-lg'} h-[6px] bg-primary`" ></span>
    </div>
</template>

<style scoped>
    .wrapper > span{
        transition: all .5s;
    }


</style>