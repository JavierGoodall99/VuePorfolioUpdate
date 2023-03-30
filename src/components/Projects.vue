<template>
  <section id="projects" class="container-fluid">
    <div class="container">
      <h3 class="display-3 text-black mt-5 mb-5 text-decoration-underline">Projects</h3>
    </div>
    <div class="row px-5">
      <div class="col-md-4" v-for="project in projects" :key="project.name">
        <div class="card text-center w-75 m-auto mb-5">
          <img :src="project.image" :alt="project" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <a :href="project.gitHub" target="_blank" class="p-1 m-auto">GitHub</a>
            <a :href="project.netlify" target="_blank" class="p-1 m-auto">Netlify</a>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-for="projectss in projectVue" :key="projectss.name">
        <div class="card text-center w-75 m-auto mb-5">
          <img :src="projectss.image" :alt="projectss" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ projectss.title }}</h5>
            <a :href="projectss.gitHub" target="_blank" class="p-1 m-auto">GitHub</a>
            <a :href="projectss.firebase" target="_blank" class="p-1 m-auto">Firebase</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Bootstrap Portfolio',
          image: 'https://i.postimg.cc/NjJGvgWh/astronaut.gif',
          gitHub: 'https://github.com/JavierGoodall99/NEWPORTFOLIO.git',
          netlify: 'https://javier-portfolio.netlify.app'
        },
        {
          title: 'Ecommerce Store',
          image: 'https://i.postimg.cc/Fzc9KY0H/sales.gif',
          gitHub: 'https://github.com/JavierGoodall99/JSProjectNew',
          netlify: 'https://artreimagined.netlify.app/'
        },
        {
          title: 'Calculator',
          image: 'https://i.postimg.cc/66gdyFx7/calculator.gif',
          gitHub: 'https://github.com/JavierGoodall99/CalculatorNew.git',
          netlify: 'https://javiercalculator2netlify.app/'
        },
        {
          title: 'To-do List',
          image: 'https://i.postimg.cc/448zK0sh/checklist.gif',
          gitHub: 'https://github.com/JavierGoodall99/Todo-List',
          netlify: 'https://colorfultodolist.netlify.app/'
        }
      ],
      projectVue: [
        {
          title: 'Vue Portfolio',
          image: 'https://i.postimg.cc/DzhQ7N49/astronaut-1.gif',
          gitHub: 'https://github.com/JavierGoodall99/VuePorfolioUpdate',
          firebase: 'https://vueporfolio-2023.web.app/'
        },
        {
          title: 'Flight Booking',
          image: 'https://i.postimg.cc/Cx1jV2BW/travel.gif',
          gitHub: 'https://github.com/JavierGoodall99/VolunteerVentures',
          firebase: 'https://volunteerventures2023.web.app/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  padding: 25px 0;
}

title p {
  font-size: 18px;
}

.card-body {
  box-shadow: 0 0 20px 7px black;
}

.card {
  margin: 20px 10px;
}

.card-body {
  color: black;
  font-size: 15px;
  font-weight: 600;
}

.card-body a {
  color: rgb(36, 147, 166);
}

.card-body a:hover {
  color: black;
  text-decoration: none;
}

img {
  object-fit: cover;
}</style>