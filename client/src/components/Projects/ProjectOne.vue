<template>
  <div class="row align-items-center no-gutters mb-4 mb-lg-5">
    <div class="col-xl-8 col-lg-7">
      <a href="" target="_blank"
        ><img
          class="img-fluid mb-3 mb-lg-0"
          id="project-image-ge"
          src=""
          alt=""
        />
      </a>
    </div>
    <div class="col-xl-4 col-lg-5">
      <div class="featured-text text-center text-lg-left">
        <h4 class="text-white">Featured Project</h4>
        <p class="text-white-50 mb-0">
          This is a full-stack application that allows users to create a unique
          profile and build a social environment for all things video games.
          This is a great all-in-one tool that features user authentication, a
          game search/library, chart data based on game preferences, profile
          finder, and much more.
        </p>
        <h6 class="mt-1">
          <a
            class="text-light"
            id="repo-link"
            href="https://github.com/MariaKhantech/gamerevolution"
            target="_blank"
            >REPO LINK</a
          >
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
#project-image-ge:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #3500d3;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
