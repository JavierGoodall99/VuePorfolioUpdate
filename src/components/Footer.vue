<template>
    <footer class="footer container-fluid">
      <div class="container-fluid d-flex justify-content-center">
        <a class="footer-link" target="_blank" href="https://github.com/JavierGoodall99"><i class="fa-brands fa-github"></i>GitHub</a>
        <a class="footer-link" target="_blank" href="https://www.linkedin.com/in/javier-goodall-b13644233/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
        <a class="footer-link" target="_blank" href="https://www.facebook.com/profile.php?id=100003196084155"><i class="fa-brands fa-facebook"></i>Facebook</a>
        <a class="footer-link" target="_blank" href="https://www.instagram.com/javiergoodall/"><i class="fa-brands fa-instagram"></i>Instagram</a>
      </div>
      <div class="text-center text-black p-3 fs-6">
        <p>© Copyright 2023. Made by Javier Goodall</p>
      </div>
    </footer>
</template>

<script>
export default {
    
}
</script>
<style scoped>
/* FOOTER */
.footer-link {
    color: black;
    padding: 1rem;
}



.footer a:hover {
    color: rgb(255, 255, 255);
}
.footer {
    background-color: rgb(82, 97, 107);
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
