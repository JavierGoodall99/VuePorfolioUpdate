<template>
<section id="about">
  <div class="container-fluid row">
    <h3 class="display-3 text-black text-md-center mb-5 mt-3 text-decoration-underline">About</h3>
    <div class="about col-md-6">
      <img class="profile1 my-3 img-fluid mx-4 w-75 float-md-end" src="https://i.postimg.cc/7ZBQDZDk/Profile
      Me.jpg" alt="Javier Profile">
    </div>
    <div class="col-md-6 text-md-start lh-lg mt-5 text-black">
      <p class="paragraph">I'm currently enrolled at Life Choices Academy, where I'm learning technical and soft
        skills to become a full stack developer. Coding has changed my life because it has provided me with
        problem-solving skills and a way to communicate with others on a technical level. Furthermore, I enjoy
        designing pages where I can truly provide users with pleasurable interactions and experiences. Life
        Choices Academy has helped to boost my self-esteem and kept me motivated throughout the whole journey.
        Since I started coding I noticed that I can never be bored because there is always something new to learn
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
    box-shadow: 0 0 20px 7px black;
}

@media screen  and (max-width:1080px) {
        p {
        font-size: small;
        text-align: center;
    }
    .paragraph {
        margin-right: 30px;
        margin-left: 50px;
    }
  }
</style>