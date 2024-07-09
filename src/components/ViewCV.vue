<script setup>
    import {ref,watchEffect} from 'vue';
     const props = defineProps({show:Boolean,onHandleClose:Function})
     let show = ref(props.show);  
     const emit = defineEmits('handleClose');
     
    watchEffect(()=>{
        show.value = props.show;
        console.log('changed');
    })

</script>
<template >
    <aside v-show="show" class="bg-[rgba(249,249,250,.9)] dark:bg-[rgba(4,1,21,.9)] z-[99] flex items-center flex-col fixed top-0 left-0 w-full h-full">
        <div class="fixed p-2 top-0  w-[90%] md:w-[850px] h-[70px] bg-[#555] z-10 flex items-center justify-end">
            <span v-on:click="emit('handleClose')" class="cursor-pointer text-white rounded-2 inline-block text-3xl">&times;</span>
        </div>
        <iframe class="inner w-[90%] md:w-[850px] h-screen bg-[blue]" src="./taiwo_ajayi_cv.pdf" type="application/pdf"></iframe>
    </aside>
</template>
<style>
    .inner div{
        background-color:red;
    }
</style>