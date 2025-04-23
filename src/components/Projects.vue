<script setup>
import { ref, onMounted } from "vue";
const listRef = ref();
const project_list = [
  {
    id: 1,
    title: "Techtime",
    image: "../assets/projects/tech-time.webp",
  },
  {
    id: 2,
    title: "Creon",
    image: "../assets/projects/creon.webp",
  },
  {
    id: 3,
    title: "Antishify",
    image: "../assets/projects/antishifty.webp",
  },
  {
    id: 3,
    title: "Apnachula",
    image: "../assets/projects/apnachula.webp",
  },
  {
    id: 4,
    title: "LtechNG",
    image: "../assets/projects/ltechng.webp",
  },
  {
    id: 5,
    title: "Sight Eduplus",
    image: "../assets/projects/sight-eduplus.webp",
  },
  {
    id: 6,
    title: "OBL Print",
    image: "../assets/projects/obl.webp",
  },
  {
    id: 7,
    title: "C Manager",
    image: "../assets/projects/cmanager.webp",
  },
  {
    id: 8,
    title: "Techtime",
    image: "../assets/projects/tech-time.webp",
  },
  {
    id: 9,
    title: "Creon",
    image: "../assets/projects/creon.webp",
  },
  {
    id: 10,
    title: "Antishify",
    image: "../assets/projects/antishifty.webp",
  },
  {
    id: 11,
    title: "Apnachula",
    image: "../assets/projects/apnachula.webp",
  },
];
let init = 0;
let scroll = null;
function scrollAnimation() {
  scroll = setInterval(() => {
    let children = listRef.value.children;
    let len = children.length;
    let screen = window.innerWidth;
    let iWidth = children[0].clientWidth;
    for (let i = 0; i < len; i++) {
      let list = children[i];

      init = init - .25;
      if (screen >= 650) {
        if (init <=  -2520) {
          init = 0;
        }
      } else {
        let totalInnerWidth = -1 * ((iWidth*8) + (15*8))
        if(init <= totalInnerWidth){
          init = 0
        }
      }
      list.style.translate = `${init}px`;
    }
  }, 50);
}
onMounted(() => {
  scrollAnimation();
  listRef.value.addEventListener('mouseover',()=>{
    clearInterval(scroll)
  });
  listRef.value.addEventListener('mouseout',()=>{
    scrollAnimation();
  })
});
</script>

<template>
  <section
    class="mt-8 px-[20px] md:px-[3%] lg:px-[5%] py-5 bg-lightground dark:bg-darkground flex flex-col gap-2"
  >
    <h2
      class="text-center md:text-left text-light dark:text-primary m-0 text-2xl sm:text-4xl"
    >
      Projects
    </h2>
    <p class="dark:text-dark text-light leading-[1.5]">
      Over the years, I have worked closely with UI/UX designers to design
      simple and innovative user experiences. I have collaborated with other
      developers to build reusable components, troubleshoot applications, and
      review code. I have worked with different stockholders to develop business
      logic for applications while testing and maintaining application code
      bases. I have worked on diverse projects such as fintech, edu-tech, CBT
      platforms, SaaS, official business websites, and music websites, and built
      internal tools for software development, among others.
      <br /><br />
      Some projects I was part of and side projects I built are listed
      below.
      <br/><br/>
    </p>
    <div class="w-[100%] flex">
      <ul
        class="flex gap-[15px] overflow-x-auto overflow-y-clip w-[100%] p-list"
        ref="listRef"
      >
        <li
          v-for="project in project_list"
          v-bind:key="project.id"
          class="w-[90%] sm:w-[300px] flex-shrink-0 flex flex-col gap-2"
        >
          <div class="project-list">
            <img
              :src="project.image"
              :title="project.title"
              :alt="project.title"
            />
          </div>
          <p class="dark:text-dark text-light leading-[1.5]">
            {{ project.title }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.project-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 135px;
}
.project-list > img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: contain;
  border-radius: 5px;
}

.p-list::-webkit-scrollbar {
  width: 0px;
}

@media screen and (width <= 650px) {
  .project-list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 205px;
  }
}
</style>
