<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbars</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <button
              class="btn btn-outline-success"
              type="button"
              @click.prevent="logOut"
            >
              Salir
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container">  
    <!-- //mostrar los datos en pantalla -->
      <p>
        {{ user.username }}
      </p>
      <p>
        {{ user.email }}
      </p>
     
    </div>
    <div>
      <a href="https://www.eltiempo.com/">Download source file</a>
    </div>


  </div>

</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {  ///ccctraer datos del usuario donde se requiera
      let user = localStorage.getItem('user');
      let token = localStorage.getItem('jwt');
       if(token){
         this.user = JSON.parse(user);
       } 

    },
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>