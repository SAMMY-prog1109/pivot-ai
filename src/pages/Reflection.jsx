import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Reflection() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    challenge: "",
    passion: "",
    future: "",
  });
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center px-6">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10">

        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          Step 2 of 4
        </span>

        <h1 className="text-4xl font-bold mt-6">
          Let's Understand You Better
        </h1>

        <p className="text-slate-600 mt-4">
          Answer these questions honestly. Your answers help Pivot create more meaningful guidance.
        </p>

        <div className="mt-10 space-y-8">

          <div>
            <label className="font-semibold">
              What has been the hardest part of this experience?
            </label>

            <textarea
              className="w-full mt-2 border rounded-xl p-4"
              rows="3"
              value={answers.challenge}
              onChange={(e) =>
                setAnswers({ ...answers, challenge: e.target.value })
              }
            />
          </div>

          <div>
            <label className="font-semibold">
              What are you still passionate about?
            </label>

            <textarea
              className="w-full mt-2 border rounded-xl p-4"
              rows="3"
              value={answers.passion}
              onChange={(e) =>
                setAnswers({ ...answers, passion: e.target.value })
              }
            />
          </div>

          <div>
            <label className="font-semibold">
              If nothing held you back, what future would you love to build?
            </label>

            <textarea
              className="w-full mt-2 border rounded-xl p-4"
              rows="3"
              value={answers.future}
              onChange={(e) =>
                setAnswers({ ...answers, future: e.target.value })
              }
            />
          </div>

        </div>

        <button onClick={() => navigate("/results")}>
  Continue
</button>

      </div>
    </div>
  );
}

export default Reflection;