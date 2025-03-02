const routes = {
  home: "/",
  auth: "/auth",
  forgot_password: "/auth/forgot-password",
  recent_files: "/recent-files",
  file: (id: string) => `/recent-files/${id}`,
  not_found: "/404",
};

export default routes;
