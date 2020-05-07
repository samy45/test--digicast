<template>
  <div class="gallery">
    <b-container fluid>
      <b-row v-for="chunk in chunkedItems" cols="1" cols-sm="4">
        <b-col v-for="item in chunk">
          <Item :item="item"></Item>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Item from "./partial/Item";
    import {chunk} from 'lodash';

    export default {
        name: 'Gallery',
        components: {Item},
        mounted() {
            this.$store.dispatch('loadItems');
            this.$store.dispatch('setItemsInfosVisible')
        },
        computed: {
            chunkedItems() {
                return chunk(this.$store.state.items, 4)
            },
        },
    };

</script>

<style lang="scss" scoped>
  .gallery {
    background-color: #010024;
  }
</style>
