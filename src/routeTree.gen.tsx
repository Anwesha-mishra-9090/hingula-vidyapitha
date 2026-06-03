import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { lazy, Suspense } from "react";

// Eager load the small index page, lazy-load other routes to reduce initial bundle
import IndexPage from "./routes/index";
const AboutPage = lazy(() => import("./routes/about"));
const AcademicsPage = lazy(() => import("./routes/academics"));
const AchievementsPage = lazy(() => import("./routes/achievements"));
const AlumniPage = lazy(() => import("./routes/alumni"));
const CampusLifePage = lazy(() => import("./routes/campus-life"));
const ContactPage = lazy(() => import("./routes/contact"));
const EcoClubPage = lazy(() => import("./routes/eco-club"));
const EnergyClubPage = lazy(() => import("./routes/energy-club"));
const ExcellencePage = lazy(() => import("./routes/excellence"));
const FacultyPage = lazy(() => import("./routes/faculty"));
const GalleryPage = lazy(() => import("./routes/gallery"));
const NccPage = lazy(() => import("./routes/ncc"));
const NoticesPage = lazy(() => import("./routes/notices"));

// Root route with AppShell layout
const rootRoute = createRootRoute({
  component: ({ children }) => {
    return (
      <AppShell>
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>{children}</Suspense>
      </AppShell>
    );
  },
  notFoundComponent: () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    );
  },
});

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: AcademicsPage,
});
const achievementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/achievements",
  component: AchievementsPage,
});
const alumniRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/alumni",
  component: AlumniPage,
});
const campusLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/campus-life",
  component: CampusLifePage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const ecoClubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/eco-club",
  component: EcoClubPage,
});
const energyClubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/energy-club",
  component: EnergyClubPage,
});
const excellenceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/excellence",
  component: ExcellencePage,
});
const facultyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faculty",
  component: FacultyPage,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});
const nccRoute = createRoute({ getParentRoute: () => rootRoute, path: "/ncc", component: NccPage });
const noticesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notices",
  component: NoticesPage,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  academicsRoute,
  achievementsRoute,
  alumniRoute,
  campusLifeRoute,
  contactRoute,
  ecoClubRoute,
  energyClubRoute,
  excellenceRoute,
  facultyRoute,
  galleryRoute,
  nccRoute,
  noticesRoute,
]);

// Create router
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

export { routeTree };
