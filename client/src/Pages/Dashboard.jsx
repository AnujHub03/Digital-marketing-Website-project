import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const pages = [
    { name: "Gym Landing Page", url: "/page/gym", date: "12 Apr 2026" },
    { name: "Marketing Campaign", url: "/page/marketing", date: "10 Apr 2026" }
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold p-6 text-indigo-600">
            MarketPro
          </h1>

          <nav className="px-4 space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
              Dashboard
            </button>

            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              My Pages
            </button>

            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              Analytics
            </button>
          </nav>
        </div>

        <div className="p-4">
          <button
            onClick={logout}
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 flex flex-col">

        {/* 🔸 Top Navbar */}
        <div className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <h2 className="text-xl font-semibold">Dashboard</h2>

          <button
            onClick={() => navigate("/create")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Create Page
          </button>
        </div>

        {/* 🔸 Content Area */}
        <div className="p-6 overflow-y-auto">

          {/* 🔹 Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Total Pages</h3>
              <p className="text-2xl font-bold mt-2">12</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Total Views</h3>
              <p className="text-2xl font-bold mt-2">3,240</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Conversions</h3>
              <p className="text-2xl font-bold mt-2">320</p>
            </div>
          </div>

          {/* 🔹 Pages Table */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Your Landing Pages</h3>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2">Name</th>
                  <th>Created</th>
                  <th>Link</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {pages.map((page, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{page.name}</td>
                    <td>{page.date}</td>
                    <td className="text-indigo-600">{page.url}</td>
                    <td>
                      <button className="text-sm bg-indigo-100 px-3 py-1 rounded mr-2">
                        View
                      </button>
                      <button className="text-sm bg-gray-200 px-3 py-1 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;