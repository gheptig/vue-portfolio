<template>
  <div class="row justify-content-center no-gutters">
    <div class="col-lg-6">
      <a
        href="https://gheptig.github.io/react-employee-directory/"
        target="_blank"
      >
        <img
          class="img-fluid"
          src="@/assets/images/employee.png"
          id="project-image-5"
          alt="employee-directory"
        />
      </a>
    </div>
    <div class="col-lg-6 order-lg-first">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div
            class="project-text w-100 my-auto text-center text-lg-right mr-3"
          >
            <h4 class="text-white">Employee Directory</h4>
            <p class="text-white-50">
              This is a simple React front-end application that allows a user to
              filter and sort data contained in a table of employees. The
              purpose of this application is to become familiar and demonstrate
              the basics of React such as: writing JSX, building/importing
              components, and setting state/using props.
            </p>
            <p class="text-white-50 mb-0">
              Featured Technologies: React.js, Node.js, Bootstrap.
            </p>
            <hr class="d-none d-lg-block mr-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/react-employee-directory"
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
#project-image-5:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #0275d8;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
