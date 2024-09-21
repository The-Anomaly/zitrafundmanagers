import { Layout } from "layout";
import { About, Contact, FAQS, Home } from "pages";
import { PathRouteProps } from "react-router-dom";
import { Routes } from "./routes";
import { PrivacyPolicy } from "pages/privacyPolicy";

// Route Builder Item Props
export interface RouteBuilderItem extends PathRouteProps {
  Layout?: React.FC<any>; // If you wish to add a layout to the page
  Element: React.FC;
  props?: any;
}

/**
 * ROUTE BUILDER
 *
 * ===============================================
 *
 * This is a list of all our application routes.
 *
 * A single item on this list contains the necessary Route props needed by React Router to do it's job.
 *
 * If you wish to add a new route to the application,
 * just fulfill all the necessary props needed by the RouteBuilder item. Ciao!
 *
 */
export const RouteBuilder: RouteBuilderItem[] = [
  {
    path: Routes.home,
    Layout: Layout,
    Element: Home,
    props: {
      active: "home",
    },
  },
  {
    path: Routes.about,
    Layout: Layout,
    Element: About,
    props: {
      active: "about",
    },
  },
  {
    path: Routes.faqs,
    Layout: Layout,
    Element: FAQS,
    props: {
      active: "faqs",
    },
  },
  {
    path: Routes.contact,
    Layout: Layout,
    Element: Contact,
    props: {
      active: "contact",
    },
  },
  {
    path: Routes.privacy_policy,
    Layout: Layout,
    Element: PrivacyPolicy,
  },
];
