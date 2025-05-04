export default function LeetCodeStats() {
  const stats = {
    Easy: 180,
    Medium: 290,
    Hard: 60,
    rating: 1720,
    topPercentage: 18.5,
    contests: 32,
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 to-slate-800/40 p-6 shadow-md border border-orange-400/30 text-white w-full max-w-xl">
      <h2 className="text-2xl font-bold text-orange-400 mb-4">
        📊 LeetCode Stats
      </h2>

      <div className="space-y-2 text-md">
        <p>
          <span className="font-semibold text-orange-300">Easy:</span>{" "}
          {stats.Easy}
        </p>
        <p>
          <span className="font-semibold text-orange-300">Medium:</span>{" "}
          {stats.Medium}
        </p>
        <p>
          <span className="font-semibold text-orange-300">Hard:</span>{" "}
          {stats.Hard}
        </p>
      </div>

      <div className="mt-4 space-y-1">
        <p>
          <span className="font-semibold text-orange-300">Rating:</span>{" "}
          {stats.rating}
        </p>
        <p>
          <span className="font-semibold text-orange-300">Top %:</span>{" "}
          {stats.topPercentage}%
        </p>
        <p>
          <span className="font-semibold text-orange-300">Contests:</span>{" "}
          {stats.contests}
        </p>
      </div>
    </div>
  );
}
