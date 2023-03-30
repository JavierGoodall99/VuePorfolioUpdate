<template>
  <div id="resume">
    <section class="timelineArea">
      <h3 class="display-3 text-black text-md-center mb-5 mt-3 text-decoration-underline">Resume</h3>
      <div class="divisions">
        <div v-for="(item, index) in items" :key="index" class="division">
          <div class="bullet"></div>
          <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
            <div class="date">{{ item.date }}</div>
            <div class="content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.place }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>


  <!-- Skills -->
  <div id="skills" class="container-fluid text-black">
    <h3 class="text-left fw-bold mt-3 mb-4">Skills</h3>
    <div class="progressbar m-auto">
      <div class="skills-wrapper d-flex flex-wrap justify-content-center">
        <div v-for="skill in skills" :key="skill.name" class="skill col-6 col-md-3 mb-3">
          <div class="icon-wrapper text-center mb-2"><i :class="['fas', 'fab', skill.icon]"></i></div>
          <h3 class="name text-center">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: "January 2013 - December 2017",
          title: "Plumstead High School",
          // place: "Learner ",
          description: "Bachelor Pass Certificate",
        },
        {
          date: "February 2019 - October 2022",
          title: "University of Cape Town",
          description: "Bachelor of Social Science - Majored in Religious Studies, Industrial Psychology & Film Studies",
        },
        {
          date: "February 2019 - February 2020",
          title: "Students Health and Welfare Centre Organization",
          place: "Volunteer",
          description: "I helped primary school learners who needed help with their work",
        },
        {
          date: "January 2021 - Present",
          title: "39 Steps",
          place: "Film and Television Extra ",
          description: "Performed as a background performer in various productions, providing a realistic atmosphere and filling out scenes as required.",
        },
        {
          date: "September 2022 - Present",
          title: "Life Choices Coding Academy ",
          place: "Web Developer Intern",
          description: "Full Stack Web Development Certificate",
        },
      ],

      // Skills
      skills: [
        {
          name: 'HTML',
          // percentage: 85,
          icon: 'fa-html5 fa-5x'
        },
        {
          name: 'CSS',
          // percentage: 70,
          icon: 'fa-css3-alt fa-5x'
        },
        {
          name: 'Bootstrap',
          // percentage: 75,
          icon: 'fa-bootstrap fa-5x'
        },
        {
          name: 'Javascript',
          // percentage: 60,
          icon: 'fa-js fa-5x'
        },
        {
          name: 'Vue.js',
          // percentage: 70,
          icon: 'fa-brands fa-vuejs fa-5x'
        },
        {
          name: 'Node.JS',
          // percentage: 70, <i class="fa-solid fa-database"></i>
          icon: 'fa-brands fa-node-js fa-5x'
        },
        {
          name: 'MySQL',
          // percentage: 70, <i class="fa-solid fa-database"></i>
          icon: 'fa-database fa-5x !important'
        }
      ]
    }
  }
}
</script>

<style scoped>

@media (max-width: 576px) {
.skills-wrapper {
display: flex;
flex-direction: column;
align-items: center;
}
}
.skills-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  margin-bottom: 10px;
  /* Adjust as needed */
}

.name {
  text-align: center;
}

/* Timeline */

.timelineArea {
  padding: 100px 15px;
}

.divisions {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.divisions::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #2f363e;
  left: calc(50% - 1px);
}

.division {
  margin-bottom: 40px;
  width: 100%;
  position: relative;
}

.division:last-child {
  margin-bottom: 0;
}

.division:nth-child(odd) {
  padding-right: calc(50% + 30px);
  text-align: right;
}

.division:nth-child(even) {
  padding-left: calc(50% + 30px);
}

.bullet {
  height: 16px;
  width: 16px;
  background-color: #000000;
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
}

.date {
  font-size: 18px;
  color: #000000;
  margin-right: 250px;
}

.content {
  background-color: rgba(82, 97, 107, 0.651);
  padding: 30px;
  border-radius: 5px;
}

.content h3 {
  font-size: 20px;
  color: #000000;
  margin: 0 0 10px;
  /* text-transform: capitalize; */
  /* font-weight: 500; */
}

.content p {
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}





/* SKILLS */
ul {
  list-style-type: none;
}

.progress {
  margin: auto;
  height: 30px;
}


@media screen and (max-width:1080px) {

  /* h3 {
    font-size: medium;
  } */
  p {
    font-size: small;
    text-align: center;
  }
}

/* responsive timeline */

@media(max-width: 767px) {
  .divisions::before {
    left: 7px;
  }

  .division:nth-child(odd) {
    padding-right: 0;
    text-align: left;
  }

  .division:nth-child(odd),
  .division:nth-child(even) {
    padding-left: 37px;
  }

  .bullet {
    left: 0;
  }
}</style>