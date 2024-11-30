const AdminPage = () => {
  const items = [
    { id: 1, name: 'User 1', role: 'Admin' },
    { id: 2, name: 'User 2', role: 'Editor' },
    { id: 3, name: 'User 3', role: 'Viewer' },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User List</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Add User
          </button>
        </div>

        <table className="min-w-full bg-white shadow overflow-hidden sm:rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="py-3 px-6 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-6 whitespace-nowrap">{item.name}</td>
                <td className="py-4 px-6 whitespace-nowrap">{item.role}</td>
                <td className="py-4 px-6 whitespace-nowrap text-right">
                  <button className="text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                  <button className="ml-4 text-red-600 hover:text-red-800">
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
};

export default AdminPage