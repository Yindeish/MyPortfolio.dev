<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Project</h2>
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
            <hr />
            <b-link :href="project.github_url"
              >View source code <GithubIcon style="color: #000;"
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
          title: "Weather App",
          tag: "Progressive Web App",
          description:
           `
           This is a weather app that was built with native JavaScript.It's capable of providing weather details for over 20,000 cities worldwide. It exploys the OpenWeatherMap to fetch weather data and display it to the user. It also has a feature that allows the user.`,
          image_cover: require("@/assets/speak.jpg"),
          github_url: "https://github.com/Yindeish/WeatherAppJS-X",
          link: "https://weather-app-xx.netlify.app"
        },
        {
          title: "Hasuq tek Mobile Web App",
          tag: "Progressive Web App",
          description:
            `
            Hasuqtek is a sophisticated e-commerce web application meticulously crafted using Vue.js. Leveraging Vue's powerful features, it provides a robust platform for users to explore, compare, and purchase a wide array of gadgets online. It works just like jumia`,
          image_cover: require("@/assets/speak.jpg"),
          github_url: "https://github.com/Yindeish/WeatherAppJS-X",
          link: "https://weather-app-xx.netlify.app"
        },
        {
          title: "Calculator",
          tag: "Calculator Web App",
          description:
            `
            The main display of the calculator app consists of a digital screen where the numbers and results are displayed. The app supports the standard arithmetic operations such as addition, subtraction, multiplication, and division.
            The calculator app utilizes JavaScript to handle user interactions and perform the necessary calculations. It uses event listeners to detect button clicks and updates the display accordingly. The JavaScript code includes functions for each operation, allowing the app to process user input accurately.
            `,
          image_cover: require("@/assets/illustration.jpg"),
          github_url: "https://github.com/Yindeish/calculator-x",
          link: "https://calculator-xx.netlify.app"
        },
        {
          title: "Appland",
          tag: "Website",
          description:
            "Appland landing page",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "https://github.com/Yindeish/Appland",
          link: "https://appland-x.netlify.app"
        },
        {
          title: "Iqdoo",
          tag: "Website",
          description:
            "It's a platform for administrating people who aspire to learn web development",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "https://github.com/Yindeish/iqdoo-website",
          link: "https://iqdoo.netlify.app"
        },
        {
          title: "Dinamixtech",
          tag: "Website",
          description:
            "It's the Dinamixtech official site. Dinamixtech deals in building many varieties of electronic appliances, home appliances for example.",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "https://github.com/Yindeish/Dinamixtech",
          link: "https://iqdoo.netlify.app"
        }
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
