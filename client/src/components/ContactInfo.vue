<template>
  <section class="contact-section bg-black">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <a
                class="text-decoration-none text-dark"
                href="./heptig_augustus_resume.pdf"
                target="_blank"
              >
                <i
                  class="fas fa fa-address-card fa-2x text-dark mb-2"
                  id="resume"
                ></i
              ></a>
              <h4 class="m-0">
                RESUME
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"></div>
            </div>
            <b-tooltip target="resume" triggers="hover">
              Link to Resume
            </b-tooltip>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope fa-2x text-dark mb-2" id="email"></i>
              <h4 class="m-0">
                <a class="text-decoration-none text-dark" href="#">EMAIL</a>
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"><a href="#!"></a></div>
            </div>
            <b-tooltip target="email" triggers="hover">
              gusheptig@gmail.com
            </b-tooltip>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt fa-2x text-dark mb-2" id="phone"></i>
              <h4 class="m-0">
                <a class="text-decoration-none text-dark" href="#">PHONE</a>
              </h4>
              <hr class="my-4" />
              <div class="small text-black-50"></div>
            </div>
            <b-tooltip target="phone" triggers="hover">
              207-206-5175
            </b-tooltip>
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

<style scoped>
.contact-section {
  padding-top: 5rem;
  background-color: #000000;
}
.contact-section .card {
  border: 0;
  border-bottom: 0.25rem solid #282828;
}
.contact-section .card h4 {
  font-size: 1rem;
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}
.contact-section .card i:hover {
  transform: scale(1.15);
}
.contact-section .card hr {
  border-color: #282828;
  border-width: 0.25rem;
  width: 3rem;
}
.contact-section .social {
  margin-top: 5rem;
}
.contact-section .social a {
  text-align: center;
  height: 3rem;
  width: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  line-height: 3rem;
  color: #fff;
}
.contact-section .social a:hover {
  color: rgba(255, 255, 255, 0.5);
  transform: scale(1.25);
}
.contact-section .social a:active {
  color: #fff;
}
</style>
