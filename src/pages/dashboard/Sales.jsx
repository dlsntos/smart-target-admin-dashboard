function Sales () {
	return(
		<div className="h-full ml-64 px-10 py-6">
		{/** input form */}
			<h1 className="font-lupio text-gray-100">Sales Tracker</h1>
			<div className="w-full py-5 bg-gray-400">
				<h2>Input Sales</h2>
				<form className="flex justify-evenly">
					<div className="flex items-center p-3">
						<label className="block mr-5">Product</label>
						<input
							type="text"
							name="product"
							required
							className="w-full p-2 border rounded"
						/>
					</div>
						<div className="flex items-center p-3">
						<label className="block mr-5">Price</label>
						<input
							type="text"
							name="product"
							required
							className="w-full p-2 border rounded"
						/>
					</div>
						<div className="flex items-center p-3">
						<label className="block mr-5">Date</label>
						<input
							type="text"
							name="product"
							required
							className="w-full p-2 border rounded"
						/>
					</div>
					<button className="p-5 bg-gray-500">Add to Sales</button>
				</form>
			</div>
		</div>
	);
}
export default Sales;