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
              v-model="name"
            />
            <input
              class="form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputEmail"
              type="email"
              placeholder="Email"
              v-model="email"
            />
            <textarea
              class="form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputNote"
              rows="6"
              type="text"
              placeholder="Message"
              v-model="note"
            ></textarea>
            <button
              type="button"
              class="btn btn-lg mt-3"
              id="submit-btn"
              @click="submitMessage"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Axios from "axios";
export default {
  name: "ContactForm",
  data: function() {
    return {
      name: "",
      email: "",
      note: "",
    };
  },
  methods: {
    submitMessage: function() {
      // console.log("click");
      Axios.post("api/newmessage", {
        name: this.name,
        email: this.email,
        note: this.note,
      })
        .then((res) => {
          console.log(res);
          this.name = "";
          this.email = "";
          this.note = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.message-section {
  padding: 5rem 0rem 1rem 0rem;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 75%,
      #000000 100%
    ),
    url("https://images.unsplash.com/photo-1582338953822-b8c392953fee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.message-section .form-group input {
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  padding: 1.25rem 2rem;
  height: auto;
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 80%;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  border: 0;
}

.message-section .form-group textarea {
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  padding: 1.25rem 2rem;
  height: auto;
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 80%;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  border: 0;
}

.btn {
  background-color: #000000;
  color: #fff;
}
.btn:hover {
  background-color: #282828;
  color: #fff !important;
  box-shadow: 0px 15px 20px #fff;
  transform: translateY(-7px);
}
</style>
