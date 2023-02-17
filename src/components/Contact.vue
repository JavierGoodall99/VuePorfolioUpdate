<template>


<section class="container-fluid">
  <h3 id="contact" class="display-3 text-black mb-5 text-decoration-underline">
    Contact
  </h3>
  <form action="https://formspree.io/f/xyyayrlk" method="post">
    <div class="row my-3 px-5">
      <div class="col-sm-12 col-lg-6 mb-4">
        <input type="text" class="form-control form-control-lg" placeholder="First name"
        aria-label="First name" name="firstName" required>
      </div>
      <div class="col-sm-12 col-lg-6">
        <input type="text" class="form-control form-control-lg" placeholder="Last name"
        aria-label="Last name" name="lastName" required>
      </div>
      <div class="col-sm-12 col-lg-12 mb-2">
        <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Email Address" aria-label="Email Address" name="EmailAddress" required>
      </div>
    </div>
    <div class="row px-5">
      <div class="col-sm-12 col-lg mb-5">
        <textarea type="text" class="form-control form-control-lg" id="formMessage" name="message" required placeholder="Leave us a message"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col mb-5">
        <input type="submit" class="btn btn-primary btn-block" value="Send Message">
      </div>
    </div>
  </form>
</section>













    <!-- <section class="container-fluid">
  <h3 id="contact" class="display-3 text-black my-5 text-decoration-underline">Contact</h3>
  <form action="https://formspree.io/f/xyyayrlk" method="post">
    <div class="row my-3 px-5">
      <div class="col-sm-12 col-lg-6 mb-4">
        <input type="text" class="form-control form-control-lg" placeholder="First name"
        aria-label="First name" name="firstName" required>
      </div>
      <div class="col-sm-12 col-lg-6">
        <input type="text" class="form-control form-control-lg" placeholder="Last name"
        aria-label="Last name" name="lastName" required>
      </div>
      <div class="col-sm-12 col-lg-12 mb-2">
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
  </section>   -->
</template>

<script>
export default {
    
}
</script>
<style scoped>



input[type="text"],
input[type="email"],
textarea {
  background-color: rgb(242, 242, 242);
  border: none;
  border-radius: 10px;
  font-size: 18px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  outline: none;
}

input[type="submit"] {
  background-color: rgb(82, 97, 107);
  border: none;
  border-radius: 50px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 20px 40px;
  transition: all 0.2s ease-in-out;
}

input[type="submit"]:hover {
  cursor: pointer;
  background: black;
  color: white;
}

@media only screen and (max-width: 768px) {
  /* Adjust input and button font sizes for smaller screens */
  input[type="text"],
  input[type="email"],
  textarea,
  input[type="submit"] {
    font-size: 16px;
    margin-bottom: 25px;
  }
  
  /* Adjust input and button padding for smaller screens */
  input[type="text"],
  input[type="email"],
  textarea {
    padding: 15px;
  }
  
  input[type="submit"] {
    padding: 15px 15px;
    font-size: 16px;
  }
  
  /* Adjust input and button border radius for smaller screens */
  input[type="text"],
  input[type="email"],
  textarea,
  input[type="submit"] {
    border-radius: 5px;
  }
}





    /* .form-control {
    border: 2px solid black;
}
.display-3 {
    padding-top: 20px;
}
input[type="submit"]:hover{
    cursor:pointer;
    background: black;
    color:white;
    } */
</style>