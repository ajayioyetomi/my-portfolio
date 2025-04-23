<script setup>
    import {defineProps,ref,effect} from 'vue';
    const props = defineProps({
      theme:{
        type:Boolean,
      }
    });
    let color = ref(props.theme);

    const experience_list = [
    {
        id:1,
        position:'Front End Developer (Contract)',
        company:'Procys B.V (The Netherlands)',
        time:'August 2024 - Dec 2024',
        responsibilities:[
          {
            title:'Responsiblities',
            list:[
              'evelop user-facing features using modern front-end technologies',
              'Ensure the technical feasibility of UI/UX designs',
              'Collaborate with designers to translate visual designs into functional interfaces',
              'Ensure cross-browser compatibility and responsiveness of applications.'
            
            ]
          }
        ],
        stacks:[
          'Typescript', 'React', 'Javascript', 'Material UI', 
          'Redux', 'React Query', 'CSS', 'HTML'
        ]

    },
    {
      id:2,
      position:'Full-stack Engineer',
      company:'Sight-Innovation (Nigeria)',
      time:'Jan 2019 - June 2024',
      responsibilities:[
        // {
        //   title:'Frontend Development Responsibilities',
        //   list:[
        //     'Develop, test, and deploy user-facing features using modern front-end technologies',
        //     'Ensure the technical feasibility of UI/UX designs',
        //     'Optimize applications for maximum speed and scalability',
        //     'Collaborate with designers to translate visual designs into functional interfaces',
        //     'Ensure cross-browser compatibility and responsiveness of applications'
        //   ]
        // },
        // {
        //   title:'Backend Development Responsibilities',
        //   list:[
        //     'Design, implement, and maintain server-side logic',
        //     'Develop and manage databases, ensuring data consistency and security',
        //     'Write clean, scalable, and maintainable code',
        //     'Integrate front-end elements with server-side logic',
        //     'Implement security and data protection measures',
        //     'Develop APIs and ensure their seamless integration with front-end components'
        //   ]
        // },
        {
          title:'General Responsibilities',
          list:[
            `Participate in the full software development lifecycle, including planning, 
            development, testing, deployment, and maintenance`,
            `Troubleshoot, debug, and upgrade existing software`,
            'Collaborate with cross-functional teams to define, design, and ship new features',
            'Stay up-to-date with emerging technologies and industry trends',
            'Conduct code reviews and provide constructive feedback to team members',
            'Document development processes, architecture, and technical details'
          ]
        }
      ],
      stacks:[
        'Javascript','Typescript','Node','PHP','MySQL','MongoDb','SCSS','Tailwind','BootStrap','HTML','CSS','Cpanel','Redux','ReactJS','NextJS','Blender','Figma','Git'
      ]
    },
    {
      id:3,
      position:'Full-Stack Developer | Freelance Developer',
      company:'Maple Grove Entertainment (Nigeria)',
      time:'April 2021 - July 2021',
      responsibilities:[
        {
          title:'',
          list:[
            'Develop, test, and deploy user-facing features using modern front-end technologies',
            'Ensure the technical feasibility of UI/UX designs',
            'Ensure cross-browser compatibility and responsiveness of applications.',
            'Design, implement, and maintain server-side logic',
            'Develop and manage databases, ensuring data consistency and security',
            'Write clean, scalable, and maintainable code',
            'Integrate front-end elements with server-side logic.',
            'Troubleshoot, debug, and upgrade existing software.',
            // 'Implement security and data protection measures',
            // 'Develop APIs and ensure their seamless integration with front-end components',
            // 'Conduct code reviews and provide constructive feedback to team members',
            // 'Document development processes, architecture, and technical details'
          ]
        }
      ],
      stacks:[
        'Javascript','PHP','MySQL','SCSS','BootStrap','HTML','CSS','Cpanel','Figma','Git'
      ]

    },
    {
      id:4,
      company:'Sight-Innovation (Nigeria)',
      time:'June 2018 - July 2018',
      position:'Intern Engineer',
      responsibilities:[
        {
          title:'',
          list:[
          'Designed and created images, and interface for the company’s website',
          `Designed and developed the front-end application of the company’s website using HTML, CSS, and
          JavaScript.`,
          'Designed, constructed, and built a charge controller and pure sine-wave hybrid inverter.',
          'Designed, constructed, and built a smart traffic-controlling system prototype.',
          'Designed, constructed, and built a public address system prototype.',
          'Tested and contributed to PCB fabrication in the company.',
          'Contributed majorly to the design and construction of a smart rice cooker.',
          'Trained other interns.',
          'Designed and constructed various efficient power supplies including linear and SMPS power supply'
          ]
        }
      ],
      stacks:[
        'Javascript','PHP','MySQL','BootStrap','HTML','CSS','Blender','Figma','CorelDraw',
        'Proteus','PhotoShop','C Progamming Languate','Mikro C','Pic Microcontroller'
      ]
    }
  ]
  effect(()=>{
    color.value = props.theme
  },[props.theme])

