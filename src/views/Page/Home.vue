<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href>Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href>Global Feed</a>
              </li>
            </ul>
          </div>
          <div class="article-preview" v-for="item in articles" :key="item.slug">
            <div class="article-meta">
              <a href="profile.html">
                <img :src="item.author.image" />
              </a>
              <div class="info">
                <a href class="author">{{item.author.username}}</a>
                <span class="date">{{item.createdAt}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i>
                {{item.favoritesCount}}
              </button>
            </div>
            <a class="preview-link">
              <h1>{{item.title}}</h1>
              <p>{{item.body}}</p>
              <span>
                <div @click="gotoArticle(item.slug)">Read more...</div>
              </span>
            </a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href class="tag-pill tag-default" v-for="item in tags" :key="item">{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "@/api/Article.js";
import { getTags } from "@/api/Tags.js";
export default {
  data() {
    return {
      articles: [],
      tags: [],
    };
  },
  created() {
    this.loadArticle();
    this.loadTags();
  },
  methods: {
    gotoArticle(e) {
      this.$router.push("/articles/" + e);
      console.log(23123);
    },
    async loadArticle() {
      const { data } = await getArticle();
      this.articles = data.articles;
      console.log(this.articles);
    },
    async loadTags() {
      const { data } = await getTags();
      this.tags = data.tags;
      // console.log(data);
    },
  },
};
</script>

<style>
</style>