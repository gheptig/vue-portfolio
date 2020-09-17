<template>
  <div class="row justify-content-center no-gutters">
    <div class="col-lg-6">
      <a href="https://murmuring-fortress-42483.herokuapp.com/" target="_blank"
        ><img
          class="img-fluid"
          src="assets/images/burg-screenshot.PNG"
          id="project-image-burg"
          alt=" burger"
        />
      </a>
    </div>
    <div class="col-lg-6 order-lg-first">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-right">
            <h4 class="text-white">Eat a Burger</h4>
            <p class="text-white-50">
              This is a simple full-stack application that demonstrates the CRUD
              operators by allowing a user to add (create), display (read),
              devour (update), and eject (delete) burgers they have eaten (or
              not eaten).
            </p>
            <hr class="d-none d-lg-block mr-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/burger"
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

<style scoped></style>
