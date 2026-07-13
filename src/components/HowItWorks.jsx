function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          How Pivot Works
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Three simple steps to help you move forward.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold">Share Your Story</h3>
            <p className="mt-3 text-slate-600">
              Tell Pivot what changed and what you're hoping for.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold">AI Understands You</h3>
            <p className="mt-3 text-slate-600">
              AI reflects on your strengths, interests, and new possibilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold">Build Your Next Chapter</h3>
            <p className="mt-3 text-slate-600">
              Receive a personalized roadmap and practical next steps.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;