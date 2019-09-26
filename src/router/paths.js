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
        path: "/members",
        meta: {
          name: "Members",
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
        path: "/snd-regular",
        meta: {
          name: "SND Regulars",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/SNDRegistration`)
      },
      {
        path: "/snd-first-timers",
        meta: {
          name: "SND First Timers",
          requiresAuth: true
        },
        component: () => import(`@/components/DashboardViews/SNDFirstTimers`)
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
