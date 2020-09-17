<template>
  <div class="row justify-content-center no-gutters">
    <div class="col-lg-6">
      <a href="https://gheptig.github.io/timed-quiz/" target="_blank"
        ><img class="img-fluid" src="" id="project-image-bq" alt="" />
      </a>
    </div>
    <div class="col-lg-6 order-lg-first">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-right">
            <h4 class="text-white">Fetured 5</h4>
            <p class="text-white-50">
              This is a responsive timed-quiz front-end application that
              presents a user to answer a series of questions about baseball in
              a given amount of time.
            </p>
            <hr class="d-none d-lg-block mr-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/timed-quiz"
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
  name: "ProjectFive",
};
</script>

<style scoped>
#project-image-bq:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #5cb85c;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
