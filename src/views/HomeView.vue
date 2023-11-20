<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'HomeView',
  components: {
    ProjectCard,
  },

  data() {
    return {
      message: 'Welcome back Vite+Vue',
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

  <main class="container">
    <div class="row row-cols-3">
      <div v-for="project in  projects.data " class="col p-3">

        <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
          :description="project.description" :github="project.github"
          :link="project.link" :technologies="project.technologies"></ProjectCard>

      </div>
    </div>
  </main>

</template>

<style lang=scss scoped></style>