<template>
  <div id="app">
    <Header v-if="true"></Header>
    <hr />
    <div class="container">
      <Nav></Nav>
      <hr />
      <section class="contents">
        <div>
          <h3>Members</h3>
          <p>Contents</p>
        </div>
      </section>
      <hr />
    </div>
    <Footer :title="'카피라이트'"></Footer>
  </div>
</template>

<script>
import Header from "./components/header-component.vue";
import Nav from "./components/nav-component.vue";
import Footer from "./components/footer-component.vue";

export default {
  components: {
    Header,
    Nav,
    Footer,
  },
};
</script>