</script>

<template>
    <section id="experience" class="relative px-[20px] md:px-[3%] lg:px-[5%] py-5 bg-lightground dark:bg-darkground flex flex-col mt-[90px] sm:mt-[150px] transition-all duration-500">
      <span class="absolute -top-[90px] sm:-top-[150px] rotate-180 left-0 line-block w-full h-[90px] sm:h-[150px] union">
        <img v-if="!color" src="../assets/images/sub.png" alt="Union" />
        <img v-if="color" src="../assets/images/sub-2.png" alt="Union" />
    </span>
      <h2 class="text-center md:text-left text-light dark:text-primary m-0 text-2xl  sm:text-4xl">Experience through the years</h2>
      <div v-for="list in experience_list" :key="list.id" class="flex flex-col sm:flex-row w-full relative mt-5 before:content-[''] before:inline-block before:absolute before:top-[50px] before:-left-[25px] before:w-1 before:h-full before:bg-primary overflow-x-visible overflow-y-clip gap-1">
        <div class="flex-1 relative before:content-[''] before:absolute before:-left-10 before:top-2 before:inline-block before:w-8 before:h-8 before:rounded-[50%] before:border-2 before:border-primary">
          <h2 class="relative text-primary">
            {{ list?.position }} <span class="text-light dark:text-dark">{{ list?.time }}</span><br/>
            <span class="text-light dark:text-dark font-bold font-uppercase">{{ list?.company }}</span>
          </h2>
          <div v-for="(responsibility,index) in list.responsibilities" :key="index" class="mt-4">
            <p class="text-primary font-[500]">{{ responsibility.title }} </p>
            <ul class="flex gap-2 flex-col">
              <li class="flex text-light dark:text-dark" v-for="(res_list,ind) in responsibility.list" :key="ind">
                <span><v-icon name="md-keyboarddoublearrowright-outlined" class="text-primary"></v-icon></span><span>{{ res_list }}</span> 
              </li>
            </ul>
          </div>
         
        </div>
        <div class="flex flex-col  w-[fit-content] sm:w-[300px] mt-4 mb-6">
          <h4 class="text-light dark:text-dark font-bold mb-3">Stacks and Technologies</h4>
          <div class="flex flex-wrap gap-2">
            <span class="w-fit h-fit cursor-pointer px-3 
              py-1 rounded-2xl text-light dark:text-dark bg-primary" 
              v-for="(eStack,ind) in list.stacks" :key="ind">
                {{ eStack }}
            </span>
          </div>
          
        </div>
      </div>
      
  </section>
    
</template>

<style scoped>
   .active-hover > div{
    display:none;
   }
   .active-hover:hover > div{
    display:block;
   }
   .union{
    display:flex;
    justify-content: center;
    align-items:center;
  }

  .union > img{
    width:100%;
    height:100%;
  }
</style>