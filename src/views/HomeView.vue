<template lang="">
<!-- Landing Page -->
<section>
  <div class="top-container container-fluid">
    <img class="astronaut img-fluid" src="https://i.postimg.cc/qBmNgHdx/astronaut.png" loading="lazy" alt="astronaut">
    <h1 class="text-black animate__animated animate__zoomIn">Hey, I'm Javier Goodall</h1>
    <p class="subheading text-black animate__animated animate__zoomIn">Aspiring Full Stack Web Developer</p>
    <img class="spaceship img-fluid" src="https://i.postimg.cc/0yHgJZy3/startup.png" loading="lazy" alt="spaceship">
    <img class="moon img-fluid animate__animated animate__fadeInUp" src="https://i.postimg.cc/PJYBwkRr/halfmoon.png" loading="lazy" alt="moon">
    <a href="#" class="link-arrow">
      <img :style="{ display: arrowDisplay }" @click="scrollToTop" src="https://i.postimg.cc/mkLJ7tnZ/up-arrow.png" loading="lazy" alt="scroll button" class="arrow">
    </a>
  </div>
</section>
</template>
<script>
export default {
    // The watch property will look for changes on the $route property and perform the actions when it changes.
  // For this example when the route's hash fragment is #about, it will use the 
  //  document.getElementById("about")method to find the element with the id "about" and call the scrollIntoView().
    watch: {
  $route() {
    if (this.$route.hash === "#about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.$route.hash === "#resume") {
      document.getElementById("resume").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.$route.hash === "#projects") {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.$route.hash === "#testimonials") {
      document.getElementById("testimonials").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.$route.hash === "#contact") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
},
  data() {
    return {
      arrowDisplay: 'none',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkIfShowArrow);
  },
  methods: {
    checkIfShowArrow() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.arrowDisplay = 'block';
      } else {
        this.arrowDisplay = 'none';
      }
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  
}
</script>
<style scoped>
  h1 {
    font-size: 50px;
    font-family:'Cinzel', serif;
    /* animation: fadeIn 5s;  */
}
/* .subheading {
    animation: fadeIn 10s;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 3; }
  } */
  .arrow {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
}
.arrow {
    width: 40px;
    background-color: white;
}
/* Containers */
.top-container {
    background-color: rgb(82, 97, 107);
    position: relative;
    padding-top: 230px;
}
.telescope {
    width: 100px;
    height: 150px;
    margin: 20px;
}
.skills2 {
    width: 250px;
    height: 300px;
    border-radius: 10%; 
}
/* IMAGES */
.astronaut {
    position: absolute;
    width: 90px;
    height: 80px;
    right: 300px;
    top: 50px;
    
    /* Hover */
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 2s infinite  alternate;
  }
  @-webkit-keyframes mover {
    0% { transform: translateY(0);
     }
     100% { transform: translateY(-20px); 
    }
  }
  @keyframes mover {
     0% { transform: translateY(0); 
    }
    100% { transform: translateY(-20px); 
    }
  }
.spaceship {
    position: absolute;
    width: 90px;
    height: 90px;
    left: 200px;
    bottom: 300px;

    /* Hover */
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 2s infinite  alternate;
  }
    @-webkit-keyframes mover {
    0% { transform: translateY(0);
     }
     100% { transform: translateY(-20px); 
    }
  }
  @keyframes mover {
     0% { transform: translateY(0); 
    }
    100% { transform: translateY(-20px); 
    }
  }
.profile1 {
    box-shadow: 0 0 20px 7px black;
}



/* MEDIA QUERY */

@media screen  and (max-width:1080px) {
    h1  {
        font-size: xx-large;
        padding-top: 80px;
    }
    .logo {
        width: 3rem;
        height: 3rem;
    }
    .subheading {
        font-size: small;
        padding-bottom: 80px;
    }
    p {
        font-size: small;
        text-align: center;
    }
    .paragraph {
        margin-right: 30px;
        margin-left: 50px;
    }
    .top-container {
        padding-top: 150px;
    }
    h3 {
        font-size: medium;
    }
    li {
        font-size: small;
        margin: auto;
    }
    body {
        text-align: center;
    }
    .moon {
        width: 400px;
    }
    .astronaut {
        top: 100px;
        right: 50px;
        width: 50px;
        height: 50px;
    }
    .spaceship {
        top: 150px;
        left: 50px;
        width: 50px;
        height: 50px;
    }   
    .footer i {
        font-size: small;
    }
    .footer a {
        font-size: small;
        line-height: 36px;
    }
    .person {
        width: 150px;
        height: 150px;
        max-width: 100%;
    }
    .arrow {
        width: 30px;
    }
}

</style>

