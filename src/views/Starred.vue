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
    <div
      class="underline mt-4"
      v-for="starred in filterSearch"
      :key="starred.id"
    >
      <div class="col">
        <div class="row">
          <div class="title">{{ starred.name }}</div>
        </div>
      </div>
      <div class="mt-1 subtitle">{{ starred.description }}</div>
      <div class="mt-3">
        <i class="fas fa-star"></i> {{ starred.stargazers_count }}
        <i class="fas fa-eye ml-2"></i> {{ starred.watchers }}
      </div>
    </div>
  </div>
</template>

<script>
import starredMixin from '@/Mixins/starredMixin.js'
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
      starreds: [],
      search: "",
    };
  },
  
  computed: {
    filterSearch: function() {
      return this.starreds.filter((starred) => {
        return starred.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  mixins: [starredMixin]
};
</script>

<style></style>
