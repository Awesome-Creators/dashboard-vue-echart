import BasicLayout from "@/components/layouts/BasicLayout";
// import Home from "@/views/Home";
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "/home",
    hidden: true,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/dashboard/AnalysisHome"),
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/dashboard/AnalysisTest"),
      },
    ],
  },
];
