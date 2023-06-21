<template>
  <b-row style="margin-left: 0;margin-right: 0;">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="avatar-img"
        alt="Adeshina Umar Faruq Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi <span
        class="action-btn animate__animated animate__wobble animate__delay-3s animate__fast"
        >👋</span>,
        <br />I<span>'m Adeshina&nbsp;Umar-Faruq  </span>.
      </h2>

      <div class="col-md-10 info">
        A <b>product designer</b>. My name is Umar-faruq, I’m a self-taught product designer with 2 years of experience based in Lagos, Nigeria. I’m currently working as a freelancer at <b>HasuqTek.</b>
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
          <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link>

          <social-link :to="socialLinks.twitter">
            <TwitterIcon />
          </social-link>

          <social-link :to="socialLinks.facebook">
            <FacebookIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
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
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MailIcon
  },

  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // SOCIAL LINKS 👇
      socialLinks: {
        linkedin: " https://www.linkedin.com/in/umar-faruq-adeshina-792b31232",
        twitter: "  https://twitter.com/fqior147?s=21",
        facebook: "https://facebook.com/AdeshinaAdam",
        mail: "mailto:Adeshinaadam03@gmail.com",
        behance: 'https://www.behance.net/d4262b26',
        dribble: 'https://dribbble.com/pro'
      }
    };
  },

  head: {
    title: "Portfolio ⚡ - Adeshina Umar-Faruq",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Adeshina Umar Faruq"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: 
        `Adeshina Umar-Faruq is a seasoned Product Designer. He is driven by an insatiable curiosity and an unwavering desire to create meaningful and impactful products. With [X] years of experience in the industry, I have honed my skills in transforming ideas into tangible solutions that resonate with users and drive business growth.`
      },
      {
        property: "og:description",
        content:
          "Adeshina Umar Faruq proficient in utilizing cutting-edge design tools and technologies, allowing me to bring concepts to life through captivating visualizations, interactive prototypes, and immersive user experiences. By leveraging my expertise in UX/UI design, I ensure that the products I create strike a harmonious balance between aesthetics and functionality, creating seamless and delightful interactions."
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

