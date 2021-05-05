import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Sign up',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/registrationPage/RegistrationPage' /* webpackChunkName: "Sign up" */
      ),
    ),

    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/signin',
    name: 'Sign in',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/registrationPage/RegistrationPage' /* webpackChunkName: "Sign in" */
      ),
    ),

    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/project',
    name: 'Project',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/projectsPage/ProjectsPage' /* webpackChunkName: "Projects" */
      ),
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/projects/:projectId',
    name: 'Sprints',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/projectDetailsPage/ProjectDetailsPage' /* webpackChunkName: "Single project" */
      ),
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/projects/:projectId/:sprintId',
    name: 'SingleSprint',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/sprintDetailsPage/SprintDetailsPage' /* webpackChunkName: "Single sprint" */
      ),
    ),
    isPrivate: true,
    isRestricted: false,
  },
];

export default mainRoutes;
