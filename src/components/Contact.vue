<template>
    <section class="container-fluid">
  <h3 id="contact" class="display-3 text-black my-5 text-decoration-underline">Contact</h3>
  <form action="https://formspree.io/f/xyyayrlk" method="post">
    <div class="row my-3 px-5">
      <div class="col-sm-12 col-lg-6 mb-4">
        <input type="text" class="form-control form-control-lg" placeholder="First name"
        aria-label="First name" name="firstName" required>
      </div>
      <div class="col-sm-12 col-lg-6 mb-4">
        <input type="text" class="form-control form-control-lg" placeholder="Last name"
        aria-label="Last name" name="lastName" required>
      </div>
      <div class="col-sm-12 col-lg-12">
        <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Email Address" aria-label="Email Address" name="EmailAddress" required>
      </div>
    </div>
    <div class="row px-5">
      <div class="col-sm-12 col-lg mb-5">
        <textarea type="text" class="form-control form-control-lg" id="formMessage" name="message" required placeholder="Message"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col mb-5">
        <input type="submit" class="btn btn-dark btn-block">
      </div>
    </div>
  </form>
  </section>  
</template>

<script>
export default {
    
}
</script>
<style scoped>
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
</style>