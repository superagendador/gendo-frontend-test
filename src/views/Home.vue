<template>
  <section class="mt-4">
    <div class="row container">
      <div class="col-md-3 col-sm-12 profile text-center">
        <img :src="user.avatar_url" class="image-profile" alt="" />
        <div class="text-profile ">
          <div class="user ">{{ user.login }}</div>
          <div class="sub mt-1">FrontEnd</div>
        </div>
      </div>
      <div class="mt-4 col-md-8 col-sm-12">
        <div class="links">
          <router-link to="/repos" class="link">
            Repos <span>{{user.public_repos}}</span>
          </router-link>
          <router-link to="/starred" class="link ml-3">
            Starred <span>{{starreds.length}}</span>
          </router-link>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import starredMixin from '@/Mixins/starredMixin.js'
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.5e76340ba4734bd6",
        client_secret: "0eeea13692f03906cd281577db0c076f44ca46b8",
        count: 7,
        sort: "created: asc",
      },
      starreds: [],
      user: [],
    };
  },
  methods: {
    getUser() {
      const { url, client_id, client_secret } = this.github;
      axios
        .get(
          `${url}/rudson-50?client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.user = data));
    },
  },
  created() {
    this.getUser();
  },
  mixins: [starredMixin]
};
</script>
<style scoped>

</style>
