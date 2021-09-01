<template>
  <div>
    <div class="mt-5">
      <i class="fas fa-search icon"></i>
      <input
      v-model="search"
        type="text"
        name="search"
        class="input"
        placeholder="      Filter by name"
      />
    </div>
    <div class="underline mt-4" v-for="repo in filterSearch" :key="repo.id">
      <div class="col">
        <div class="row">
          <div class="title">{{ repo.name }}</div>
        </div>
      </div>
      <div class="mt-1 subtitle">{{ repo.description }}</div>
      <div class="mt-3">
        <i class="fas fa-code"></i> {{ repo.language }}
        <i class="fas fa-eye ml-2"></i> {{ repo.watchers }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.5e76340ba4734bd6",
        client_secret: "0eeea13692f03906cd281577db0c076f44ca46b8",
        count: 7,
        sort: "created: asc",
      },
      repos: [],
      search: "",
    };
  },
  methods: {
    getRepos() {
      const { url, client_id, client_secret, count, sort } = this.github;
      axios
        .get(
          `${url}/rudson-50/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.repos = data));
    },
  },
  created() {
    this.getRepos();
  },
  computed: {
    filterSearch: function() {
      return this.repos.filter((repo) => {
        return repo.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>


</style>
