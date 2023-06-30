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
        <b>Product Designer</b>. <br />
      </h2>

      <div class="col-md-10 info">
        <b>Hey there, I<span>'m Umar-Faruq&nbsp;Adeshina</span>.</b>
        <br />
        I’m a self-taught product designer experienced in crafting intuitive and user-friendly designs with a strong communcation skills, able to translate client's needs into functional and effective user-interfaces. Currently surviving Lagos, Nigeria. 
        <br style="margin-bottom: 8px;" />
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
          style="background-color: dodgerblue; margin-left: 0px; padding: 0.8em 1.3em; margin-top: 18px; border: none;"
        >
          My Work <span style="margin-left: 4px">></span>
        </b-button>

        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.linkedin" style="margin-left: 0px;">
            <LinkedinIcon />
          </social-link>

          <social-link style="display: inline-flex; align-items: center; justify: center;" :to="socialLinks.behance">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
            </svg>
          </social-link>

          <social-link :to="socialLinks.twitter">
            <TwitterIcon />
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
        linkedin: " https://www.linkedin.com/in/umar-faruq-adeshina-792b31232",
        twitter: "https://twitter.com/designerumar147?s=21",
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

