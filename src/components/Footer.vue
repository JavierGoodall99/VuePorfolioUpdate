<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- <div class="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod nisi, in posuere libero pulvinar eu.</p>
          </div> -->
          <div class="col-md-6">
            <h4><i class="fa-solid fa-phone" style="color: black;"></i>Contact Me</h4>
            <p>Email: javiergoodall@outlook.com <br> Phone: 084 290-9844</p>
          </div>
          <div class="col-md-6">
            <h4>Follow Me</h4>
            <div class="container-fluid d-flex justify-content-center">
          <a class="footer-link" target="_blank" href="https://github.com/JavierGoodall99/VolunteerVentures"><i class="fa-brands fa-github"></i>GitHub</a>
          <a class="footer-link" target="_blank" href="https://www.linkedin.com/in/javier-goodall-b13644233/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
          <a class="footer-link" target="_blank" href="https://www.facebook.com/profile.php?id=100003196084155"><i class="fa-brands fa-facebook"></i>Facebook</a>
          <a class="footer-link" target="_blank" href="https://www.instagram.com/javiergoodall/"><i class="fa-brands fa-instagram"></i>Instagram</a>
        </div>
          </div>
        </div>
        <hr>
        <p class="text-center">Copyright © 2023 Made by Javier Goodall</p>
      </div>
    </footer>
  </template>
  
  <style>
  .footer {
    background-color: rgb(82, 97, 107);
    color: black;
    padding: 50px 0;
      font-size: 17px;
      letter-spacing: 0.1rem;
      word-spacing: 0.2rem;
      line-height: 40px;
  }
  
  .footer h4 {
    color: black;
  }
  
  .footer p {
    color: black;
  }
  
  .social-icons li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .social-icons li a i {
    font-size: 20px;
    color: white;
  }
  
  .social-icons li a i:hover {
    color: white;
  }
  
  hr {
    border-top: 1px solid white;
    border-bottom: none;
  }
  
  .footer-link {
      color: black;
      padding: 1rem;
  }
  
  
  
  .footer a:hover {
      color: white;
  }
  
  i {
      margin: 0.3em;
  }
  
  
  /* Media Query */
  @media screen  and (max-width:1080px) {
      .footer i {
      font-size: small;
  }
  .footer a {
      font-size: small;
      line-height: 36px;
  }
  }
  </style>