import { useState } from "react";
function Feedback() {
  const sampleFeedback = [
    {
      email: "notarealemail9@gmail.com",
      message:
        "The whole store was very accommodating. However the long sleeves that I am looking for is not here",
      date: "2024-06-01",
    },
    {
      email: "dalengdalen@gmail.com",
      message:
        "Ang dali gamitin ng site, nakikita ko agad yung kulay at size na available. Sana mas madagdagan pa yung stock ng oversized shirts kasi mabilis maubos!",
      date: "2024-06-01",
    },
    {
      email: "superflocious9@gmail.com",
      message:
        "Maganda yung site kasi hindi puro lalaki lang—napansin ko may pang-babae na rin sa display, kaya mas confident ako bumili.",
      date: "2024-06-02",
    },
    {
      email: "realread9do@gmail.com",
      message:
        "Medyo nakalilito sa umpisa kung saan makikita yung cart, pero once nakita ko na, smooth na yung checkout.",
      date: "2024-06-02",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const feedbackPerPage = 5;

  const indexOfLast = currentPage * feedbackPerPage;
  const indexOfFirst = indexOfLast - feedbackPerPage;
  const currentFeedback = sampleFeedback.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sampleFeedback.length / feedbackPerPage);
  return (
    <div className="flex flex-col items-center h-[calc(100vh-5rem)] ml-64">
      <div className="space-y-4">
        {currentFeedback.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 border border-gray-700 rounded-xl p-4 shadow-md"
          >
            <p className="font-semibold text-gray-200">{item.email}</p>
            <p className="text-gray-400 text-sm">{item.date}</p>
            <p className="text-gray-300 mt-2">“{item.message}”</p>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-200">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Feedback;
