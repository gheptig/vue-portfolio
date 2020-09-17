<template>
  <section class="projects-section" id="projects">
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

<style scoped></style>
