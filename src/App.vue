<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {

      base_url: 'http://127.0.0.1:8000/',
      projects_api: 'api/projects',

      projects: [],

    }
  },
  mounted() {

    axios

      .get(this.projects_api)
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

    <div class="container">
      <div class="row">
        <div class="col">
          <div v-for="project in projects.data" class="card text-center">
            <h2 >{{ project.title }}</h2>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang=scss scoped></style>