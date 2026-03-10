import { useState, useEffect, useRef, useCallback } from "react";
import { SYSTEM_PROMPT } from "../data/archetypes";

const SUGGESTIONS = [
  "What phase is AI in right now?",
  "Apply the Displacement Tax to my career",
  "What does the Monopoly Ratchet predict for AI?",
  "I'm a teacher — how should I think about AI?",
  "Who are today's Luddites?",
];

export default function Chatbot() {
  const [msgs, setMsgs] = useState([
    {
      role: "assistant",
      content:
        "I'm an expert on The Same Humans — the framework of five phases, eight archetypes, and eleven laws distilled from twelve thousand years of technological revolution. Ask me anything about the book's ideas, or tell me about your own situation and I'll help you apply the pattern.",
    },
  ]);
  const [inp, setInp] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = useCallback(
    async (text) => {
      const msg = text || inp;
      if (!msg.trim() || loading) return;

      const next = [...msgs, { role: "user", content: msg }];
      setMsgs(next);
      setInp("");
      setLoading(true);

      try {
        const apiMsgs = next.map((m) => ({ role: m.role, content: m.content }));
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            system: SYSTEM_PROMPT,
            messages: apiMsgs,
          }),
        });
        const data = await res.json();
        const reply =
          data.content?.map((b) => b.text || "").join("") ||
          "I'm having trouble connecting. Try again in a moment.";
        setMsgs((prev) => [...prev, { role: "assistant", content: reply }]);
      } catch {
        setMsgs((prev) => [
          ...prev,
          { role: "assistant", content: "Connection issue — please try again." },
        ]);
      }

      setLoading(false);
    },
    [inp, msgs, loading]
  );

  return (
    <section className="chat-sec" id="chat">
      <div className="sh">
        <div className="sl">AI-Powered</div>
        <h2 className="st">Ask the Book</h2>
        <p className="sd">
          An expert on the framework. Ask questions, apply the laws to your situation, or explore the
          pattern.
        </p>
      </div>

      <div className="cc">
        <div className="cw">
          <div className="cm">
            {msgs.map((m, i) => (
              <div key={i} className={`msg ${m.role === "assistant" ? "a" : "u"}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="msg a">
                <span className="ld-dots">Thinking across twelve thousand years...</span>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="cia">
            <input
              className="ci"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about the framework, a specific law, or your own situation..."
            />
            <button className="cs" onClick={() => send()} disabled={loading || !inp.trim()}>
              Send
            </button>
          </div>
        </div>
        <div className="sug">
          {SUGGESTIONS.map((s, i) => (
            <button key={i} className="sg" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
