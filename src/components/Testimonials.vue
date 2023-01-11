<template lang="">
    <!-- Testimonials Carousel -->

  <section id="testimonials" class="container-fluid">
    <div class="testimonial-area container">
      <h3 class="display-3 text-black mb-5 text-decoration-underline">Testimonials</h3>
      <div class="row col-sm-12 section-header text-center"></div>
      <div class="col-sm-12">
        <div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
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
          
        </div>
      </div>
      <!-- <a class="carousel-control-prev" role="button" @click="prevSlide" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" role="button" @click="nextSlide" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> -->
    </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
    testimonials: [
        {
          id: 1,
          content: "Javier is a very creative, humble, and well-behaved student. He does enjoy working with his classmates and works well on his project.He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see him build more awesome projects.",
          image: "https://i.postimg.cc/tC1QCPkY/image.jpg",
          name: "Joel Mukanya",
          position: "Life Choices Academy Lecturer"
        },
        {
          id: 2,
          content: "Conducts himself very professionally. Javier has very strong communication skills. Displays qualities of being open and honest. He believes that when he starts anything he has to follow through with it by ensuring he finishes 100%.",
          image: "https://i.postimg.cc/QMm6mTFs/candice-2022.jpg",
          name: "Candice Amon",
          position: "Life Choices Academy Facilitator"
        },
        {
          id: 3,
          content: "Javier`s calm demeanor creates an ambience, that is a showcase of his composed character. Having worked with him, I can certainly say that his unwavering methodology is something everyone should aspire to and practice.",
          image: "https://i.postimg.cc/0N0smH6f/DSC-3539.jpg",
          name: "Umayr Nordien",
          position: "Web Developer"
        },
        {
          id: 4,
          content: "Javier is an exceptionally hard worker who is always making time to assist anyone that is in need. He goes the extra-mile when doing anything that has to be done, where he is also very confident in his capabilities and never fails to get the job done.",
          image: "https://i.postimg.cc/DzhQ7N49/astronaut-1.gif",
          name: "John Doe",
          position: "Team Lead"
        },
        {
          id: 5,
          content: "Javier is a dedicated and detail-oriented individual. He is a great problem-solver and always finds a way to meet the needs of the project and the team. He is always willing to go the extra mile to ensure success.",
          image: "https://i.postimg.cc/66gdyFx7/calculator.gif",
          name: "Jane Doe",
          position: "Product Manager"
        },
        {
          id: 6,
          content: "Javier is an outstanding team player, who is always willing to lend a helping hand. He is proactive, dedicated and always comes up with creative solutions. He is a valuable asset to any team.",
          image: "https://i.postimg.cc/C53r96gn/moon.gif",
          name: "Jessica Smith",
          position: "Graphic Designer"
        }
      ], 
    }
}
}
</script>
<style scoped>
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


</style>