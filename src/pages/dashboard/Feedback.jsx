import { useState, useEffect} from "react";
import BackButton from "../../components/BackButton";
import {fetchFeedbackData} from '../../api/api';

function Feedback() {
  //state that hold api feedback data
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for pagination and filters
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [year, setYear] = useState("");
  const feedbackPerPage = 4;

  // Static months and days
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  //change document title
  useEffect(() => {
    document.title = "Feedback"
  },[]);

  //Fetch Feedback data
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setLoading(true);
        const res = await fetchFeedbackData(); 
        setFeedback(res.data);
      } catch (err) {
        setError("Failed to fetch feedback");
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));

  // Filtering logic
  const filteredFeedback = feedback.filter(fb => {
    const [fbYear, fbMonth, fbDay] = (fb.date || "").split("-");
    return (
      (selectedMonth === "" || fbMonth === selectedMonth) &&
      (selectedDay === "" || fbDay === selectedDay) &&
      (year === "" || fbYear === year)
    );
  });

  //pagination calculations
  const indexOfLast = currentPage * feedbackPerPage;
  const indexOfFirst = indexOfLast - feedbackPerPage;
  const currentFeedback = filteredFeedback.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.max(1, Math.ceil(filteredFeedback.length / feedbackPerPage));

  // Reset to page 1 when filter changes
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setCurrentPage(1);
  };
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    setCurrentPage(1);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setCurrentPage(1);
  };

  return (
  <div className="flex flex-col items-center h-full ml-0 lg:ml-64 px-5 py-4 lg:py-5">
    {/* Date Filter */}
    <div className="w-full flex justify-end lg:justify-start mb-4">
      <BackButton />
    </div>
    <div className="mb-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-2 items-start sm:items-center w-full sm:w-auto">
      <label className="text-gray-200">Month:</label>
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="px-2 py-1 rounded bg-gray-600 text-white w-full sm:w-auto"
      >
        <option value="">All</option>
        {months.map(month => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <label className="text-gray-200">Day:</label>
      <select
        value={selectedDay}
        onChange={handleDayChange}
        className="px-2 py-1 rounded bg-gray-600 text-white w-full sm:w-auto"
      >
        <option value="">All</option>
        {days.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <label className="text-gray-200">Year:</label>
      <input
        type="text"
        value={year}
        onChange={handleYearChange}
        placeholder="e.g. 2024"
        className="px-2 py-1 rounded bg-gray-600 text-white w-full sm:w-20"
      />
    </div>

    {/* Feedback Cards */}
    <div className="space-y-4 w-full">
      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && currentFeedback.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 border border-gray-700 rounded-xl p-4 shadow-md break-words"
        >
          <p className="font-semibold text-gray-200">{item.email}</p>
          <p className="text-gray-400 text-sm">{item.date}</p>
          <p className="text-gray-300 mt-2">“{item.message}”</p>
        </div>
      ))}
      {!loading && !error && currentFeedback.length === 0 && (
        <p className="text-gray-400">No feedback for this date.</p>
      )}
    </div>

    {/* Pagination Controls */}
    <div className="flex flex-col sm:flex-row gap-2 mt-6 items-center w-full sm:w-auto pb-10 md:pb-0">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50 w-full sm:w-auto"
      >
        Prev
      </button>
      <span className="text-gray-200 mx-2 mt-1 sm:mt-0">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50 w-full sm:w-auto"
      >
        Next
      </button>
    </div>
  </div>
);

}
export default Feedback;
