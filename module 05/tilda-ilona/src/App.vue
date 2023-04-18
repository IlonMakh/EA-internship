<template>
  <Header></Header>
  <router-view />
  <sprites-svg></sprites-svg>
</template>

<script>
import Header from './components/Header.vue';
import SpritesSvg from './components/Global/SpritesSvg.vue';

export default {
  name: 'App',
  components: {
    Header,
    SpritesSvg
  },
  data() {
    return {
    }
  }
}
</script>

