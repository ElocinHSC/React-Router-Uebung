import { Routes, Route } from "react-router";
import {
  About,
  Contact,
  Destinations,
  Home,
  NotFound,
  SingleDestination,
} from "./pages";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<SingleDestination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
