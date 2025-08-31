import { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import { createSale } from "../../api/api";
import { fetchSalesData } from "../../api/api";
function Sales() {
  //list of products
  const products = [
    { name: "Blue", price: 1200 },
    { name: "Maroon-shirt", price: 200 },
    { name: "Red-shirt", price: 350 },
  ];

  //generate current date
  function getTodayPH() {
    return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
  }

  //state that hold api sales data
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //{ product: "Blue", price: 1200, demographic: "Teen female", used: "yes", date: "2025-08-20" },
  //{ product: "Maroon-shirt", price: 200, demographic: "Adult Female", used: "no", date: "2025-08-21" },
  //{ product: "Red-shirt", price: 350, demographic: "Teen Male", used: "yes", date: "2025-08-22" },

  // Use States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    product: "",
    price: "",
    demographic: "",
    used: false,
    date: getTodayPH(),
  });

  //change document title
  useEffect(() => {
    document.title = "Sales Tracker";
  }, []);

  useEffect(() => {
    // Function to update date to PH time
    const updateDate = () => {
      setFormData((prev) => ({
        ...prev,
        date: getTodayPH(),
      }));
    };
    // Calculate time until PH midnight
    const now = new Date();
    const phNow = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Manila" })
    );
    const nextMidnightPH = new Date(phNow);
    nextMidnightPH.setHours(24, 0, 0, 0); // midnight next day in PH

    const msUntilMidnight = nextMidnightPH - phNow;

    // First timer: until next midnight
    const timeout = setTimeout(() => {
      updateDate();
      // Then, every 24 hours
      setInterval(updateDate, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "used") {
      setFormData({ ...formData, used: value === "Yes" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createSale(formData);
      setSales((prev) => [...prev, response.data]); // instant render
      alert(`Sale recorded! ID: ${response.data.id}`);
      setFormData({
        product: "",
        price: "",
        demographic: "",
        used: false,
        date: getTodayPH(),
      });
    } catch (err) {
      console.error("Error creating sale:", err);
      alert("Failed to record sale.");
    }
  };

  //Fetch Sales data
  const fetchSales = async (showLoading = false) => {
    try {
      if (showLoading) setLoading(true);
      setError(null); // reset error
      const res = await fetchSalesData();
      setSales(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch Sales Data");
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    // initial load with loading spinner
    fetchSales(true);

    // refresh silently every 5s without flashing loading
    const interval = setInterval(() => fetchSales(false), 5000);

    return () => clearInterval(interval);
  }, []);

  // Pagination Calculations
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSales = sales.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.max(1, Math.ceil(sales.length / itemsPerPage));

  return (
    <div className="flex flex-col items-center h-full ml-0 lg:ml-64 px-5 py-4 lg:py-5">
      <div className="w-full flex justify-end lg:justify-start mb-4">
        <BackButton />
      </div>
      <h1 className="font-lupio text-gray-100 text-xl sm:text-2xl mb-4">
        Sales Tracker
      </h1>
      {/* Sales Product Tracking input container */}
      <div className="w-full lg:w-[1100px] py-5 bg-gray-400">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row flex-wrap justify-evenly"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
            <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">Product</label>
            <select
              name="product"
              value={formData.product}
              onChange={(e) => {
                const selectedName = e.target.value;
                if (selectedName === "") {
                  setFormData({
                    ...formData,
                    product: "",
                    price: 0,
                  });
                  return;
                }
                setFormData((prev) => ({
                  ...prev,
                  product: selectedName,
                  price: 0,
                }));
                const selected = products.find((p) => p.name === selectedName);
                if (selected) {
                  setTimeout(() => {
                    setFormData((prev) => ({
                      ...prev,
                      price: selected.price,
                    }));
                  }, 0);
                }
              }}
              required
              className="w-full sm:w-auto p-2 border rounded"
            >
              <option value="">-- Select a product --</option>
              {products.map((p, id) => (
                <option key={id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
            <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">Price</label>
            <input
              type="number"
              step="any"
              min="0"
              name="price"
              value={formData.price}
              onChange={handleChange}
              readOnly
              className="w-full sm:w-auto p-2 border rounded"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
            <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              readOnly
              className="w-full sm:w-auto p-2 border rounded"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
            <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">
              Demographic
            </label>
            <select
              name="demographic"
              value={formData.demographic}
              onChange={handleChange}
              required
              className="w-full sm:w-auto p-2 border rounded"
            >
              <option value="">-- Select gender --</option>
              <option value="Teen Male">Teen Male</option>
              <option value="Teen Female">Teen Female</option>
              <option value="Adult Male">Adult Male</option>
              <option value="Adult Female">Adult Female</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
            <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">Use</label>
            <select
              name="used"
              value={formData.used ? "Yes" : "No"}
              onChange={handleChange}
              required
              className="w-full sm:w-auto p-2 border rounded"
            >
              <option value="">-- Select use --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="p-3 w-full sm:w-auto flex justify-start sm:justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto p-3 bg-gray-500 rounded text-white"
            >
              Add to Sales
            </button>
          </div>
        </form>
      </div>

      {/* Table of sold items */}
      <div className="w-full lg:w-[1100px] mt-6">
        {loading && <p className="text-gray-400">Loading sales...</p>}
        {error && <p className="text-red-400">{error}</p>}
        <table className="w-full border">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="border p-2">Product</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Demographic</th>
              <th className="border p-2">Use System</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-gray-100">
            {currentSales.map((sale, id) => (
              <tr key={sale.id}>
                <td className="border p-2">{sale.product}</td>
                <td className="border p-2">{sale.price}</td>
                <td className="border p-2">{sale.demographic}</td>
                <td className="border p-2">{sale.used ? "Yes" : "No"}</td>
                <td className="border p-2">
                  {sale.date ? sale.date.split("T")[0] : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-center items-center pb-10 lg:pb-0">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50 w-full sm:w-auto"
          >
            Prev
          </button>
          <span className="text-gray-200 mt-1 sm:mt-0 mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-600 text-white disabled:opacity-50 w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sales;
