<template lang="">
<!-- Landing Page -->
<section>
  <div class="top-container container-fluid">
    <img class="astronaut img-fluid" src="https://i.postimg.cc/qBmNgHdx/astronaut.png" alt="astronaut">
    <h1 class="text-black">Hey, I'm Javier Goodall</h1>
    <p class="subheading text-black">Aspiring Full Stack Web Developer</p>
    <img class="spaceship img-fluid" src="https://i.postimg.cc/0yHgJZy3/startup.png" alt="spaceship">
    <img class="moon img-fluid" src="https://i.postimg.cc/PJYBwkRr/halfmoon.png" alt="moon">
    <a href="#" class="link-arrow"><img src="https://i.postimg.cc/mkLJ7tnZ/up-arrow.png" loading="lazy"
      alt="scroll button" class="arrow">
    </a>
  </div>
</section>
</template>
<script>
export default {
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
  
}
</script>
<style scoped>
  h1 {
    font-size: 50px;
    font-family:'Cinzel', serif;
    animation: fadeIn 5s; 
}
.subheading {
    animation: fadeIn 10s;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 3; }
  }
.link-arrow {
    position: fixed;
    bottom: 0.5em;
    right: 0.3em;
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
    height: 80px;
    left: 300px;
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




/* SKILLS */
ul {
    list-style-type: none;
}
.progress {
    margin: auto;
    height: 30px;
}
/* Projects */
.project {
    width: 100px;
    height: 150px;
}
  

/* Projects */
.project {
    width: 100px;
    height: 150px;
}
  /* CARD */
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

/* CAROUSEL */
.testimonial-area {
	padding: 40px 0;
}
.content p {
	color: black;
	width: 60%;
	margin: auto;
}
span {
    color:  rgb(201, 214, 223);
}
.person {
    width: 250px;
	height: 250px;
	margin-top: 50px;
    box-shadow: 0 0 20px 7px black;
}
.carousel-indicators {
	bottom: -80px;
}
.carousel-indicators [data-bs-target] {
	width: 60px;
	height: 10px;
	background-color: rgb(82, 97, 107);
}


/* Contact */
.form-control {
    border: 2px solid black;
}
.display-3 {
    padding-top: 20px;
}
input[type="submit"]:hover{
    cursor:pointer;
    background: black;
    color:white;
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

