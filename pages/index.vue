<template>
  <MazInput placeholder="ค้นหา Memes" v-model="searchMemes"></MazInput>
  <MazBtn @click="getListMemes">ค้นหา</MazBtn>
  <MazGallery :images="listImage" :height="400"></MazGallery>
</template>

<script>
import MazInput from "maz-ui/components/MazInput";
import MazBtn from "maz-ui/components/MazBtn";
import MazGallery from "maz-ui/components/MazGallery";

import axios from "axios";

export default {
  components: {
    MazInput,
    MazBtn,
    MazGallery,
  },
  data() {
    return {
      searchMemes: null,
      listImage: [],
    };
  },
  methods: {
    getListMemes() {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=7SjSAspO45tBbJMGg7AphSM835y5ZM4o&q=${this.searchMemes}&limit=100&offset=0&rating=g&lang=th`
        )
        .then((resMeme) => {
          this.listImage = resMeme.data.data.map((mapData) => {
            console.log(mapData);
            let NewObject = {
              src: mapData.images.preview_webp.url,
            };
            return NewObject;
          });
        });
    },
  },
};
</script>
