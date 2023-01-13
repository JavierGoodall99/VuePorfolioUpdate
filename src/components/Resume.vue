<template lang="">
<!-- Resume -->
<div id="resume" class="container-fluid text-black">
  <h2 class="display-3 text-black mt-5 mb-5 text-decoration-underline">Resume</h2>
  <h3 class="fw-bold">Education</h3>
  <ul class="resume lh-lg me-4">
    <li v-for="degree in education" :key="degree.id">
      <p class="mb-4">{{ degree.startDate }} - {{ degree.endDate }}
        <br>
        {{ degree.degree }} - {{ degree.institution }}
        <br>
        {{ degree.description }}
      </p>
    </li>
  </ul>
</div>

<!-- Experience -->
<div id="skills" class="container-fluid text-black">
  <h3 class="fw-bold">Experience</h3>
  <ul class="lh-lg me-4">
    <li v-for="job in experience" :key="job.id">
      <p class="mb-4">{{ job.startDate }} - {{ job.endDate }}
      <br>
      {{ job.title }} - {{ job.company }}
      </p>
    </li>
  </ul>
</div>


<!-- Skills -->
<div id="skills" class="container-fluid text-black">
  <h3 class="text-left fw-bold mt-3 mb-4">My Skills</h3>
  <div class="progressbar m-auto">
    <div v-for="skill in skills" :key="skill.name">
      <h3>{{ skill.name }} <i :class="'fa-brands ' + skill.icon"></i></h3>
      <div class="progress my-3 w-75">
        <div :class="'progress-bar bg-black'" role="progressbar" :style="{width: skill.percentage + '%'}">{{
          skill.percentage }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        education: [
        {
            id: 1,
            degree: 'Bachelor Pass Certificate',
            institution: 'Plumstead High School',
            startDate: 'January 2013',
            endDate: 'December 2017',
            description: ''
        },
        {
            id: 2,
            degree: 'Bachelor of Arts',
            institution: 'University of Cape Town',
            startDate: 'February 2019',
            endDate: 'October 2022',
            description: 'Majored in Religious Studies, Industrial Psychology & Film Studies'
        },
        {
            id: 3,
            degree: 'Web Development Certificate',
            institution: 'Life Choices Academy',
            startDate: 'September 2022',
            endDate: 'Present',
            description: '',
        }
        ],

        // Experience
      experience: [
        {
          startDate: 'February 2019',
          endDate: 'February 2020',
          title: 'Volunteer',
          company: 'Students Health and Welfare Centre Organization (SHAWCO)',
        },
        {
          startDate: 'January 2021',
          endDate: 'Present',
          title: 'Film and Television Extra',
          company: '39 Steps',
        },
      ],

      // Skills
      skills: [
      {
          name: 'HTML',
          percentage: 85,
          icon: 'fa-html5'
        },
        {
          name: 'CSS',
          percentage: 70,
          icon: 'fa-css3-alt'
        },
        {
          name: 'Bootstrap',
          percentage: 75,
          icon: 'fa-bootstrap'
        },
        {
          name: 'Javascript',
          percentage: 60,
          icon: 'fa-js'
        },
        {
          name: 'Vue.js',
          percentage: 70,
          icon: 'fa-brands fa-vuejs'
        }
    ]
    }
}
}
</script>

<style scoped>
    /* SKILLS */
ul {
    list-style-type: none;
}
.progress {
    margin: auto;
    height: 30px;
}


@media screen  and (max-width:1080px) {
  h3 {
    font-size: medium;
  }
  p {
        font-size: small;
        text-align: center;
    }
}

</style>