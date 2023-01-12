
<template>
  <section id="testimonials">
    <h3 class="fw-bold display-3 text-black mt-0 mb-0 text-decoration-underline">Testimonials</h3>
    <div class="container-fluid" id="carousel">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000" v-for="testimonial in testimonialsActiveCarousel"
            :key="testimonial.id">
            <p class="my-5"> {{ testimonial.content }}</p>
            <img :src="testimonial.image" class="img-fluid m-auto" alt="testimony" loading="lazy">
            <h5 class="mt-3 text-black"> {{ testimonial.name }}</h5>
            <h6 class="text-black">{{ testimonial.position }}</h6>
          </div>
          <div class="carousel-item" data-bs-interval="10000" v-for="testimonial in testimonials" :key="testimonial.id">
            <p class="my-5">{{ testimonial.content }}</p>
            <img :src="testimonial.image" class="img-fluid m-auto" alt="testimony" loading="lazy">
            <h5 class="mt-3 text-black">{{ testimonial.name }}</h5>
            <h6 class="text-black">{{ testimonial.position }}</h6>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>



<script>
export default {
    data() {
        return {
            testimonialsActiveCarousel: [
                {
                  id: 1,
                  content: "Javier is a very creative, humble, and well-behaved student. He does enjoy working with his classmates and works well on his project.He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see him build more awesome projects.",
                  image: "https://i.postimg.cc/tC1QCPkY/image.jpg",
                  name: "Joel Mukanya",
                  position: "Life Choices Academy Lecturer"
                }
              ],
              testimonials:[
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
                  image: "https://i.postimg.cc/jjLWTSTp/DSC-3508.jpg",
                  name: "Reece Simon",
                  position: "Web Developer"
                },
                {
                  id: 5,
                  content: "Javier is a very determined and hardworking person. He is great at multi-tasking and can handle the pressure that a busy workplace provides. In this short amount of time he progressed quickly and he is very creative. Always open to help his peers in need.",
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
            ]
        }
    }
}
</script>


<style scoped>


.testimonial-area {
	padding: 40px 0;
}
p {
	color: black;
	width: 60%;
	margin: auto;
}
span {
    color:  rgb(201, 214, 223);
}
.img-fluid {
    width: 300px;
	height: 290px;
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
    
    .img-fluid {
        width: 150px;
        height: 150px;
        max-width: 100%;
    }
    p {
        font-size: small;
        text-align: center;
    }

    h5 {
      font-size: small;
      text-align: center;
    }

    h6 {
      font-size: small;
      text-align: center;
    }
  }

</style>