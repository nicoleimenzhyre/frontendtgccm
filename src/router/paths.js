export default [
  {
    path: "*",
    meta: {
      name: "",
      requiresAuth: true
    },
    redirect: {
      path: "/dashboard"
    }
  },
  {
    path: "/",
    meta: {
      name: "",
      requiresAuth: false
    },
    component: () => import(`@/views/LoginView`),
    children: [
      {
        path: "",
        component: () => import(`@/components/Login`)
      }
    ]
  },
  // routes for dashboard children
  {
    path: "/dashboard",
    meta: {
      name: "Dashboard View",
      requiresAuth: true
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: "",
        meta: {
          name: "Dashboard",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Dashboard.vue`)
      },
      {
        path: "/users",
        meta: {
          name: "Users",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Users`)
      },
      {
        path: "/add-snd-member",
        meta: {
          name: "Add SND Member",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/AddSNDMember`)
      },
      {
        path: "/add-roles",
        meta: {
          name: "Add Roles",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/AddRoles`)
      }
    ]
  }
];
