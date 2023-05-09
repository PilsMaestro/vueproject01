<template>
  <header class="headerHome">
    <div>
      <img class="logo" src="../assets/Borrow4Less_logo.png" alt="logoBorrow4less" />
    </div>
    <nav class="navHome">
      <div class="navItem" :key="idx" v-for="(navItem, idx) in navColumns">
        <h1>{{ navItem }}</h1>
      </div>
    </nav>
  </header>
  <div class="flex items-center justify-center text-white">
    <img src="../assets/img3.png " class="brightness-50" alt="foto" />
    <div
      max-len
      class="absolute top-0 left-0 right-0 bottom-0 pb-[300px] flex flex-col items-center justify-center"
    >
      <div class="text-5xl">Your Property Leading Club</div>
      <div class="text-3xl">Lend on property loans and earn 7-12% return p.a.</div>
    </div>
  </div>

  <div class="TitelVet">Looking for real returns?</div>
  <img src="../assets/img2.png" class="kleinefoto" alt="foto" />
  <div class="textondertitel">
    Lend from €1.000 and earn up to 12% fixed return p.a. on property loans through Blend.
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
const navColumns = ["Home", "About", "Contact", "Login", "Register"];
</script>

<style scoped>
.headerHome {
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 16, 88);
  color: rgb(206, 206, 206);
  align-items: center;
}

.clickable-header {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(97, 97, 97);
}

.navHome {
  display: flex;
}

.navItem {
  margin: 10px;
}

.logo {
  width: 60px;

  padding: 10px;

  padding-left: 20px;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  filter: brightness(50%);
}

.text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
}

.text2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: bold;
}

.TitelVet {
  font-weight: bold;
  font-size: 20px;
  position: center;
}

body {
  background-color: #4ce5e0;
}

.kleinefoto {
  width: 30%;
  height: auto;
  float: right;
  border-radius: 5%;
  margin-right: 50px;
}
</style>
