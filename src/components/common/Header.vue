<template>
  <div id="header">
    <header class="header">
      <div class="wrapper">
        <div class="display-flex align-center space-between">
          <div class="logo">
            <a href="#">
              <img src="../../assets/images/logo.png" />
            </a>
          </div>
          <div class="navigation">
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">
                  Your Cart
                  <span class="cart-icon">
                    <img src="../../assets/images/cart-icon.png" />
                    <span class="total-number">1</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>