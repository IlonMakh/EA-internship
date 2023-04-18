<template>
  <div class="sites__list">
    <sites-card v-for="site, index in sites" :site="site" :index="index" :key="site.title"
      @remove="removeItem"></sites-card>
  </div>
</template>

<script>
import SitesCard from './SitesCard.vue';

export default {
  name: 'sites-list',
  props: {
    sites: Object
  },
  components: { SitesCard },
  data() {
    return {
    }
  },

  methods: {
    removeItem(index) {
      this.$emit('remove', index);
    }
  }
}
</script>