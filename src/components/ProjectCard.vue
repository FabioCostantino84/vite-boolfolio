<script>
// Definizione del componente Vue
export default {
  // Nome del componente
  name: 'ProjectCard',
  // Proprietà del componente, rappresentano i dati passati da un componente padre
  props: {

    /* project: Object, */
    title: String,
    thumb: String,
    base_url: String,
    type: Object,
    technologies: Array,
    description: String,
    github: String,
    link: String,
    slug: String
  }
}
</script>

<template>
  <div class="card text-center h-100 project-card">

    <!-- Immagine del progetto -->
    <div class="project-image-container">
      <img v-if="thumb" :src="`${base_url}/storage/${thumb}`" alt="Project Thumbnail">
      <img v-else src="https://picsum.photos/200/200" alt="Default Image">
    </div>

    <!-- Titolo del progetto -->
    <h2 class="project-title">{{ title }}</h2>

    <!-- Dettagli del progetto -->
    <div class="project-details text-start">
      <!-- Tipo di progetto -->
      <div v-if="type" class="project-type">
        <strong>Type used:</strong>
        <div class="badge bg-black text-white">{{ type.type }}</div>
      </div>

      <!-- Tecnologie utilizzate -->
      <div v-if="technologies" class="project-technologies">
        <strong>Tech used:</strong>
        <div v-for="technology in technologies" :key="technology.id" class="badge bg-secondary mx-1">
          {{ technology.name_tech }}
        </div>
      </div>

      <!-- Descrizione -->
      <p v-if="description" class="project-description">{{ description }}</p>
      <p v-else class="project-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero alias commodi praesentium error explicabo
        quas quisquam sed blanditiis excepturi, consequatur officia eaque distinctio debitis nihil repellat aliquid iusto?
      </p>

      <!-- Pulsanti per GitHub e Link esterno -->
      <div class="project-buttons d-flex justify-content-around pb-2">
        <!-- Pulsante GitHub -->
        <a class="btn btn-dark" :href="github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i> GitHub
        </a>

        <!-- Pulsante Link esterno -->
        <a class="btn btn-info text-white" :href="link" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-link-45deg"></i> External Link
        </a>

        <!-- Router link per visualizzare i dettagli del progetto -->
        <router-link class="btn btn-primary text-center" :to="{ name: 'project', params: { slug: slug } }">
          View Project
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-image-container {
  overflow: hidden;
  border-radius: 10px;
}

.project-image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.project-title {
  color: #007bff;
  margin-top: 15px;
}

.project-type,
.project-technologies {
  margin-top: 10px;
}

.project-description {
  margin-top: 15px;
  color: #6c757d;
}

.project-buttons {
  margin-top: 20px;
}

.project-buttons a {
  text-decoration: none;
}

.project-buttons a i {
  margin-right: 5px;
}
</style>

