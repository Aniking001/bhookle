
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Business from "./pages/Business";
import BusinessThankYou from "./pages/BusinessThankYou";
import ChefSignup from "./pages/ChefSignup";
import ChefThankYou from "./pages/ChefThankYou";
import NotFound from "./pages/NotFound";
import ContactUs from './pages/ContactUs';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/thankyou" element={<BusinessThankYou />} />
          <Route path="/chef-signup" element={<ChefSignup />} />
          <Route path="/chef-signup/thankyou" element={<ChefThankYou />} />
          <Route path="/contacts" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
