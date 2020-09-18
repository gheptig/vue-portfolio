<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top "
    v-bind:class="{ 'navbar-shrink': moreThan100 }"
    id="mainNav"
    v-b-scrollspy
    @scroll="handleScroll"
  >
    <div class="container">
      <a
        class="navbar-brand js-scroll-trigger"
        href="#page-top"
        v-smooth-scroll="{ duration: 1200 }"
        >Augustus Heptig</a
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              href="#about"
              v-smooth-scroll="{ duration: 1200 }"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              href="#projects"
              v-smooth-scroll="{ duration: 1200 }"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              href="#contact"
              v-smooth-scroll="{ duration: 1200 }"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      moreThan100: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        this.moreThan100 = true;
      } else {
        this.moreThan100 = false;
      }

      console.log(window.scrollY);
    },
  },
};
</script>

<style scoped>
#mainNav {
  min-height: 3.5rem;
  background-color: #282828;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
}

#mainNav .navbar-toggler {
  font-size: 80%;
  padding: 0.75rem;
  color: #fff;
  border: 1px solid #000000;
}
#mainNav .navbar-toggler:focus {
  outline: none;
}
#mainNav .navbar-brand {
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 0;
  font-size: 22px;
}
#mainNav .navbar-nav .nav-item:hover {
  color: #fff;
  outline: none;
  background-color: transparent;
}
#mainNav .navbar-nav .nav-item:active,
#mainNav .navbar-nav .nav-item:focus {
  outline: none;
  background-color: transparent;
  color: #fff;
}
@media (min-width: 992px) {
  #mainNav {
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }
  #mainNav .navbar-brand {
    padding: 0.5rem 0;
    color: rgba(255, 255, 255, 0.5);
  }
  #mainNav .nav-link {
    transition: none;
    padding: 2rem 1.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
  }
  #mainNav .nav-link:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  #mainNav .nav-link:active {
    color: #fff;
  }
  #mainNav.navbar-shrink {
    background-color: #282828;
  }
  #mainNav.navbar-shrink .navbar-brand {
    color: #fff;
  }
  #mainNav.navbar-shrink .nav-link {
    color: #fff;
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 0.25rem solid transparent;
  }
  #mainNav.navbar-shrink .nav-link:hover {
    color: #fff;
  }
  #mainNav.navbar-shrink .nav-link:active {
    color: #fff;
  }
  #mainNav.navbar-shrink .nav-link.active {
    color: #fff;
    outline: none;
    border-bottom: 0.25rem solid #fff;
  }
}
</style>
