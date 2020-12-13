<template>
  <div>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5 text-dark bg-ligh">
      <div
        class="col-lg-6 col-xs-12 pb-4"
        v-for="(noticia, index) of noticias"
        :key="index"
      >
        <div class="d-flex justify-content-center">
          <div class="p-1 aling-top">
            <img :src="noticia.urlToImage" class="rounded mx-auto d-block  rounded-bottom  card-body" style="height: auto; max-width: 220px; display: inline-block;" alt="noticia poster" />
          </div>

          <div class="p-2 card-body mb-1">
            <h5 class="card-title">{{ noticia.title }}</h5>
            <hr />

            <p class="card-text">
              {{ noticia.description }}
            </p>
          </div>
        </div>

        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2 pt-2">
          <a
            :href="noticia.url"
            class="btn btn-outline-info "
            >Ver noticia
          </a >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SectionApi",
  data() {
    return {
      noticias: [],
    };
  },
  mounted() {
    axios
      .get("http://newsapi.org/v2/top-headlines?country=co&apiKey=a0f537e3e4334a0a9de230c56e61e542")
      .then((response) => {
        this.noticias = response.data.articles.slice(0, 4);
        console.log("this.noticias", this.noticias);
      });
  },
};
</script>

<style lang="less" scoped>

</style>

