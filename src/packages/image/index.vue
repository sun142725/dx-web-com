<template>
    <img v-if="isLazy" v-lazy="staticSourceServer+src" :alt="alt">
    <img v-else :src="staticSourceServer+src" :alt="alt" />
</template>
<script>
import { staticSourceServer } from "../../config/env.config.js"
export default {
  name: "EleOriginImg",
  props: {
      "is-cdn": {
          type: Boolean,
          default: true
      },
      "is-lazy": {
          type: Boolean,
          default: false
      },
      "static-source-server": {
          type: String,
          default: staticSourceServer
      },
      "calss-name": {
          type: String,
          default: ""
      },
      src: {
          type: String,
          default: '/image/icon-drug-default.png'
      },
      alt: {
          type: String,
          default: ""
      }
  }
};
</script>
