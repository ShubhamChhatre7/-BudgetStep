import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Men from "@/pages/Men";
import Women from "@/pages/Women";
import Kids from "@/pages/Kids";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/kids" component={Kids} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
