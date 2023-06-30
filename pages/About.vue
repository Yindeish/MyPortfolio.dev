<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">About Me</h1>
          
          <p>
            <br />
            I am Umar-Faruq Adeshina, a product designer specializing in delivering intuitive and effective designs with a strong foundation in User Experience (UX). I find great satisfaction in understanding people and helping them overcome challenges through delightful and user-friendly products.
            <br />
            <br />
            To enhance my skills in UI design, I pursued a product design diploma course at AltSchool Africa. This experience provided me with invaluable insights into understanding user preferences, strategizing based on user research reports, and developing visually appealing designs that are both useful and usable.
            <br />
            <br />
            In my role as a designer, I have collaborated with startups to create problem-solving designs. One of my notable achievements was contributing to the development of a platform that caters to the needs of Muslim students in the tech field. By deeply understanding their specific requirements, we created an effective and engaging platform, which has furthered my professional growth.
            <br />
            <br />
            While I am deeply passionate about my work, I acknowledge the need to strike a balance between meticulous attention to detail and overall design success. I’m excited to see where my career takes me next and I’m always looking for opportunities to learn and grow.
            <br />
            <br />
            During my leisure time, I indulge in watching football highlights and movies, with a particular fondness for K-dramas.
          </p>
          <h4 class="mt-5">Tech Stacks</h4>
          <p>Below are some of the technologies I use daily:</p>
          <div class="animate__animated animate__fadeInUp">
              <ul style="list-style-type: circle;">
                <li>Fiqma</li>
                <li>Adobe XD</li>
                <li>Miror</li>
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
