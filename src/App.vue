<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {

      base_url: 'http://127.0.0.1:8000',
      projects_api: '/api/projects',

      projects: [],

    }
  },
  mounted() {

    axios

      .get(this.base_url + this.projects_api)
      .then(response => {
        console.log(response);
        this.projects = response.data.result;
      })

      .catch(err => {
        console.error(err);
      });

  }
}

</script>

<template>
  <div id="app">


    <div class="container d-flex flex-wrap gap-2 justify-content-center mt-5">
      <div class="card mt-3 col-md-3 p-2 shadow" v-for="project in projects.data">
        <h2>{{ project.title }}</h2>

          <img :src="base_url + '/storage/' + project.thumb" class="img-top img-fluid" alt="">
          
        <p>{{ project.description }}</p>
        <small>{{ project.type }}</small>
        <small>{{ project.technology}}</small>
      </div>
    </div>

    <div class="container">
    </div>

  </div>
</template>

<style lang=scss scoped></style>