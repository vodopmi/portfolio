
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Message } from "./components/Message";
import { TrackRecord } from "./components/TrackRecord";
import { CoworkersThoughts } from "./components/CoworkersThoughts";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster"
import "./App.css";









function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Message />
      <Projects />
      <TrackRecord />
      <CoworkersThoughts />
      <Contact />
      <Toaster />
      <Analytics />
    </>
  );
}

export default App;
