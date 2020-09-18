<template>
  <section
    class="projects-section"
    id="projects"
    data-spy="scroll"
    data-target="#mainNav"
    data-offset="100"
  >
    <div class="container">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <ProjectFive />
    </div>
  </section>
</template>

<script>
import ProjectOne from "./ProjectOne.vue";
import ProjectTwo from "./ProjectTwo.vue";
import ProjectThree from "./ProjectThree.vue";
import ProjectFour from "./ProjectFour.vue";
import ProjectFive from "./ProjectFive.vue";

export default {
  name: "ProjectsWrapper",
  components: {
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    ProjectFour,
    ProjectFive,
  },
};
</script>

<style scoped>
.projects-section {
  padding: 10rem 0;
  background-color: #000000;
}
.projects-section .featured-text {
  padding: 2rem;
}
@media (min-width: 992px) {
  .projects-section .featured-text {
    padding: 0 0 0 2rem;
    border-left: 0.5rem solid #282828;
  }
}
.projects-section .project-text {
  padding: 3rem;
  font-size: 90%;
}
@media (min-width: 992px) {
  .projects-section .project-text {
    padding: 5rem;
  }
  .projects-section .project-text hr {
    border-color: #282828;
    border-width: 0.25rem;
  }
}
</style>
