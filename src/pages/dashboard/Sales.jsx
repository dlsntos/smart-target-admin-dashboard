import {useState} from 'react';

function Sales () {
	const [sales, setSales] = useState([
		{ product: "Blue", price: 1200, date: "2025-08-20" },
		{ product: "Maroon-shirt", price: 200, date: "2025-08-21" },
		{ product: "Red-shirt", price: 350, date: "2025-08-22" },
	]);

	const [salesFormData, setSalesFormData] = useState({
  	product: "",
  	price: "",
  	date: "",
	});
	
	const handleChange = (e) => {
		setSalesFormData({ ...salesFormData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSales([...sales, salesFormData]); // add new sale
		setSalesFormData({ product: "", price: "", date: "" }); // clear form
	};

	return(
		<div className="h-full ml-64 px-10 py-6">
		{/** input form */}
			<h1 className="font-lupio text-gray-100">Sales Tracker</h1>
			<div className="w-full py-5 bg-gray-400">
				<h2>Input Sales</h2>
				<form onSubmit={handleSubmit} className="flex justify-evenly">
					<div className="flex items-center p-3">
						<label className="block mr-5">Product</label>
						<input
							type="text"
							name="product"
							value={salesFormData.product}
							required
							className="w-full p-2 border rounded"
						/>
					</div>
						<div className="flex items-center p-3">
						<label className="block mr-5">Price</label>
						<input
							type="number"
							name="price"
							value={salesFormData.price}
							onChange={handleChange}
							required
							className="w-full p-2 border rounded"
						/>
					</div>
						<div className="flex items-center p-3">
						<label className="block mr-5">Date</label>
						<input
							type="date"
							name="date"
							required
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
			<div>
				<table className="w-full border mt-16">
					<thead className="bg-gray-200 text-gray-800">
						<tr>
							<th className="border p-2">Product</th>
							<th className="border p-2">Price</th>
							<th className="border p-2">Date</th>
						</tr>
					</thead>
					<tbody className='bg-gray-800 text-gray-100'>
						{sales.map((sale, id) => (
							<tr key={id}>
								<td className="border p-2">{sale.product}</td>
								<td className="border p-2">{sale.amount}</td>
								<td className="border p-2">{sale.date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default Sales;