<template>
  <div class="row justify-content-center no-gutters">
    <div class="col-lg-6">
      <a href="https://gheptig.github.io/movie-phood/" target="_blank">
        <img
          class="img-fluid"
          src="@/assets/images/mp-screenshot.png"
          id="project-image-3"
          alt="movie-phood"
        />
      </a>
    </div>
    <div class="col-lg-6 order-lg-first">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div
            class="project-text w-100 my-auto text-center text-lg-right mr-3"
          >
            <h4 class="text-white">Movie Phood</h4>
            <p class="text-white-50">
              Created for movie and food lovers alike, this is a front-end
              application that returns a movie/food/drink combination based on a
              user's preferences and tastes.
            </p>
            <p class="text-white-50 mb-0">
              Featured Technologies: jQuery, Materialize, HTML, CSS.
            </p>
            <hr class="d-none d-lg-block mr-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/movie-phood"
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
  name: "ProjectThree",
};
</script>

<style scoped>
#project-image-3:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #f0ad4e;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
