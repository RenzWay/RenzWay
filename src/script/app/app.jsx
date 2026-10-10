import HomePage from "../pages/home";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <section>
      <HomePage />
      <Analytics />
    </section>
  );
}
