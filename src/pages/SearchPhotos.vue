<template>
  <main id="search-photos-page">
    <h1>Search Photos</h1>
    <form @submit.prevent="searchPhotos">
      <label>
        Search:
        <input type="search" placeholder="foo" />
      </label>
      <input type="submit" value="Go" />
    </form>
    <ol id="photos" v-if="photos">
      <li v-for="photo in photos" :key="photo.id">
        <router-link :to="`/photos/${photo.id}`">
          <img :src="photo.src.large" alt="Pexels Photo" />
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
import { ref } from "vue";
import { apiRequest } from "../utils/api-request.js";

export default {
  name: "SearchPhotos",
  setup() {
    const photos = ref(null);

    async function searchPhotos(e) {
      photos.value = null;
      const data = await apiRequest(
        `/search?query=${e.target[0].value}&per_page=20`
      );
      photos.value = data.photos;
    }

    return { photos, searchPhotos };
  },
};
</script>

<style lang="scss">
#search-photos-page {
  form {
    margin-bottom: 2rem;

    h1 {
      margin: 0;
      padding: 0;
    }

    label {
      margin-right: 1rem;

      input {
      }
    }
  }
}

#photos {
  margin: 0;
  padding: 0;
  list-style: none;
  column-count: 4;
  $image-spacing: 1.5rem;
  column-gap: $image-spacing;

  li {
    margin-bottom: $image-spacing;

    img {
      width: 100%;
    }
  }
}
</style>
