<template>
 <section class="contact" id="contact">
  <h3 class="display-3 text-black text-md-center mb-5 text-decoration-underline">Contact</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <form action="https://formspree.io/f/xpzerlyo" method="post">
                <div class="form-group">
                  <label for="firstName" class="text-black">First Name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" name="firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName" class="text-black">Last Name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" name="lastName" required>
                </div>
                <div class="form-group">
                  <label for="email" class="text-black">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" name="EmailAddress" required>
                </div>
                <div class="form-group">
                  <label for="message" class="text-black">Your Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Enter your message" name="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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





.contact {
  padding: 50px 0;
}
.card {
  border-radius: 15px;
  border: none;
  transition: all 0.3s;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
.card1 {
border-radius: 15px;
border: none;
transition: all 0.3s;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
.card-bodyContact {
padding: 50px;
}
h1 {
font-size: 48px;
color: #ffffff;
font-weight: 500;
margin-bottom: 30px;
}
h5 {
font-size: 24px;
color: #ffffff;
font-weight: 300;
margin-bottom: 15px;
}
label {
font-size: 20px;
font-weight: 500;
margin-bottom: 5px;
}
.form-control {
border-radius: 5px;
border: none;
background-color: rgba(201, 214, 223, 0.644);
padding: 10px 20px;
font-size: 18px;
font-weight: 300;
margin-bottom: 30px;
}
.form-control:focus {
box-shadow: none;
border-color:rgba(201, 214, 223, 0.644);
}
textarea.form-control {
height: 150px;
resize: none;
}
.btn {
background-color:rgba(82, 97, 107, 0.651);
border: none;
cursor: pointer;
padding: 15px 30px;
color: #000000;
font-size: 18px;
font-weight: 500;
border-radius: 5px;
transition: all 0.3s;
}
.btn:hover {
background-color: rgb(82, 97, 107);
color: black;
}
.rounded-circle {
border-radius: 50%;
}
@media (max-width: 768px) {
h1 {
font-size: 36px;
}
.card-bodyContact {
padding: 30px;
}
h5 {
font-size: 18px;
}
label {
font-size: 18px;
}
.form-control {
font-size: 16px;
}
.btn {
font-size: 16px;
padding: 12px 24px;
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