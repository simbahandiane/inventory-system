import Image from "next/image";



export default function Home() {
  const products = [
    {
      id: 1,
      name: "Test",
      sizes: "S, M, L, XL",
      price: 699,
      status: "OUT OF STOCK",
    },
  ];

  const getStatusColor = (status : string) => {
    switch (status) {
      case "OUT OF STOCK":
        return "text-red-500";
      case "LOW STOCK":
        return "text-yellow-500";
      case "IN STOCK":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
            + Add Item
          </button>
          <button className="bg-white border px-4 py-2 rounded-xl shadow">
            Refresh
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Products" value="120" />
        <Card title="Inventory Sales" value="85" />
        <Card title="Low Stock Item" value="15" />
        <Card title="Out of Stock Item" value="8" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">ID</th>
              <th className="py-2">Product</th>
              <th className="py-2">Sizes</th>
              <th className="py-2">Price</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.id}</td>
                <td className="py-2">{p.name}</td>
                <td className="py-2">{p.sizes}</td>
                <td className="py-2">{p.price}</td>
                <td className={`py-2 font-medium ${getStatusColor(p.status)}`}>
                  {p.status}
                </td>
                <td className="py-2 flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}