<template>
  <section class="about-section text-center" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="circular-portrait">
            <img
              class="img-fluid"
              src="@/assets/images/photo.jpg"
              alt="headshot"
            />
          </div>
          <h2 class="text-white mb-4">Hello, my name is Augustus Heptig</h2>
          <p class="text-white-50">
            I am a aspiring full-stack developer located in the southern Maine
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
      <img
        class="img-fluid"
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
</style>
