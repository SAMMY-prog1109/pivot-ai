import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Story() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10">

      <button onClick={() => navigate("/")} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 mb-6">
         <ArrowLeft size={18} />
            Back
      </button>

        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          Step 1 of 4
        </span>

        <h1 className="text-5xl font-bold mt-6 text-slate-900">
          Tell Your Story
        </h1>

        <p className="mt-5 text-lg text-slate-600 leading-8">
          This is a safe space.
Your story doesn't have to be perfect.
It just has to be yours.
        </p>

        <div className="mt-10">
          <label className="block text-lg font-semibold mb-3">
            What changed?
          </label>

          <textarea
            rows="8"
            placeholder="Example: Share what happened, how you're feeling, and what you're hoping for next..."
            className="w-full rounded-2xl border border-slate-300 p-5 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        <button onClick={() => navigate("/reflection")} className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition">
            Continue
            <ArrowRight size={20} />
        </button>

      </div>
    </div>
  );
}

export default Story;