<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">About Me</h1>
          <h4 class="mt-4">Hey 
            <span 
            class="action-btn animate__animated animate__wobble animate__delay-1s animate__fast"
            >👋</span>
          </h4>
          <p>
            Hey there 👋 My name is Adeshina Umar-faruq, I am a <b>product designer</b> and technical writer finished studying <b>Computer Engineering</b> from the <b>LASUSTECH(Nigeria)</b>. I have over 2 years of experience in designing eye-catching designs and desired user experience flows.
          </p>
          <h4 class="mt-5">Tech Stacks</h4>
          <p>Below are some of the technologies I use daily:</p>
          <div class="animate__animated animate__fadeInUp">
              <ul style="list-style-type: circle;">
                <li>Fiqma</li>
                <li>Adobe XD</li>
                <li>Adobe Illutrator</li>
                <li>Dribble and Behance</li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/working.png"
          alt="About Illustration"
          class="abt-img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startYear: 2017,
      currYear: new Date().getFullYear(),
     
    };
  },
  head: {
    title: "About 🕵️‍♂️ - Adeshina Umar-Faruq",
    meta: [
      {
        hid: "description",
        name: "description",
        // currYear - startYear
        content: `Hey there 👋 My name is Adeshina Umar-faruq, i am a product designer developer and technical writer finished studying Computer Engineering from the LASUSTECH(Nigeria). I have over 2 years of experience in designing eye-catching designs and desired user experience flows.`
      }
    ]
  }
};
</script>
<style scoped>
.container {
  margin-top: 140px;
  text-align: left;
}
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
