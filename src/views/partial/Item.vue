<template>
  <div :class="'item '+ isSelected(item.isSelected)">
    <b-container class="title_container" fluid>
      <h1>{{item.title}}</h1>
    </b-container>
    <b-img-lazy fluid :src="'img/'+item.img">
    </b-img-lazy>
    <b-container class="btn-container" fluid>
      <b-row cols="2">
        <b-col align="left"><a class="select" @click="selectItem(item)"><i
          class="fas fa-check-circle"></i></a></b-col>
        <b-col align="right"><a class="delete" @click="deleteItem(item)"><i
          class="fas fa-times-circle"></i></a></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'Item',
        props: ['item'],
        methods: {
            deleteItem(item) {
                this.$store.dispatch('deleteItem', item)
            },
            selectItem(item) {
                this.$store.dispatch('editSelectItem', item)
            },
            isSelected(value) {
                if (value) {
                    return "selected";
                } else {
                    return "";
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .item {
    margin: 40px 0;
    opacity: 1;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
    img {
      width: 100%;
      height: 15vw;
      object-fit: cover;
      position: relative;
      margin-bottom: -35px;
    }

    h1 {
      text-align: center;
      font-size: 100%;
      width: 100%;
      color: #fff;
      margin-bottom: 0;

    }

    .title_container {
      padding: 10px 0px;
      z-index: 1;
      margin-bottom: -37px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .btn-container {
      position: relative;
      bottom: 10px;

      a {
        cursor: pointer;

        .fa-check-circle, .fa-times-circle {
          color: #ffffff;
          font-size: 150%;
        }
      }
    }

    &.selected {
      opacity: 0.5;
    }

    @media screen and (max-width: 576px) {
      img {
        height: 43vw;
      }
    }
  }
  .item:hover{
    opacity: 0.5;
  }
</style>
