<template>
  <div class="app">
    <b-nav id="top-nav" align="center">
      <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
      <b-nav-item to="/gallery" exact exact-active-class="active">Gallery</b-nav-item>
      <p :class="'infos-items ' + itemsInfosVisible">There are {{numberItems}} items
        ({{selectedItems}} selected)</p>
    </b-nav>
    <router-view/>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'numberItems',
                'selectedItems',
                'itemsInfosVisible'
            ])
        }
    };
</script>

<style lang="scss">
  body {
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;

    #top-nav {
      background-image: linear-gradient(to right, #05082c, #07cdf9);

      .nav-item {
        a {
          color: #fff;
          opacity: 0.5;

          &.active {
            opacity: 1;
          }
        }
      }

      .infos-items {
        color: #ffffff;
        width: 100%;

        &.visible {
          display: block;
        }

        &.hidden {
          display: none;
        }
      }
    }
  }
</style>
