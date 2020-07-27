<template>
  <screen ref="screen" :smartCSR="true" :keys="true">
    <form
      top="center"
      left="center"
      width="50%"
      :height="20"
      :keys="true"
      :mouse="true"
      style="bg: white"
    >
      <box
        :width="50"
        :height="1"
        :top="1"
        left="center"
        align="center"
        content="Login Form"
        style="bg: white; fg: black; bold: true"
      />
      <text :top="3" left="50%-20" style="bold: true">Username:</text>
      <textbox
        :keys="true"
        :mouse="true"
        ref="username"
        :top="3"
        left="50%-8"
        :length="10"
        :width="30"
        :height="1"
        :value="username"
        @submit="submitUsername"
        style="bg: blue; fg: white"
      />
      <text :top="5" left="50%-20" style="bold: true">Password:</text>
      <textbox
        :keys="true"
        :mouse="true"
        ref="password"
        :top="5"
        left="50%-8"
        :length="10"
        :width="30"
        :height="1"
        :value="password"
        @submit="submitPassword"
        style="bg: blue; fg: white"
        :censor="true"
      />
      <checkbox
        :keys="true"
        :mouse="true"
        :top="7"
        left="center"
        :checked="rememberMe"
        @check="updateRememberMe(true)"
        @uncheck="updateRememberMe(false)"
        text="remember me"
        :width="20"
        :height="1"
        style="bg: blue"
      />
      <button
        :keys="true"
        :mouse="true"
        content="Login"
        :width="20"
        :height="3"
        :top="9"
        left="center"
        align="center"
        valign="middle"
        :style="[buttonStyle, submitting && loggingStyle]"
        @press="login"
      />
      <message
        ref="message"
        top="center"
        left="center"
        :width="50"
        :height="5"
        align="center"
        valign="middle"
      />
    </form>
  </screen>
</template>

<script>
export default {
  name: "test-component",
  data: {
    username: "",
    password: "",
    rememberMe: false,
    submitting: false
  },
  computed: {
    buttonStyle() {
      return {
        bg: "blue",
        fg: "white"
      };
    },
    loggingStyle() {
      return {
        bg: "grey"
      };
    }
  },
  methods: {
    submitUsername(username) {
      this.username = username;
    },
    submitPassword(password) {
      this.password = password;
    },
    updateRememberMe(val) {
      this.rememberMe = val;
    },
    login() {
      this.submitting = true;
      this.$refs.message.log(
        `Logging in. Username: ${this.username}, password: ${
          this.password
        }, rememberMe: ${this.rememberMe}`,
        3,
        () => {
          this.$refs.message.log("Logged in", 1, () => {
            this.submitting = false;
          });
        }
      );
    }
  },
  mounted() {
    this.$refs.screen.key(["C-c"], () => {
      process.exit(0);
    });
    this.$refs.username.focus();
    this.$refs.message.hide();
  }
};
</script>