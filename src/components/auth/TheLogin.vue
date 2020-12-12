<template>
<div class="container mt-5">
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            
            <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            
            <input v-model ="login.password" type="password" class="form-control" id="exampleInputPassword1">

        </div>
        <!-- <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
         
         <!--  //prevent es para que no recargue la pagina -->
        <button @click.prevent="loginUser" type="submit" class="btn btn-primary">
            Submit</button>
    </form>
    <pre> 
        {{login}}
    </pre>
</div>
</template>


<script>
import swal from 'sweetalert';
export default {
    name:'TheLogin',
    data(){
        return{
            login:{
                email:"",
                password:""
        }

        }
        
    },
    methods:{
        async loginUser(){
            try{
            //respnse guarda todo lo que da la consulta   
            ///es la ruta donde realizamos la peticion 
            let response = await this.$http.post('/api/user/login', this.login); //a donde lo envio y que le envio asi es mi ruta en el back end
            console.log(response.data)
            //peticion con axios a esta url que la defini en main.js que se intente logiar
            // api  ruta usuario
            let token = response.data.tokenReturn;
            let user = response.data.user;
            localStorage.setItem('jwt',token); ///almaceno token
            localStorage.setItem('user',JSON.stringify(user)); //almaceno objeto user
            if (token){
                swal("Exito!", "Login correcto!", "success");
                this.$router.push('/home');
            }

            }
            catch(e){
                swal("Pailas!", "Algo salio mal!", "error");


                //console.log(err.response)
            }


        }

    }
}
</script>