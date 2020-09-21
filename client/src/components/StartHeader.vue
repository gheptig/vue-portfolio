<template>
  <header class="startHeader" id="page-top">
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-white">WELCOME!</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">
          This is my personal portfolio
        </h2>
        <a
          class="btn js-scroll-trigger"
          href="#about"
          v-smooth-scroll="{ duration: 1200 }"
          >START</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "StartHeader",
};
</script>

<style scoped>
.startHeader {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 75%,
      #000000 100%
    ),
    url("https://images.unsplash.com/photo-1553373435-a118d2014202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

@media (min-width: 992px) {
  .startHeader {
    height: 100vh;
    padding: 0;
  }
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
