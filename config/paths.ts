export type TPathRouteMap = {
  HOME: string;
  ADD: string;
  LOGIN: string;
  DASHBOARD: string;
  DASHBOARD_REVIEW: string;
  DASHBOARD_CHECK_IN: string;
};

export const PATHS: TPathRouteMap = {
  HOME: '/',
  ADD: '/add',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  DASHBOARD_REVIEW: '/dashboard/review',
  DASHBOARD_CHECK_IN: '/dashboard/checkin',
};

export const PATHS_FOR_SITEMAP = [PATHS.HOME, PATHS.LOGIN];
