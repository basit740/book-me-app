// pages
import Index1 from "../pages/Startuplanding/Index1"
import Index2 from "../pages/Applanding/Index2"
import Index3 from "../pages/Blog-Post/Index3"
import Index4 from "../pages/Agencylanding/Index4"
import Index5 from "../pages/Businesslanding/Index5"
import Index6 from "../pages/Booklanding/Index6"
import Index7 from "../pages/Interior/Index7"
import Index8 from "../pages/Constructionlanding/Index8"
import Index9 from "../pages/Softwarelanding/Index9"
import Index10 from "../pages/Photographer/Index10"
import Index11 from "../pages/GYM/Index11"

const routes = [
    // Startup-Landing
    { path: "/startup-landing", component: <Index1 /> },

    // App-Landing
    { path: "/app-landing", component: <Index2 /> },

    // Blog-post
    { path: "/blog-post", component: <Index3 /> },

    // Agency-Landing
    { path: "/agency-landing", component: <Index4 /> },

    // Business-Landing
    { path: "/business-landing", component: <Index5 /> },

    // Book-Landing
    { path: "/book-landing", component: <Index6 /> },

    // InteriorDesign-Landing
    { path: "/interior-design-landing", component: <Index7 /> },

    // Construction-Landing
    { path: "/construction-landing", component: <Index8 /> },

    // Software
    { path: "/software", component: <Index9 /> },

    // Photographer-Landing
    { path: "/photographer-landing", component: <Index10 /> },

    // Gym-Landing
    { path: "/gym-landing", component: <Index11 /> },
    { path: "/", component: <Index1 /> },

]

export { routes };