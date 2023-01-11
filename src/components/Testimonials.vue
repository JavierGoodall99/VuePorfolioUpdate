<template>
      <section id="testimonials" class="container-fluid">
        <div class="testimonial-area container">
          <h3 class="display-3 text-black mb-5 text-decoration-underline">Testimonials</h3>
          <div class="row col-sm-12 section-header text-center"></div>
          <div class="col-sm-12">
            <div class="carousel slide" data-bs-ride="false" id="carouselExampleIndicators">
              <div class="carousel-indicators mb-5">
                <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button">
                </button> 
                <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> 
                <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 5" data-bs-slide-to="4" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 6" data-bs-slide-to="5" data-bs-target="#carouselExampleIndicators" type="button"></button>
             </div>
             <div class="carousel-inner">
               <div v-for="testimonial in testimonials" :key="testimonial" class="carousel-item active">
                 <p>{{ testimonial.content }}</p>
                 <img :src="testimonial.image" alt="Image">
                  <!-- <img :src="testimonial.image" :alt="testimonial.name + ' image'" class="person mb-4"> -->
                  <h5>{{ testimonial.name }}</h5>
                  <h6>{{ testimonial.position }}</h6>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
           </div>
           </div>
        </div>
        </div>
    </section>
   </template>
<!-- <template>
    <section id="testimonials" class="container-fluid">
      <div class="testimonial-area container">
        <h3 class="display-3 text-black mb-5 text-decoration-underline">Testimonials</h3>
        <div class="row col-sm-12 section-header text-center"></div>
        <div class="col-sm-12">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators mb-5">
              <li v-for="(testimonial, index) in testimonials" :key="testimonial.id" :data-target="carouselExampleIndicators" :data-slide-to="index" :class="{ 'active': index === 0}"></li>
            </ol>
            <div class="carousel-inner">
              <div v-for="(testimonial, index) in testimonials" :key="testimonial.id" :class="{'carousel-item': true, 'active': index === 0}">
                <div class="content text-center">
                  <p>{{ testimonial.content }}</p>
                  <img :src="testimonial.image" :alt="testimonial.name + ' image'" class="person mb-4">
                  <h5>{{ testimonial.name }}</h5>
                  <h6>{{ testimonial.position }}</h6>
                </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section> -->

  
<!-- </template> -->

<script>
export default {
    data() {
    return {
    testimonials: [
        {
          content: "Javier is a very creative, humble, and well-behaved student. He does enjoy working with his classmates and works well on his project.He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see him build more awesome projects.",
          image: "https://i.postimg.cc/tC1QCPkY/image.jpg",
          name: "Joel Mukanya",
          position: "Life Choices Academy Lecturer"
        },
        {
          content: "Conducts himself very professionally. Javier has very strong communication skills. Displays qualities of being open and honest. He believes that when he starts anything he has to follow through with it by ensuring he finishes 100%.",
          image: "https://i.postimg.cc/QMm6mTFs/candice-2022.jpg",
          name: "Candice Amon",
          position: "Life Choices Academy Facilitator"
        },
        {
          content: "Javier`s calm demeanor creates an ambience, that is a showcase of his composed character. Having worked with him, I can certainly say that his unwavering methodology is something everyone should aspire to and practice.",
          image: "https://i.postimg.cc/0N0smH6f/DSC-3539.jpg",
          name: "Umayr Nordien",
          position: "Web Developer"
        },
        {
          content: "Javier is an exceptionally hard worker who is always making time to assist anyone that is in need. He goes the extra-mile when doing anything that has to be done, where he is also very confident in his capabilities and never fails to get the job done.",
          image: "https://i.postimg.cc/jjLWTSTp/DSC-3508.jpg",
          name: "Reece Simon",
          position: "Web Developer"
        },
        {
          content: "Javier is a very determined and hardworking person. He is great at multi-tasking and can handle the pressure that a busy workplace provides. In this short amount of time he progressed quicky and he is very creative. Always open to help is peers in need. He will be a good asset for companies and I'd recommend him to anyone.",
          image: "https://i.postimg.cc/9FRNDGp0/DSC-3588.jpg",
          name: "Maxwil Isaacs",
          position: "Web Developer"
        },
        {
          content: "Javier is a great colleague who is very focused & understanding.  He is always willing to help his team mates when needed, and is good at holding meaningful conversations. He is wise beyond his age as he is good at sharing his knowledge to his peers once you know him better.",
          image: "https://i.postimg.cc/jdMQXKvj/DSC-3592.jpg",
          name: "Athenkosi Freddie",
          position: "Web Developer"
        }
      ], 
    }
}
}
</script>
<style scoped>

/* span .carousel-control-prev-icon {

} */
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