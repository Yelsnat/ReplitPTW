import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { PageTransition } from "@/components/layout/page-transition";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Source from "@/pages/source";
import Products from "@/pages/products";
import Delivery from "@/pages/delivery";
import Contact from "@/pages/contact";
import Dream from "@/pages/dream";
import Site from "@/pages/site";
import Commitment from "@/pages/commitment";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/source" component={Source} />
        <Route path="/products" component={Products} />
        <Route path="/commitment" component={Commitment} />
        <Route path="/site" component={Site} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/contact" component={Contact} />
        <Route path="/dream" component={Dream} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
