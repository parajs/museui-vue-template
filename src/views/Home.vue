<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <top-nav>
      <template v-slot:left>
        <mu-button icon>
          <mu-icon value="menu"></mu-icon>
        </mu-button>
      </template>
      home
      <template v-slot:right>
        <mu-button icon>
          <mu-icon value="menu"></mu-icon>
        </mu-button>
      </template>
    </top-nav>
    <mu-container class="button-wrapper">
      <mu-button color="primary">Primary</mu-button>
      <mu-button color="secondary">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>
    </mu-container>
    <mu-container class="button-wrapper">
      <mu-button color="primary">Primary</mu-button>
      <mu-button color="secondary">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>
    </mu-container>
    <mu-container class="button-wrapper">
      <mu-button color="primary">Primary</mu-button>
      <mu-button color="secondary">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>
    </mu-container>
    <mu-container class="button-wrapper">
      <mu-button color="primary">Primary</mu-button>
      <mu-button color="secondary">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
