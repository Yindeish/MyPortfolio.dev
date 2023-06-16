<template>
  <b-row style="margin-left: 0;margin-right: 0;">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="avatar-img"
        alt="Adeshina Adam Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi <span
        class="action-btn animate__animated animate__wobble animate__delay-3s animate__fast"
        >👋</span>,
        <br />I<span>'m Adeshina&nbsp;Adam  </span>.
      </h2>

      <div class="col-md-10 info">
        A <b>front-end developer</b>. With the expertise I have in this space of web
         development, I build <b>engaging and intuitive user-friendly interfaces</b> that
         meet the needs of clients and users.
        <br />
        I am open to <b>vue-based</b> and <b>react-based</b> projects; vue-based projects more specifically.
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
        >
          Explore >
        </b-button>

        <b-button class="action-btn" to="/contact" variant="primary">
          Get In Touch
        </b-button>

        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.github">
            <GithubIcon />
          </social-link>

          <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link>

          <social-link :to="socialLinks.twitter">
            <TwitterIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>

          <social-link :to="socialLinks.youtube">
            <YoutubeIcon />
          </social-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon
  },

  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // SOCIAL LINKS 👇
      socialLinks: {
        github: "http://github.com/Yindeish",
        linkedin: "https://www.linkedin.com/in/adam-adeshina-47b4a4246",
        twitter: " https://twitter.com/Yindeish08?t=OiWt6tO8RX77oot-z8c8cA&s=08",
        mail: "mailto:Adeshinaadam03@gmail.com",
      }
    };
  },

  head: {
    title: "Portfolio ⚡ - Adeshina Adam",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Adeshina Adam is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Adam has vast knowledge in web development with over 3+ years experience in building actual products"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Portfolio ⚡ - Adeshina Adam"
      },
      {
        property: "og:description",
        content:
          "Adeshina Adam is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Adam has vast knowledge in front-end web development with over 3+ years experience in building actual products"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/coding.png")
      }
    ]
  },
  methods: {
    changeAvatar() {
      if (this.avatar == require("@/assets/avatar-2.webp")) {
        this.avatar = require("@/assets/avatar-1.webp");
      } else {
        this.avatar = require("@/assets/avatar-2.webp");
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 100);
    });
  }
};
</script>

