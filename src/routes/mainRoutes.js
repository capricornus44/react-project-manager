import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/signup',
    name: 'Sign up',
    exact: true,
    component: lazy(() => import('../pages/registrationPage/RegistrationPage')),

    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/signin',
    name: 'Sign in',
    exact: false,
    component: lazy(() => import('../pages/registrationPage/RegistrationPage')),

    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/projects',
    name: 'Projects',
    exact: true,
    component: lazy(() => import('../pages/projectsPage/ProjectsPage')),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/projects/:projectId',
    name: 'Sprints',
    exact: true,
    component: lazy(() =>
      import('../pages/projectDetailsPage/ProjectDetailsPage'),
    ),

    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/projects/:projectId/sprints/:sprintId',
    name: 'SingleSprint',
    exact: true,
    component: lazy(() =>
      import('../pages/sprintDetailsPage/SprintDetailsPage'),
    ),
    isPrivate: true,
    isRestricted: false,
  },
];

export default mainRoutes;
