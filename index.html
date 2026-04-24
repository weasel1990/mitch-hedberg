import { useState, useRef } from "react";

const SYSTEM_PROMPT = `You are a joke writer who has deeply studied every Mitch Hedberg special, interview, and recording. Your job is to write NEW jokes in Mitch Hedberg's exact style about any topic given to you.

Mitch Hedberg's style rules:
- Very short. One to three sentences max per joke. No long setups.
- Anti-joke structure: the punchline reframes or subverts a mundane observation
- Deadpan, first-person, slightly confused by the world
- Often uses wordplay, literal interpretations, or absurdist logic leaps
- Topics: everyday objects, food, animals, signs, jobs, vending machines, hotel rooms — mundane things made strange
- Stammers, hedges, trails off ("man", "I think", "I used to", "I like", "You know what...")
- Callbacks within the same joke sometimes
- Never political, never edgy, never mean — just weird and sweet
- Pacing: the jokes feel like they end too soon on purpose

Return ONLY 3 jokes, numbered 1-3. No intro, no explanation, no commentary. Just the jokes. Each joke on its own line. Do not use quotation marks around the jokes.`;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Cousine:ital,wght@0,400;0,700;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .stage {
    min-height: 100vh;
    background: #0a0806;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,180,50,0.12) 0%, transparent 70%),
      radial-gradient(ellipse 40% 30% at 50% 5%, rgba(255,220,100,0.08) 0%, transparent 60%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px 64px;
    font-family: 'Cousine', monospace;
    color: #e8d5a3;
    position: relative;
    overflow: hidden;
  }

  .spotlight {
    position: fixed;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 320px;
    background: radial-gradient(ellipse at top, rgba(255,210,80,0.07) 0%, transparent 75%);
    pointer-events: none;
    z-index: 0;
  }

  .header {
    text-align: center;
    margin-bottom: 48px;
    position: relative;
    z-index: 1;
  }

  .mic-icon {
    font-size: 32px;
    margin-bottom: 12px;
    display: block;
    filter: drop-shadow(0 0 12px rgba(255,200,60,0.5));
    animation: bob 3s ease-in-out infinite;
  }

  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .title {
    font-family: 'Special Elite', cursive;
    font-size: clamp(28px, 7vw, 52px);
    color: #f5d87a;
    letter-spacing: 0.04em;
    text-shadow:
      0 0 30px rgba(255,210,60,0.4),
      0 0 80px rgba(255,180,30,0.15);
    line-height: 1.1;
    margin-bottom: 6px;
  }

  .subtitle {
    font-family: 'Cousine', monospace;
    font-size: 11px;
    letter-spacing: 0.25em;
    color: rgba(232,213,163,0.4);
    text-transform: uppercase;
    margin-top: 10px;
  }

  .divider {
    width: 120px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(245,216,122,0.3), transparent);
    margin: 24px auto 0;
  }

  .input-area {
    width: 100%;
    max-width: 520px;
    position: relative;
    z-index: 1;
    margin-bottom: 32px;
  }

  .input-label {
    display: block;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(232,213,163,0.5);
    margin-bottom: 10px;
  }

  .input-row {
    display: flex;
    gap: 10px;
  }

  .topic-input {
    flex: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(245,216,122,0.2);
    border-radius: 3px;
    padding: 14px 18px;
    font-family: 'Cousine', monospace;
    font-size: 15px;
    color: #f0dfa0;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .topic-input::placeholder {
    color: rgba(232,213,163,0.25);
    font-style: italic;
  }

  .topic-input:focus {
    border-color: rgba(245,216,122,0.5);
    box-shadow: 0 0 20px rgba(245,216,122,0.06);
  }

  .go-btn {
    background: rgba(245,216,122,0.12);
    border: 1px solid rgba(245,216,122,0.35);
    border-radius: 3px;
    padding: 14px 22px;
    font-family: 'Special Elite', cursive;
    font-size: 15px;
    color: #f5d87a;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    letter-spacing: 0.05em;
  }

  .go-btn:hover:not(:disabled) {
    background: rgba(245,216,122,0.2);
    box-shadow: 0 0 20px rgba(245,216,122,0.1);
  }

  .go-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  .suggestion-chip {
    background: transparent;
    border: 1px solid rgba(232,213,163,0.15);
    border-radius: 20px;
    padding: 5px 14px;
    font-family: 'Cousine', monospace;
    font-size: 11px;
    color: rgba(232,213,163,0.4);
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.05em;
  }

  .suggestion-chip:hover {
    border-color: rgba(245,216,122,0.4);
    color: rgba(245,216,122,0.8);
  }

  .jokes-area {
    width: 100%;
    max-width: 520px;
    position: relative;
    z-index: 1;
  }

  .loading {
    text-align: center;
    padding: 48px 0;
    color: rgba(232,213,163,0.4);
    font-size: 13px;
    letter-spacing: 0.15em;
  }

  .loading-dots span {
    display: inline-block;
    animation: blink 1.4s infinite;
    font-size: 20px;
  }
  .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
  .loading-dots span:nth-child(3) { animation-delay: 0.4s; }

  @keyframes blink {
    0%, 80%, 100% { opacity: 0.1; }
    40% { opacity: 1; }
  }

  .joke-card {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(245,216,122,0.1);
    border-left: 2px solid rgba(245,216,122,0.4);
    border-radius: 0 3px 3px 0;
    padding: 22px 24px;
    margin-bottom: 16px;
    animation: fadeUp 0.4s ease both;
    position: relative;
  }

  .joke-card:nth-child(2) { animation-delay: 0.1s; }
  .joke-card:nth-child(3) { animation-delay: 0.2s; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .joke-number {
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(245,216,122,0.35);
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .joke-text {
    font-family: 'Cousine', monospace;
    font-size: 15px;
    line-height: 1.7;
    color: #eedfa5;
    font-style: italic;
  }

  .topic-tag {
    display: inline-block;
    margin-top: 10px;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(232,213,163,0.25);
    text-transform: uppercase;
  }

  .error {
    background: rgba(255,80,80,0.06);
    border: 1px solid rgba(255,80,80,0.2);
    border-radius: 3px;
    padding: 16px 20px;
    color: rgba(255,150,150,0.7);
    font-size: 13px;
    text-align: center;
  }

  .footer {
    margin-top: 64px;
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(232,213,163,0.18);
    text-transform: uppercase;
    z-index: 1;
    position: relative;
  }
`;

const SUGGESTIONS = ["escalators", "hotel rooms", "DoorDash", "AirPods", "pigeons", "self-checkout", "email", "vending machines", "elevators", "WiFi"];

export default function MitchGenerator() {
  const [topic, setTopic] = useState("");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastTopic, setLastTopic] = useState("");
  const inputRef = useRef(null);

  const generate = async (t) => {
    const finalTopic = (t || topic).trim();
    if (!finalTopic) return;
    setLoading(true);
    setError("");
    setJokes([]);
    setLastTopic(finalTopic);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: `Write 3 Mitch Hedberg-style jokes about: ${finalTopic}` }]
        })
      });

      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
      const cleaned = lines.map(l => l.replace(/^\d+[\.\)]\s*/, "")).filter(l => l.length > 10);
      setJokes(cleaned.slice(0, 3));
    } catch (e) {
      setError("Something went wrong. Try again, man.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") generate();
  };

  const pickSuggestion = (s) => {
    setTopic(s);
    generate(s);
    inputRef.current?.focus();
  };

  return (
    <>
      <style>{styles}</style>
      <div className="stage">
        <div className="spotlight" />

        <div className="header">
          <span className="mic-icon">🎤</span>
          <div className="title">Mitch Hedberg</div>
          <div className="title" style={{ fontSize: "clamp(16px, 4vw, 26px)", color: "rgba(245,216,122,0.6)", marginTop: 4 }}>Joke Machine</div>
          <div className="subtitle">AI-generated • his spirit, new material</div>
          <div className="divider" />
        </div>

        <div className="input-area">
          <label className="input-label">Give me a topic, man</label>
          <div className="input-row">
            <input
              ref={inputRef}
              className="topic-input"
              placeholder="e.g. escalators, pigeons, wifi..."
              value={topic}
              onChange={e => setTopic(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="go-btn" onClick={() => generate()} disabled={loading || !topic.trim()}>
              {loading ? "..." : "Tell it"}
            </button>
          </div>
          <div className="suggestions">
            {SUGGESTIONS.map(s => (
              <button key={s} className="suggestion-chip" onClick={() => pickSuggestion(s)}>{s}</button>
            ))}
          </div>
        </div>

        <div className="jokes-area">
          {loading && (
            <div className="loading">
              <div className="loading-dots">
                <span>•</span><span>•</span><span>•</span>
              </div>
              <div style={{ marginTop: 16 }}>writing jokes...</div>
            </div>
          )}

          {error && <div className="error">{error}</div>}

          {!loading && jokes.map((joke, i) => (
            <div className="joke-card" key={i}>
              <div className="joke-number">joke {i + 1}</div>
              <div className="joke-text">{joke}</div>
              <div className="topic-tag">#{lastTopic}</div>
            </div>
          ))}
        </div>

        <div className="footer">
          In memory of Mitch Hedberg · 1968–2005 · R.I.P. man
        </div>
      </div>
    </>
  );
}
