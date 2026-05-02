export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Incident Response Playbooks,{" "}
          <span className="text-[#58a6ff]">Generated in Seconds</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Describe your service architecture and past incidents. Get AI-generated step-by-step runbooks, escalation paths, and communication templates — tailored to your stack.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start for $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card lock-in.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Architecture-Aware", desc: "Input your services, dependencies, and SLAs to get context-specific procedures." },
            { title: "Incident History", desc: "Feed past postmortems to train playbooks on real failure patterns." },
            { title: "Ready to Deploy", desc: "Export to Confluence, Notion, PagerDuty, or plain Markdown instantly." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited playbook generations",
              "Custom service architecture inputs",
              "Incident history analysis",
              "Escalation path builder",
              "Communication templates",
              "Export to Markdown, Notion, Confluence"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI generate playbooks?",
              a: "You describe your service topology, dependencies, and any past incidents. The AI analyzes failure patterns and produces step-by-step runbooks with escalation paths and comms templates specific to your stack."
            },
            {
              q: "Can I use my existing postmortems?",
              a: "Yes. Paste or upload past incident reports and the system extracts patterns to make future playbooks more accurate and relevant to your environment."
            },
            {
              q: "What export formats are supported?",
              a: "Playbooks can be exported as Markdown, or pushed directly to Notion and Confluence. PagerDuty runbook integration is on the roadmap."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Incident Playbook Builder. All rights reserved.
      </footer>
    </main>
  );
}
