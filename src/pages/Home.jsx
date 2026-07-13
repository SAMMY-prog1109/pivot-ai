import Navbar from "../components/Navbar";
import WhyPivot from "../components/WhyPivot";
import HowItWorks from "../components/HowItWorks";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            Built for students and professionals navigating unexpected change
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Your dream changed.
            <br />
            <span className="text-indigo-600">
              Your future doesn't have to.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-600 leading-8">
           When life changes your plans, it's easy to feel lost. Pivot helps you reflect on your journey, discover new possibilities, and build a practical roadmap for what comes next—with thoughtful AI guidance.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
           <button onClick={() => navigate("/story")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg transition flex items-center gap-2">
              Tell Your Story
            </button>

            <button className="border border-slate-300 hover:border-indigo-500 px-8 py-4 rounded-full text-lg transition">
              See How It Works
            </button>
          </div>
        
        </section>   
      </main>

        <WhyPivot />
        <HowItWorks />
    </>
  );
}

export default Home