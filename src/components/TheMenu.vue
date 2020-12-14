<template >
    

<div >

 




       <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark "> 
         <div class="row justify-content-end">
            <button type="button" class="btn btn-outline-success glyphicon glyphicon-user" @click.prevent="logIn"> Login</button>
            <button type="button" class="btn btn-outline-success glyphicon glyphicon-share" @click.prevent="logOut"> Salir</button >
            </div> 
            <!-- <button type="button" class="btn btn-default" @click.prevent="entrar"> Derecho</button> -->
         
        </nav>

      
</div>
    
</template>

<script>

export default {
    name: "TheMenu",

    methods: {
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");},

      logIn() {
      //localStorage.removeItem("jwt");
      //localStorage.removeItem("user");
      this.$router.push("/login");
    },
    },

    
    
}
</script>