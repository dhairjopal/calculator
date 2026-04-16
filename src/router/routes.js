const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("src/pages/aboutPage.vue") },
      { path: "history", component: () => import("src/pages/historyPage.vue") },
      {
        path: "dark",
        component: () => import("src/pages/darkPage.vue"),
      },
      { path: "basic", component: () => import("src/pages/BasicPage.vue") },
      { path: "logo", component: () => import("src/pages/logoPage.vue") },
      { path: "scientific", component: () => import("src/pages/SciPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
