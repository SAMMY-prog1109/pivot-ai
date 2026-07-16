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

        <div className="mb-8">

  <div className="flex justify-between text-sm mb-2">

    <span className="font-semibold text-violet-600">
      Step 2 of 4
    </span>

    <span>
      50%
    </span>

  </div>

  <div className="w-full h-2 bg-gray-200 rounded-full">

    <div className="w-1/2 h-2 bg-violet-600 rounded-full"></div>

  </div>

</div>

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

        <button
  onClick={() => navigate("/loading")}
  className="mt-8 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
>
  Continue
  <ArrowRight size={20} />
</button>

      </div>
    </div>
  );
}

export default Reflection;