import {useState, useEffect} from 'react';

function Sales () {
	//list of products
	const products = [
		{name: "Blue", price: 1200},
		{name: "Maroon-shirt", price: 200},
		{name: "Red-shirt", price: 350}
	];

	//generate current date
	function getTodayPH() {
		return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
	}

	const [sales, setSales] = useState([
		{ product: "Blue", price: 1200, date: "2025-08-20" },
		{ product: "Maroon-shirt", price: 200, date: "2025-08-21" },
		{ product: "Red-shirt", price: 350, date: "2025-08-22" },
	]);

	// Use States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

	const [formData, setFormData] = useState({
  	product: "",
  	price: "",
  	date: getTodayPH(),
	});
	
	useEffect(() => {
  // Function to update date to PH time
		const updateDate = () => {
			setFormData(prev => ({
				...prev,
				date: getTodayPH()
			}));
		};
		// Calculate time until PH midnight
		const now = new Date();
		const phNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
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
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSales([...sales, formData]); // add new sale
		setFormData({ product: "", price: "", date: getTodayPH() }); // clear form
	};

	// Pagination Calculations
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSales = sales.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.max(1, Math.ceil(sales.length / itemsPerPage));

	return(
		<div className="flex flex-col items-center h-full ml-64 px-10 py-6">
		{/** input form */}
			<h1 className="font-lupio text-gray-100">Sales Tracker</h1>
			<div className="w-[1100px] py-5 bg-gray-400">
				<h2>Input Sales</h2>
				<form onSubmit={handleSubmit} className="flex justify-evenly">
					<div className="flex items-center p-3">
						<label className="block mr-5">Product</label>
						<select
							name="product"
							value={formData.product}
							onChange={(e) => {
								const selectedName = e.target.value;
								if (selectedName === "") {
								// reset form if no product
									setFormData({
										...formData,
										product: "",
										price: 0
									});
									return;
								}
								// reset to 0 first
								setFormData(prev => ({
									...prev,
									product: selectedName,
									price: 0
								}));
								// then update with actual product price
								const selected = products.find(p => p.name === selectedName);
								if (selected) {
									setTimeout(() => {
										setFormData(prev => ({
											...prev,
											price: selected.price
										}));
									}, 0); // tiny delay so reset happens first
									}
								}}
								required
								className="w-full p-2 border rounded"
							>
								<option value="">-- Select a product --</option>
								{products.map((p, id) => (
									<option key={id} value={p.name}>
										{p.name}
									</option>
								))}
							</select>
					</div>
					<div className="flex items-center p-3">
						<label className="block mr-5">Price</label>
						<input
							type="number"
							step="any"
							min="0"
							name="price"
							value={formData.price}
							onChange={handleChange}
							readOnly
							className="w-full p-2 border rounded"
						/>
					</div>
						<div className="flex items-center p-3">
						<label className="block mr-5">Date</label>
						<input
							type="date"
							name="date"
							value={formData.date}
  						onChange={handleChange}
							readOnly
							className="w-full p-2 border rounded"
						/>
					</div>
					<button 
						type="submit" 
						className="p-5 bg-gray-500">
							Add to Sales
					</button>
				</form>
			</div>
			{/** Table of Sales */}
			<div className="w-[1100px]">
				<table className="w-full border mt-16">
					<thead className="bg-gray-200 text-gray-800">
						<tr>
							<th className="border p-2">Product</th>
							<th className="border p-2">Price</th>
							<th className="border p-2">Date</th>
						</tr>
					</thead>
					<tbody className='bg-gray-800 text-gray-100'>
						{currentSales.map((sale, id) => (
							<tr key={id}>
								<td className="border p-2">{sale.product}</td>
								<td className="border p-2">{sale.price}</td>
								<td className="border p-2">{sale.date}</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* Pagination Controls */}
        <div className="flex gap-2 mt-6 justify-center">
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
		</div>
	);
}
export default Sales;