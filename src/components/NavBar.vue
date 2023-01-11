<template>
    <header>

     <nav class="navbar navbar-expand-lg">
       <div class="container-fluid">
         <img class="logo" src="https://i.postimg.cc/zDTGjMP9/1000-F-405163242-2ib-ZX7x-B3-SDc-Djq2c-HTcx-HFQ3hr-FTh-NL.jpg" alt="logo" loading="lazy">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
             <li class="nav-item">
               <router-link :to="{path: '/', hash: '#about'}">About</router-link>
             </li>
             <li class="nav-item">
               <router-link :to="{path: '/', hash: '#resume'}">Resume</router-link>
             </li>
             <li class="nav-item">
               <router-link :to="{path: '/', hash: '#projects'}">Projects</router-link>
             </li>
             <li class="nav-item">
               <router-link :to="{path: '/', hash: '#testimonials'}">Testimonials</router-link>
             </li>
             <li class="nav-item">
               <router-link :to="{path: '/', hash: '#contact'}">Contact</router-link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </header>
</template>

<script>

export default {

}

</script>

<style scoped>
/* HEADER */
.navbar {
   background-color:  rgb(201, 214, 223);
}

nav a.router-link-exact-active {
 color: black;
 padding: 15px;
 text-decoration: none;
 font-size: 25px;
 font-family:'Oswald', sans-serif;
}

nav a.router-link-exact-active:hover {
   border-bottom: 2px solid black;
   padding-bottom: 5px;  
   color: rgb(47, 47, 47);
}

header {
   background-color: rgb(82, 97, 107); 
}
.logo {
   width: 4rem;
   height: 4rem;
   right: 57em;
}
h1 {
   font-size: 50px;
   font-family:'Cinzel', serif;
   animation: fadeIn 5s; 
}
.subheading {
   animation: fadeIn 10s;
}
@keyframes fadeIn {
   0% { opacity: 0; }
   100% { opacity: 3; }
 }
.link-arrow {
   position: fixed;
   bottom: 0.5em;
   right: 0.3em;
}
.arrow {
   width: 40px;
   background-color: white;
}
   
</style>