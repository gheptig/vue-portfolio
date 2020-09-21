<template>
  <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
    <div class="col-lg-6">
      <a href="https://gheptig.github.io/react-employee-directory/" target="_blank">
        <img
          class="img-fluid"
          src="@/assets/images/employee.png"
          id="project-image-4"
          alt="employee-directory"
        />
      </a>
    </div>
    <div class="col-lg-6">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left ml-3">
            <h4 class="text-white">Employee Directory</h4>
            <p
              class="text-white-50"
            >This is a simple React front-end application that allows a user to filter and sort data contained in a table of employees. The purpose of this application is to become familiar and demonstrate the basics of React such as: writing JSX, building/importing components, and setting state/using props.</p>
            <hr class="d-none d-lg-block ml-0" />
            <h6 class="mt-1">
              <a
                class="text-light"
                id="repo-link"
                href="https://github.com/gheptig/react-employee-directory"
                target="_blank"
              >REPO LINK</a>
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

<style scoped>
#project-image-4:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 20px #0275d8;
  border-radius: 5px;
}

#repo-link:hover {
  color: #282828 !important;
}
</style>
