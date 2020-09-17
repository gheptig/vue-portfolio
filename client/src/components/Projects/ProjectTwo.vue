<template>
  <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
    <div class="col-lg-6">
      <a href="https://gheptig.github.io/project-1/" target="_blank"
        ><img class="img-fluid" src="" id="project-image-mp" alt="" />
      </a>
    </div>
    <div class="col-lg-6">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left">
            <h4 class="text-white">Featured 2</h4>
            <p class="text-white-50">
              Created for movie and food lovers alike, this is a front-end
              application that returns a movie/food/drink combination based on a
              user's preferences and tastes.
            </p>
            <hr class="d-none d-lg-block ml-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/project-1"
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
#project-image-mp:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #f0ad4e;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
