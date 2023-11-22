<script>
// Importa la libreria axios per effettuare richieste HTTP
import axios from 'axios';
// Importa il componente ProjectCard
import ProjectCard from '../components/ProjectCard.vue';

export default {
  // Nome del componente Vue
  name: 'HomeView',
  // Componenti utilizzati all'interno di questo componente
  components: {
    ProjectCard,
  },
  // Dati locali del componente
  data() {
    return {
      // URL di base del server
      base_url: 'http://127.0.0.1:8000',
      // Endpoint dell'API per ottenere i progetti
      portfolio_api: '/api/projects',
      // Oggetto che conterrà i dettagli del progetto recuperato dall'API
      project: {},
    };
  },
  // Hook mounted: viene chiamato dopo che il componente è stato montato nel DOM
  mounted() {
    // Così costruiamo l'URL completo per ottenere un progetto specifico
    const url = `${this.base_url}/api/projects/${this.$route.params.slug}`;

    // Effettua una richiesta GET all'API per ottenere i dettagli del progetto
    axios.get(url)
      .then(resp => {
        // Logga i dati ricevuti dalla risposta
        console.log(resp.data.result);

        if (resp.data.success) {
          // Aggiorna il dato del progetto nel componente
          this.project = resp.data.result;
        } else {

          this.$router.push({ name: 'Not Found' });
        }
      })
      .catch(err => {
        // Gestisci eventuali errori durante la richiesta
        console.log(err.message);
      });
  }
}
</script>

<template>
  <!-- La sezione principale del template -->
  <div class="container">
    <div class=" row-cols-3 py-4">

      <!-- Utilizza il componente ProjectCard per visualizzare le informazioni del progetto -->
      <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
        :description="project.description" :github="project.github" :link="project.link"
        :technologies="project.technologies" :slug="project.slug"></ProjectCard>
    </div>
  </div>
</template>

<style lang=scss scoped></style>
