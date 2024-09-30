<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import {Header,Footer,Experience} from './components';
import { stacks,mission_statement } from './constants';
const slideRef = ref(null);
const name = ref('');
const email = ref('');
const message = ref('');
let start = null;
let innerStart = null;
let interval;
let move = 0;
let count = 1;
const handleSlide = () =>{
  const ul = slideRef.value;
  interval = 10;
  start = setInterval(()=>{
    ul.style.transform = `translateX(-${move}%)`;
    if(move%100 === 0 && move !== 0){
      clearInterval(start);
      if(count == ul.children.length -2 ){
        ul.style.transform = `translateX(0)`;
        move = 0;
        count = 0;
      }
      interval = 4000;
      innerStart = setTimeout(()=>{
        handleSlide();
        clearTimeout(innerStart);
      },interval)
      count+= 1;
    }
    move+= 1;
  },interval)
}
const handleSubmitMessage=(event)=>{
  event.preventDefault();
  console.log(name.value,email.value,message.value,'data')
  name.value = '';
  email.value = ''
  message.value = '';
  
}
onMounted(()=>{
  window.addEventListener('load',handleSlide);
})

onUnmounted(()=>{
  window.removeEventListener('load',handleSlide);
})

</script>

<template>

  <Header />
  <main>
    <section class="flex flex-col md:flex-row px-[20px] md:px-[3%] lg:px-[5%] md:h-screen h-[fit-content] items-center gap-[5%] overflow-clip bg-lightground dark:bg-darkground">
      <div class="shrink-0 mt-[100px] md:mt-0 min-w-[350px] md:w-[45%] w-[90%] flex justify-center items-center">
        <div class="wrapper spin relative md:h-[40vw] md:w-[40vw] xs:w-[95vw] xs:h-[95vw] sm:h-[70vw] sm:w-[70vw] flex justify-center items-center">
          <span class="rain top-0">
            <img src="./assets/images/javascript.webp" class="spin2" title="javascript" alt="javascript" />
          </span>
          <span class="rain2 right-0">
            <img src="./assets/images/graphql.png" class="spin2" title="graphql" alt="graghql"/>
          </span>
          <span class="rain3 top-[calc(50%-120px)] left-[20px]">
            <img src="./assets/images/tailwind.webp" class="spin2" title="tailwind" alt="tailwind"/>
          </span>
          <span class="rain4  left-[15vw] top-[15px] sm:top-[70px] md:top-[30px] md:left-[7vw]">
            <img src="./assets/images/git.webp" class="spin2" title="git" alt="git"/>
          </span>   
          <span class="rain4 right-[15vw] top-[15px] sm:top-[70px] md:right-[7vw] md:top-[30px]">
            <img src="./assets/images/node.webp" class="spin2" title="node" alt="node" />
          </span>  
          <span class="rain3 top-[calc(50%-120px)] right-[20px]">
            <img src="./assets/images/react.webp" class="spin2" title="react" alt="react"/>
          </span>  
          <div class="flex justify-center w-[350px] h-[350px] items-center spin2 relative md:top-[-50px] md:right-[-30px] top-0 right-0">
            <img class="w-[200px] h-[200px] sm:h-[300px] sm:w-[300px] md:w-[250] md:h[250px] lg:w-[350px] lg:h-[350px] " src="./assets//images/programmer.webp" alt="programmer"/>
          </div>
          <span class="rain2 bottom-[calc(50%-120px)] left-[20px]">
            <img src="./assets/images/mysql.webp" class="spin2" title="mysql" alt="mysql"/>
          </span>
          <span class="rain left-[15vw] bottom-[15px] sm:bottom-[70px]  md:bottom-[30px] md:left-[7vw]">
            <img src="./assets/images/mongodb.png" class="spin2" title="mongodb" alt="mongodb"/>
          </span>
          <span class="rain bottom-[calc(50%-120px)] right-[20px]">
            <img src="./assets/images/vue.webp" class="spin2" title="vue" alt="vue"/>
          </span>
          <span class="rain2 right-[15vw] bottom-[15px] sm:bottom-[70px]  md:right-[7vw] md:bottom-[30px]">
              <img src="./assets/images/typescript.webp" class="spin2" title="typescript" alt="typescript" />
          </span>
          <span class="rain3 left-0">
            <img src="./assets/images/python.png" class="spin2" title="python" alt="python"/>
          </span>
          <span class="rain4 bottom-0">
            <img src="./assets/images/php.webp" class="spin2" title="php" alt="php"/>
          </span>      
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-5  mt-8 md:mt-0">
        <h1 class="font-extrabold m-0 leading-1 text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-6xl dark:text-primary text-light-primary">
          Full-Stack Engineer<br/>
          <span class="dark:text-dark text-primary relative -top-2 md:-top-3 lg:-top-5 font-medium text-md xs:text-lg sm:text-3xl md:text-2xl lg:text-4xl">Front-end Heavy</span>
        </h1>
        <p class="dark:text-dark text-light font-light text-lg sm:text-2xl md:text-3xl">
          A seasoned and resourceful software engineer with 6 years of experience in software development, providing fast, efficient, and innovative software solutions. <br/><br/>
          Over the years, I have worked both as a Frontend Developer, and a Full-stack Developer.
        </p>
        <p class="dark:text-white text-primary mt-3 font-bold text-2xl">Introduction</p>
      </div>

    </section>
    <section class="mt-8 flex flex-col md:flex-row items-start px-[20px] md:px-[3%] lg:px-[5%] py-6 min-h-[100vh] h-[fit-content] bg-lightground dark:bg-darkground">
      <div id="about" class="w-full md:w-[calc(100% - 300px)] h-full flex flex-col gap-8 justify-center flex-wrap ">
        <h2 class="text-center md:text-left text-light dark:text-primary m-0 text-2xl  sm:text-4xl">Tell us about yourself?</h2>
        <video controls autoplay loop muted poster="./assets/images/poster.jpg" class="border-4 border-primary rounded-2xl h-[45vh] sm:h-[60vh] md:h-[75vh] aspect-[4/2] object-cover object-right bg-lightground dark:bg-darkground">
          <source src="./assets/videos/Interview.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p class="text-center md:text-left dark:text-white text-primary m-0 font-bold text-2xl">Question and Answer</p>
      </div>
      <div class="w-full md:w-[300px] mt-5 md:mt-0 flex-shrink-0 overflow-clip flex flex-col gap-8 border-t-2 boder-t-light dark:border-t-[#09011E] md:border-t-0">
        <h3 class="text-center text-light dark:text-primary m-0 text-2xl  sm:text-4xl px-5 pt-5 md:pt-0">Stacks</h3>
        <ul ref="slideRef" class="flex w-full  h-[45vh] sm:h-[60vh] md:h-[75vh]">
          <li class="h-full w-full py-5 px-5 flex-shrink-0  flex flex-col gap-[20px] items-center justify-center" v-for="stack in stacks" :key="stack.name">
            <img :src="`/src/assets/images/${stack.icon}`" class="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" :alt="stack.name"  style="object-fit: contain; object-position: center;"/>
            <p class="m-0 text-light dark:text-dark text-2xl  sm:text-4xl">{{ stack.name }}</p>
            <p class="m-0 text-light dark:text-dark text-2xl  sm:text-4xl" >{{ stack.years }} Years</p>
            <p class="m-0 text-light dark:text-dark text-2xl  sm:text-4xl">{{ stack.level }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="mt-8 px-[20px] md:px-[3%] lg:px-[5%] py-5 bg-lightground dark:bg-darkground flex flex-col gap-4">
      <h2 class="text-center md:text-left text-light dark:text-primary m-0 text-2xl  sm:text-4xl">
        Values, Culture and Career Goals
      </h2>
      <div class="flex gap-8 flex-col-reverse md:flex-row"> 
        <ul class="flex flex-1 flex-col gap-4 mt-5">
          <li v-for="(statement,index) in mission_statement" :key="index" class=" dark:text-dark text-light font-light text-lg sm:text-2xl md:text-lg">
            <h3 class="font-medium uppercase">{{ statement.name }}</h3>
            <p>{{ statement.label }}</p>
          </li>
        </ul>
        <div class="w-full  md:w-[450px] flex justify-center items-center">
          <img class="w-[90%] sm:w-[300px] md:w-[450px]" src="./assets/images/culture.png" alt="culture" />
        </div>
      </div>
    </section >
    <Experience />  
    <!-- <form @submit="handleSubmitMessage" id="message" class="mt-8 px-[20px] md:px-[3%] lg:px-[5%] py-5 flex flex-col gap-6
    bg-lightground dark:bg-darkground ">
      <h2 class="text-center md:text-left text-light dark:text-primary m-0 text-2xl  sm:text-4xl">Message</h2>
      <div class="w-full flex flex-col sm:flex-row gap-6">
        <label class="w-full flex flex-col gap-2">
          <span class="text-light dark:text-dark">Name</span>
          <input v-model="name" type="text" required class="text-light dark:text-dark flex-1 p-2 bg-transparent rounded-md border-2 border-primary" placeholder="Name" />
        </label>
        <label  class="w-full  flex flex-col gap-2">
          <span class="text-light dark:text-dark">Email</span>
          <input v-model="email" required type="email" class="text-light dark:text-dark flex-1 p-2 bg-transparent rounded-md border-2 border-primary" placeholder="Email" />
        </label>
      </div>
      <label class="flex flex-col gap-2">
        <span class="text-light dark:text-dark">Message</span>
        <textarea v-model="message" required rows="6" class="text-light dark:text-dark resize-y flex-1 p-2 bg-transparent rounded-lg border-2 border-primary" placeholder="Enter Message here"></textarea>
      </label>
      <button class="bg-primary text-dark rounded-md py-3">Send Message</button>
    </form> -->
  </main>
  <Footer />

</template>

<style scoped>
  main > section{
    padding-block:70px;
  }


  .wrapper > span{
    position: absolute;
  }
  .wrapper > span > img{
    width:50px;
    height: 50px;
    cursor: pointer;
    transition: all 2s;
  }
  @media screen and (width<=767px) {
    main > section{
      padding-block:70px;
    }
    .wrapper > span > img{
      width:35px;
      height:35px;
    }    
  }
  .wrapper > span:hover{
    scale:1.2
  }
  .spin{
    animation:spin 15s 5s linear forwards infinite;
  }
  .spin2{
    animation:spin 15s 5s linear forwards reverse infinite;
  }
  .rain{
    animation:rain 1s linear;
  }
  .rain2{
    animation:rain 2s linear;
  }
  .rain3{
    animation:rain 3s linear;
  }
  .rain4{
    animation:rain 4s linear;
  }
 
  @keyframes rain {
    from{
      opacity:0;
      transform:translateY(-100vh);
    }
    to{
      opacity:1;
      transform: translateX(0);
    }
  }

  @keyframes spin {
    from{
      rotate: 0deg;
    }
    to{
      rotate:360deg
    }
  }


</style>
