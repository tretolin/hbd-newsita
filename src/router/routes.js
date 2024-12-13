import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import FlipBook from "../components/FlipBook/FlipBook.vue";
import FlipCard from "../components/Card/FlipCard.vue";
import FlipCardButton from "../components/Card/FlipCardButton.vue";

const routes = [
    { path: "/", component: Home, title: "Login", name:"login" },
    { path: "/hbd", component: Home, title: "Home", name:"home" },
    { path: "/libro/:id", component: FlipBook, name:"libro", label: "libro" },
    { path: "/carta/:id", component: FlipCard, name:"carta", label: "carta" },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default routes;
