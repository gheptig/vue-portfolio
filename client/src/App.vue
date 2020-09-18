<template>
  <div>
    <Navbar />
    <StartHeader />
    <About />
    <ProjectsWrapper />
    <ContactForm />
    <ContactInfo />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import StartHeader from "./components/StartHeader.vue";
import About from "./components/About.vue";
import ProjectsWrapper from "./components/Projects/ProjectsWrapper.vue";
import ContactForm from "./components/ContactForm.vue";
import ContactInfo from "./components/ContactInfo.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    StartHeader,
    About,
    ProjectsWrapper,
    ContactForm,
    ContactInfo,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  position: relative;
}

#appWrap {
  position: relative;
}
</style>
