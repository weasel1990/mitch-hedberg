export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic } = req.body;
  if (!topic) {
    return res.status(400).json({ error: 'No topic provided' });
  }

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

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: `Write 3 Mitch Hedberg-style jokes about: ${topic}` }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: err?.error?.message || 'Anthropic API error' });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    const jokes = text
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0)
      .map(l => l.replace(/^\d+[\.\)]\s*/, ''))
      .filter(l => l.length > 10)
      .slice(0, 3);

    return res.status(200).json({ jokes });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Something went wrong' });
  }
}
