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
    component: () => import(`@/views/DashboardView`),
    children: [
      {
        path: "/dashboard",
        meta: {
          name: "Dashboard",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Dashboard`)
      },
      {
        path: "/users",
        meta: {
          name: "User List",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Users`)
      },
      {
        path: "/user-profile",
        meta: {
          name: "User Profile",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/UserProfile`)
      },
      {
        path: "/map",
        meta: {
          name: "Map",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Maps`)
      },
      {
        path: "/settings",
        meta: {
          name: "Settings",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/Settings`)
      }
    ]
  }
];
