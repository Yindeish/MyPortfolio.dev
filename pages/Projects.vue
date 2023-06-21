<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Projects</h2>
    <div class="container">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div class="col-md-5">
          <img
            :src="project.image_cover"
            :alt="project.title"
            class="project-cover"
          />
        </div>
        <div class="col-md-5">
          <h2 class="mt-3" style="text-align: left;">
            {{ project.title }}
            <hr class="dope" />
          </h2>
          <b-card class="mt-3 mb-3 text-left text-dark">
            <p>{{ project.description }}</p>
            <b-link :href="project.link"
              >Check it out! <LinkIcon style="color: #000;"
            /></b-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    GithubIcon,
    LinkIcon
  },
  data() {
    return {
      projects: [
        {
          title: "The Excellent Project",
          tag: "The Excellent Project",
          description:
            "It feeds the current weather details of over 20,000 cites across the wide world",
          image_cover: require("@/assets/WhatsApp Image 2023-06-10 at 9.43.31 AM.jpeg"),
          link: "https://www.behance.net/gallery/165722659/Excellent-App"
        },
        {
          title: "The Vulte Project",
          tag: "The Redesign",
          description:
            "This app was tailored to help a particular user purchase wide range of gadgets from hasuqtek.com. It works like jumia.",
          image_cover: require("@/assets/WhatsApp Image 2023-06-10 at 9.44.05 AM.jpeg"),
          link: "https://www.behance.net/gallery/162716067/A-Redesign-of-Vulte-App"
        },
        {
          title: "The Fike Project",
          tag: "The Fike Project",
          description:
            "Does the operations of a regular mobile default calculator",
          image_cover: require("@/assets/WhatsApp Image 2023-06-10 at 9.44.52 AM.jpeg"),
          link: "https://www.behance.net/gallery/161704847/Fike-online-sneakers-store"
        },
      ],
    };
  },
  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  head: {
    title: "Recent Projects 💻 - Adeshina Adam",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "View all the recents open-sourced projects built with ♥ by Adeshina Adam, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Recent Projects 💻 - Adeshina Adam"
      },
      {
        property: "og:description",
        content:
          "View all the recents open-sourced projects built with ♥ by Adeshiina Adam, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png")
      }
    ]
  }
};
</script>
<style scoped>

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  background-color: red;
}
html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  background-color: red;
}
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
</style>
