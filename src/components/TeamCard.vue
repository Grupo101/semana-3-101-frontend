<template>
    <div  class=" text-center  card bg-light " style="border-radius:20px; min-height:750px; ">
        <div class="d-flex justify-content-center p-1"> 
            <img  :src='member.image' class="rounded-circle card-img-top p-2" alt="imagen miembro">
        </div>
        <div class="card-body" style="">
            <h5 class="card-title text-dark" style="font-weight:bold">{{member.nombre}}</h5>
            <p class="card-text" ><span> Rol: </span>{{member.rol}}</p>
            <p class="card-text" ><span> Código: </span> {{member.codigo}}</p>
            <p class="card-text text-justify" >{{member.descripcion}}</p>
            
        </div>
        <div class="card-footer " > 
            <a class=" text-dark" style="font-weight:bold" href="mailto:grupo_101@misiontic.com.co">grupo_101@misiontic.com.co</a>
            
        </div>
    </div>               
              
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],

}
</script>


<style scoped>

</style>


