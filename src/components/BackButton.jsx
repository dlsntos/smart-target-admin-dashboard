import { useNavigate } from "react-router-dom";

function BackButton({ label = "Back to Dashboard" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="inline-flex items-center px-4 py-2 mb-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
    >
      <span className="mr-2">&#8592;</span>
      {label}
    </button>
  );
}

export default BackButton;