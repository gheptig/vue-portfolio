<template>
  <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
    <div class="col-lg-6">
      <a href="https://gheptig.github.io/weather-dashboard/" target="_blank"
        ><img
          class="img-fluid"
          src="assets/images/wd-screenshot.PNG"
          id="project-image-wd"
          alt="
            weather"
        />
      </a>
    </div>
    <div class="col-lg-6">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left">
            <h4 class="text-white">Weather Dashboard</h4>
            <p class="text-white-50">
              This is a basic front-end U.S. city weather dashboard for
              displaying a city's current weather and 5-day forecast. Using
              Bootstrap, jQuery, OpenWeather API, and Moment.JS a user is able
              to input an American city that will then be displayed to the page
              and detail items such as, temperature, UV index , and humidity.
            </p>
            <hr class="d-none d-lg-block ml-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/weather-dashboard"
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

<style scoped></style>
