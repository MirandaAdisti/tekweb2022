let apiUrl = "https://myapi.mirandadisti.my.id/index.php/Articles/getAllArticle/";
let app = Vue.createApp({
  data() {
    return {
      articles: {},
      foto: "",
    };
  },
  methods: {
    getArticleData() {
      axios
        .get("https://myapi.mirandadisti.my.id/index.php/Articles/getAllArticle")
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
