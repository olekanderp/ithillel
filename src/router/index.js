import { createRouter, createWebHistory } from 'vue-router';
import AddArticle from '../components/AddArticle.vue';
import ArticleDetail from '../components/ArticleDetail.vue';
import ArticleList from '../components/ArticleList.vue';

const routes = [
    { path: '/', component: ArticleList, name: 'home' },
    { path: '/add', component: AddArticle, name: 'add-article' },
    { path: '/detail/:id', component: ArticleDetail, name: 'article-detail' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
