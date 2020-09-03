import Vue from "vue";
import VueRouter from "vue-router";
import Lessons from "../components/Lessons";
import Groups from "../components/Groups";
import Index from "../components/Index";
import Teachers from "../components/Teachers";
import Students from "../components/Students";
import Attendance from "../components/Attendance";
import Exam from "../components/Exam";
import Payments from "../components/Payments"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: Lessons
  },
  {
    path: "/groups",
    name: "Groups",
    component: Groups
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: Teachers
  },
  {
    path: "/students",
    name: "Students",
    component: Students
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: Attendance
  },
  {
    path: "/exam",
    name: "Exam",
    component: Exam
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
