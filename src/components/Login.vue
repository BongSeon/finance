<template>
  <!-- BEGIN login -->
  <div class="login login-v2 fw-bold">
    <!-- BEGIN login-cover -->
    <div class="login-cover">
      <div class="login-cover-img" data-id="login-cover-image"></div>
      <div class="login-cover-bg"></div>
    </div>
    <!-- END login-cover -->

    <!-- BEGIN login-container -->
    <div class="login-container">
      <!-- BEGIN login-header -->
      <div class="login-header">
        <div class="brand">
          <div class="d-flex text-gray-400 align-items-center">
            <span class="logo"></span> <b>JY</b> Admin
          </div>
        </div>
        <div class="icon">
          <i class="fa fa-lock"></i>
        </div>
      </div>
      <!-- END login-header -->

      <!-- BEGIN login-content -->
      <div class="login-content">
        <div class="mb-20px text-start">
          <label for="exampleDataList" class="form-label fs-18px text-gray-500"
            >ID</label
          >
          <input
            type="text"
            v-model="id"
            class="input-id form-control h-45px border-0"
            placeholder="ID"
            id="emailAddress"
          />
        </div>
        <div class="mb-30px text-start">
          <label for="exampleDataList" class="form-label fs-18px text-gray-500"
            >PASSWORD</label
          >
          <input
            type="password"
            v-model="pass"
            class="input-pass form-control h-45px border-0"
            placeholder="Password"
          />
        </div>
        <div class="mb-20px">
          <button
            class="btn btn-success d-block fs-20px w-100 h-50px btn-lg"
            @click="handleLoginButton"
          >
            Login
          </button>
        </div>
      </div>
      <!-- END login-content -->
    </div>
    <!-- END login-container -->
  </div>
  <!-- END login -->
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup(props, context) {
    const id = ref("");
    const pass = ref("");

    const handleLoginButton = () => {
      if (id.value == "admin" && pass.value == "asdf") {
        context.emit("logged");
      }
    };
    return { id, pass, handleLoginButton };
  },
};
</script>

<style>
.input-id,
.input-pass {
  font-size: 1.2rem;
  /* padding: 0; */
  /* margin: 0; */
}
.login.login-v2 {
  min-height: 100vh;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
}
.login-cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.login-cover .login-cover-img {
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  -ms-transition: background 0.2s ease;
  -o-transition: background 0.2s ease;
  transition: background 0.2s ease;
}
.login.login-v2 .login-container {
  max-width: 400px;
  padding: 0 20px;
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  top: -3rem;
}
.login.login-v2 .login-header {
  margin-bottom: 20px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.login.login-v2 .login-header .brand {
  padding: 0;
  font-size: 28px;
  font-weight: 300;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.login.login-v2 .login-header .brand .small,
.login.login-v2 .login-header .brand small {
  font-size: 13px;
  display: block;
  opacity: 0.5;
  font-weight: 600;
}
.login.login-v2 .login-header .brand .logo {
  border: 14px solid transparent;
  border-color: transparent rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.3);
  background-color: var(--app-theme);
  width: 28px;
  height: 28px;
  position: relative;
  font-size: 0;
  border-radius: 6px;
  margin-right: 0.70312rem;
}
.login.login-v2 .login-header .icon i {
  font-size: 56px;
}
.login.login-v2 .login-header .icon {
  opacity: 0.75;
}
.form-check .form-check-input {
  float: left;
  margin-left: -2em;
}
</style>
