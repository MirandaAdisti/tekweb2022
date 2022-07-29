let apiUrl = "https://myapi.mirandadisti.my.id/index.php/articles"
let app = Vue.createApp({
  data() {
    return {
      articles: {},
      markdown: null,
    };
  },
  methods: {
    getArticleData() {
      axios
        .get(apiUrl + "articles/1")
        .then((res) => {
          this.articles = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getArticleData();
  },
});
app.mount("#app");
