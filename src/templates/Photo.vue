<template>
  <main id="photo-page" v-if="photo">
    <router-link to="/"> Search Photos </router-link>
    <img :src="photo.src.large" />
    <h1>
      Image by
      <a
        :href="photo.photographer_url || ''"
        target="_blank"
        v-text="photo.photographer"
      />
    </h1>
    <h3>{{ photo.width }}x{{ photo.height }}</h3>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { apiRequest } from "../utils/api-request.js";

export default {
  name: "Photo",
  setup() {
    const { params } = useRoute();
    const photo = ref(null);

    async function getPhoto() {
      photo.value = null;

      const data = await apiRequest(`/photos/${params.id}`);
      console.log(data);
      photo.value = data;
    }

    getPhoto();

    return { photo };
  },
};
</script>

<style lang="scss">
#photo-page {
  & > a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  img {
    display: block;
    max-height: 70vh;
  }
}
</style>
