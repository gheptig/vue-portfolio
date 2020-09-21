<template>
  <section
    class="about-section text-center"
    id="about"
    data-spy="scroll"
    data-target="#mainNav"
    data-offset="0"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="circular-portrait">
            <img class="img-fluid mx-auto" src="@/assets/images/photo.jpg" alt="headshot" />
          </div>
          <h2 class="text-white mb-4">Hello, my name is Augustus Heptig</h2>
          <p class="text-white-50">
            I am a full-stack developer located in the southern Maine
            area. I am drawn to reading and writing code because it is
            collaborative, systematic, and involves a lot of problem solving. In
            my free time I enjoy DIY projects, going to the movies, and being
            around the ocean.
          </p>
          <p class="text-white-50">
            As my experience grows, so will my GitHub profile, so please stay
            tuned. Please feel free to reach out, as any contact is welcomed.
            Thank You!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-white mt-3">Technologies</h2>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-lg-4">
          <img
            class="img-fluid mx-auto img-thumbnail"
            src="@/assets/images/html.png"
            alt="html5Logo"
          />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/css.png" alt="css3Logo" />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/js.png" alt="jsLogo" />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/react.png" alt="reactLogo" />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/vue.png" alt="vueLogo" />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/jquery.png" alt="jqueryLogo" />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/node.png" alt="nodeLogo" />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/bootstrap.png" alt="expressLogo" />
        </div>
        <div class="col-lg-4">
          <img class="img-fluid mx-auto" src="@/assets/images/mysql.png" alt="mysqlLogo" />
        </div>
      </div>

      <img
        class="img-fluid mx-auto"
        src="@/assets/images/SeekPng.com_sea-vector-png_8291017.png"
        alt="banksy-png"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-section {
  padding-top: 10rem;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    rgba(0, 0, 0, 0.9) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
.about-section p {
  margin-bottom: 1rem;
}

.circular-portrait {
  width: 14rem;
  height: 14rem;
  overflow: hidden;
  border-radius: 50%;
  margin: 3vw auto;
}
.circular-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* . {
  width: 250px;
  height: 250px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
} */
</style>
