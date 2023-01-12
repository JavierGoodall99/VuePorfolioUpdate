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
    </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
    projects: [
        {
          title: 'Portfolio',
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
          title: 'Vue Portfolio',
          image: 'https://i.postimg.cc/DzhQ7N49/astronaut-1.gif',
          gitHub: 'https://github.com/JavierGoodall99/VuePortfolio',
          netlify: ''
        },
        {
          title: 'Flip Card',
        image: 'https://i.postimg.cc/C53r96gn/moon.gif',
        gitHub: 'https://github.com/JavierGoodall99/Flip-Card.git',
        netlify: 'https://flipcard99.netlify.app/'
      },
      {
        title: 'Grid',
        image: 'https://i.postimg.cc/fbj2pL3Z/rocket-launch.gif',
        gitHub: 'https://github.com/JavierGoodall99/GRIDHome.git',
        netlify: ''
      }
    ], 
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
  }

</style>