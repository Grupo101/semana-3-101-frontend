<template>
<div>
    <top-menu></top-menu>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/Banner1.jpg" class="d-block w-100 " alt="Banner1" style="object-fit:cover;" height="300">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Las noticias mas actualizadas</h5>
                    <p>Continúa y conoce cuales son las noticias más recientes del momento.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/Banner2.jpg" class="d-block w-100" alt="Banner2" style="object-fit:cover;" height="300">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Los últimos avances en salud</h5>
                    <p>Sabemos que la salud nos interesa a todos.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/Banner3.jpeg" class="d-block w-100" alt="Banner3" style="object-fit:cover;" height="300">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Las novedades tecnólogicas</h5>
                    <p>Porque la tecnología no se detiene.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>

<script>

import TopMenu from './TopMenu.vue';
export default {  
  name: "TopBanner",
  components: { TopMenu }
};
</script>

<style scoped>
</style>