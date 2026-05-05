import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/TransactionsPage";
import Bills from "./pages/Bills";
import Goals from "./pages/Goals";
import Budgets from "./pages/Budgets";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const Protected = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute><AppLayout>{children}</AppLayout></ProtectedRoute>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Protected><Dashboard /></Protected>} />
          <Route path="/receitas" element={<Protected><TransactionsPage type="income" /></Protected>} />
          <Route path="/despesas" element={<Protected><TransactionsPage type="expense" /></Protected>} />
          <Route path="/contas" element={<Protected><Bills /></Protected>} />
          <Route path="/metas" element={<Protected><Goals /></Protected>} />
          <Route path="/orcamentos" element={<Protected><Budgets /></Protected>} />
          <Route path="/perfil" element={<Protected><Profile /></Protected>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
