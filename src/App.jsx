import { useState, useCallback } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PullQuote from "./components/PullQuote";
import TimelineSection from "./components/TimelineSection";
import LawsSection from "./components/LawsSection";
import ArchetypesSection from "./components/ArchetypesSection";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [section, setSection] = useState("hero");

  const go = useCallback((id) => {
    setSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app">
      <Nav section={section} go={go} />

      {section === "hero" && (
        <>
          <Hero go={go} />
          <PullQuote />
          <TimelineSection />
          <LawsSection />
          <ArchetypesSection />
          <PullQuote />
          <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
            <button
              className="btn btn-p"
              onClick={() => go("chat")}
              style={{ fontSize: ".78rem", padding: "1.1rem 2.5rem" }}
            >
              Ask the Book →
            </button>
          </div>
        </>
      )}

      {section === "timeline" && (
        <>
          <div style={{ height: 56 }} />
          <TimelineSection />
        </>
      )}

      {section === "laws" && (
        <>
          <div style={{ height: 56 }} />
          <LawsSection />
        </>
      )}

      {section === "archetypes" && (
        <>
          <div style={{ height: 56 }} />
          <ArchetypesSection />
        </>
      )}

      {section === "chat" && (
        <>
          <div style={{ height: 56 }} />
          <Chatbot />
        </>
      )}

      <footer className="ft">
        <p className="ftx">
          The Same Humans · The pattern is old. The technology is new. The humans are the same.
        </p>
      </footer>
    </div>
  );
}
