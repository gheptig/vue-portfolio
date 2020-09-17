<template>
  <section class="message-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center" id="message-area">
          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mb-4">Message & Contact</h2>
          <form class="form-group">
            <input
              class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputName"
              type="name"
              placeholder="Name"
            />
            <input
              class="form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputEmail"
              type="email"
              placeholder="Email"
            />
            <textarea
              class="form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputNote"
              rows="6"
              type="text"
              placeholder="Message"
            ></textarea>
            <button type="button" class="btn btn-lg mt-3" id="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped></style>
