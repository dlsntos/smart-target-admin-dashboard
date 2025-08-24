function Feedback() {
  const sampleFeedback = [
    {
      email: "notarealemail9@gmail.com",
      message:
        "The whole store was very accommodating. However the long sleeves that I am looking for is not here",
    },
    {
      email: "dalengdalen@gmail.com",
      message:
        "Ang dali gamitin ng site, nakikita ko agad yung kulay at size na available. Sana mas madagdagan pa yung stock ng oversized shirts kasi mabilis maubos!",
    },
    {
      email: "superflocious9@gmail.com",
      message:
        "Maganda yung site kasi hindi puro lalaki lang—napansin ko may pang-babae na rin sa display, kaya mas confident ako bumili.",
    },
    {
      email: "realread9do@gmail.com",
      message:
        "Medyo nakalilito sa umpisa kung saan makikita yung cart, pero once nakita ko na, smooth na yung checkout.",
    },
  ];
  return (
    <div className="flex flex-col items-center h-[calc(100vh-5rem)] ml-64">
			<div className="space-y-4">
        {sampleFeedback.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 border border-gray-700 rounded-xl p-4 shadow-md"
          >
            <p className="font-semibold text-gray-200">{item.email}</p>
            <p className="text-gray-300 mt-2">“{item.message}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Feedback;
