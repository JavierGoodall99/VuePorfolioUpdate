<template>
<section id="about">
  <div class="container-fluid row">
    <h3 class="display-3 text-black text-md-center mb-5 mt-3 text-decoration-underline">About</h3>
    <div data-aos="zoom-in" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" class="about col-md-6">
      <img class="profile1 my-3 img-fluid w-75 mx-4 float-md-end" src="https://i.postimg.cc/7ZBQDZDk/Profile
      Me.jpg" alt="Javier Profile">
    </div>
    <div data-aos="zoom-in" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
     class="col-md-6 fs-5 text-md-start lh-lg mt-3 text-black">
      <p>
        <b>Date Birth:</b> 02 February 1999<br>
        <b>Address:</b> Ottery, Cape Town, South Africa<br>
        <b>Language:</b> English<br>
        <b>Hobbies:</b> Hiking, Exploring new places and Building personal coding projects.<br><br>
        I'm currently enrolled at Life Choices Academy, where I'm learning technical and soft
        skills to become a full stack web developer. Coding has changed my life because it has provided me with
        problem-solving skills and a way to communicate with others on a technical level. Furthermore, I enjoy
        designing pages where I can truly provide users with pleasurable interactions and experiences. Life
        Choices Academy has helped to boost my self-esteem and kept me motivated throughout the whole journey.
        Since I started coding I noticed that I can never be bored because there is always something new to learn.
      </p>
    </div>
  </div>
</section>
</template>

<script>
export default {
}
</script>
<style scoped>

.profile1 {
    /* box-shadow: 0 0 20px 7px black; */
    /* max-width: 450px; */
    /* object-fit: ; */
    clip-path: inset(0 0 15% 0);
}

p {
  /* background-color: black;
  color: white; */
  max-width:600px;
  /* padding: 5px; */
}

@media screen  and (max-width:1080px) {
        p {
        font-size: small;
        text-align: center;
        margin-right: 30px;
        margin-left: 50px;
    }
  }
</style>