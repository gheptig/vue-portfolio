<template>
  <section class="contact-section bg-black">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa fa-address-card fa-2x text-dark mb-2"></i>
              <h4 class="m-0">
                <a
                  class="text-decoration-none text-dark"
                  id="resume"
                  href="assets/pdf/heptig_augustus_resume.pdf"
                  target="_blank"
                  >RESUME</a
                >
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"></div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope fa-2x text-dark mb-2"></i>
              <h4 class="m-0">
                <a class="text-decoration-none text-dark" id="email" href="#"
                  >EMAIL</a
                >
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"><a href="#!"></a></div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt fa-2x text-dark mb-2"></i>
              <h4 class="m-0">
                <a class="text-decoration-none text-dark" id="phone" href="#"
                  >PHONE</a
                >
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="social d-flex justify-content-center">
        <a class="mx-2" href="https://github.com/gheptig" target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a
          class="mx-2"
          href="https://www.linkedin.com/in/augustus-h/"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style scoped></style>
