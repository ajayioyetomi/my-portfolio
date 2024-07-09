<script setup>
    const experience_list = [
      {
        id:1,
        position:'Full-stack Engineer',
        company:'Sight-Innovation',
        time:'Jan 2019 - Present',
        responsibilities:[
          {
            title:'Frontend Development Responsibilities',
            list:[
              'Develop, test, and deploy user-facing features using modern front-end technologies',
              'Ensure the technical feasibility of UI/UX designs',
              'Optimize applications for maximum speed and scalability',
              'Collaborate with designers to translate visual designs into functional interfaces',
              'Ensure cross-browser compatibility and responsiveness of applications'
            ]
          },
          {
            title:'Backend Development Responsibilities',
            list:[
              'Design, implement, and maintain server-side logic',
              'Develop and manage databases, ensuring data consistency and security',
              'Write clean, scalable, and maintainable code',
              'Integrate front-end elements with server-side logic',
              'Implement security and data protection measures',
              'Develop APIs and ensure their seamless integration with front-end components'
            ]
          },
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
        ]
      },
      {
        id:2,
        position:'Full-Stack Developer | Freelance Developer',
        company:'Maple Grove Entertainment',
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
              'Implement security and data protection measures',
              'Develop APIs and ensure their seamless integration with front-end components',
              'Conduct code reviews and provide constructive feedback to team members',
              'Document development processes, architecture, and technical details'
            ]
          }
        ]

      },
      {
        id:3,
        company:'Sight-Innovation',
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
        ]
      }
    ]

</script>

<template>
    <section id="experience" class="mt-8 px-[20px] md:px-[3%] lg:px-[5%] py-5 bg-lightground dark:bg-darkground flex flex-col">
      <h2 class="text-center md:text-left text-light dark:text-primary m-0 text-2xl  sm:text-4xl">Experience through the years</h2>
      <div v-for="list in experience_list" :key="list.id" class="relative mt-5 before:content-[''] before:inline-block before:absolute before:top-[50px] before:-left-[25px] before:w-1 before:h-full before:bg-primary overflow-x-visible overflow-y-clip">
        <div class="relative before:content-[''] before:absolute before:-left-10 before:top-2 before:inline-block before:w-8 before:h-8 before:rounded-[50%] before:border-2 before:border-primary">
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

</style>