<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags" />
                <div class="tag-list"></div>
              </fieldset>
              <button
                @click="onCreate"
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateArticle } from "@/api/Article.js";

export default {
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: ["reactjs", "angularjs", "dragons"],
      },
    };
  },
  methods: {
    async onCreate() {
      const { data } = await CreateArticle(this.article);
      //   console.log(data.article.slug);
      this.$router.push("articles/" + data.article.slug);
      console.log(this.$route);
    },
  },
};
</script>

<style>
</style>