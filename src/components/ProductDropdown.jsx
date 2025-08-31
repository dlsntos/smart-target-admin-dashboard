import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDropdown({ formData, setFormData }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (!selectedId) {
      setFormData({ ...formData, product: "", price: 0 });
      return;
    }
    const selected = products.find((p) => p.id === parseInt(selectedId));
    if (selected) {
      setFormData({ ...formData, product: selected.name, price: selected.price });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 w-full sm:w-auto">
      <label className="block mr-0 sm:mr-5 mb-1 sm:mb-0">Product</label>
      <select
        name="product"
        value={
          formData.product
            ? products.find((p) => p.name === formData.product)?.id || ""
            : ""
        }
        onChange={handleChange}
        required
        className="max-h-52 overflow-y-auto w-full sm:w-64 p-2 border rounded bg-gray-50 dark:bg-gray-200"
      >
        <option value="">-- Select a product --</option>
        {loading ? (
          <option disabled>Loading...</option>
        ) : (
          products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
