import React from "react";
import Form from "./Form";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Admin from "./Admin";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  const { isAuthenticated } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/login",
      element: isAuthenticated ? (
        <Navigate to="/admin" replace />
      ) : (
        <AdminLogin />
      ),
    },
    {
      path: "/admin",
      element: isAuthenticated ? <Admin /> : <Navigate to="/login" replace />,
      // element: <Admin />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        containerStyle={{
          fontWeight: "bold",
          textAlign: "center",
          padding: "1.5rem",
        }}
        toastOptions={{
          success: {
            style: {
              duration: 3000,
            },
          },
          error: {
            duration: 5000,
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
