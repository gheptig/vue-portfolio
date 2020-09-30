<template>
  <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
    <div class="col-lg-6">
      <a
        href="https://powerful-everglades-55525.herokuapp.com/"
        target="_blank"
      >
        <img
          class="img-fluid"
          src="@/assets/images/google.png"
          id="project-image-4"
          alt="google-book-search"
        />
      </a>
    </div>
    <div class="col-lg-6">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left ml-3">
            <h4 class="text-white">Google Book Search</h4>
            <p class="text-white-50">
              This is a responsive MERN stack application used to display and
              save books using the Google Books API based on a user's search.
            </p>
            <p class="text-white-50 mb-0">
              Featured Technologies: React.js, Node.js, Express.js, MongoDB,
              Mongoose, React-Bootstrap.
            </p>
            <hr class="d-none d-lg-block ml-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/google-book-search"
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
  name: "ProjectFour",
};
</script>

<style scoped>
#project-image-4:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #b1b1b9;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
