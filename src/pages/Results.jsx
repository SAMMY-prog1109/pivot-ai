import { Sparkles, Compass, Rocket, CheckCircle } from "lucide-react";

export default function Results() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-violet-600" />
          <h1 className="text-5xl font-bold">
            Your Pivot Plan
          </h1>
        </div>

        <p className="text-gray-600 text-lg mb-12">
          Based on your story, here's a roadmap designed just for you.
        </p>

        {/* AI Summary */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            AI Reflection
          </h2>

          <p className="text-gray-700 leading-8">
            You've shown resilience through unexpected change.
            While your path shifted, your passion hasn't disappeared.
            This transition may become the beginning of something even
            greater than your original plan.
          </p>

        </div>

        {/* Strengths */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <div className="flex items-center gap-2 mb-5">
            <CheckCircle className="text-green-500" />
            <h2 className="text-2xl font-bold">
              Your Strengths
            </h2>
          </div>

          <ul className="space-y-3">

            <li>✔ Adaptable</li>

            <li>✔ Creative</li>

            <li>✔ Resilient</li>

            <li>✔ Willing to learn</li>

          </ul>

        </div>

        {/* Suggestions */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <div className="flex items-center gap-2 mb-5">
            <Compass className="text-violet-600"/>
            <h2 className="text-2xl font-bold">
              Suggested Paths
            </h2>
          </div>

          <ul className="space-y-3">

            <li>Explore a related career</li>

            <li>Take an online course</li>

            <li>Talk to a mentor</li>

            <li>Build a personal project</li>

          </ul>

        </div>

        {/* Action */}

        <div className="bg-violet-600 text-white rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-4">

            <Rocket />

            <h2 className="text-2xl font-bold">
              Your First Mission
            </h2>

          </div>

          <p className="text-lg">
            Spend one hour this week exploring one new opportunity that excites you.
            Small actions create big pivots.
          </p>

        </div>

      </div>

    </div>
  );
}