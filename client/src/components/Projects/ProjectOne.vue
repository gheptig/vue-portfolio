<template>
  <div class="row align-items-center no-gutters mb-4 mb-lg-5">
    <div class="col-xl-8 col-lg-7">
      <a href="https://envira-bot.com/" target="_blank">
        <img
          class="img-fluid mb-3 mb-lg-0"
          id="project-image-1"
          src="@/assets/images/envira.png"
          alt="envira"
        />
      </a>
    </div>
    <div class="col-xl-4 col-lg-5">
      <div class="featured-text text-center text-lg-left ml-3">
        <h4 class="text-white">Envira</h4>
        <p
          class="text-white-50 mb-0"
        >Utilizing Amazon Web Services, this environmental application uses an AI robot (Envira) to interact with users and read information. Envira is designed to have personality, and is a fun interactive way to deliver climate change data. A user (company or individual) can also create, join, and search environmentally friendly events.</p>
        <h6 class="mt-1">
          <a
            class="text-light"
            id="repo-link"
            href="https://github.com/gheptig/Envira"
            target="_blank"
          >REPO LINK</a>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectOne",
};
</script>

<style scoped>
#project-image-1:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #ff8b3d;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
