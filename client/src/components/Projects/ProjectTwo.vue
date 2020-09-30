<template>
  <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
    <div class="col-lg-6">
      <a
        href="https://fatidique-moliere-24500.herokuapp.com/index.html"
        target="_blank"
      >
        <img
          class="img-fluid"
          src="@/assets/images/ge-screen-shot.png"
          id="project-image-2"
          alt="gamerevolution"
        />
      </a>
    </div>
    <div class="col-lg-6">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left ml-3">
            <h4 class="text-white">GamerEvolution</h4>
            <p class="text-white-50 mb-1">
              This is a full-stack application that allows users to create a
              unique profile and build a social environment for all things video
              games. This is a great all-in-one tool that features user
              authentication, a game search/library, chart data based on game
              preferences, profile finder, and much more.
            </p>
            <p class="text-white-50 mb-0">
              Featured Technologies: jQuery, Node.js, MySQL, Sequelize,
              Express.js, Passport.js, Bootstrap.
            </p>
            <hr class="d-none d-lg-block ml-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/gamerevolution"
                target="_blank"
                >REPO LINK</a
              >
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTwo",
};
</script>

<style scoped>
#project-image-2:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #3500d3;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
