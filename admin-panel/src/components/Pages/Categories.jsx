import React, { useState } from "react";
import { Edit, Trash2, MoreHorizontal, Plus } from "lucide-react";

import useProductStore from "../../store/useProductStore";
// The main App component that renders the categories page.
const App = () => {
  const { categories, fetchCategories } = useProductStore();

  console.log(categories);

  // Function to handle the delete action.
  const handleDelete = (categoryId) => {
    console.log(`Deleting category with ID: ${categoryId}`);
    const updatedCategories = categories.filter((cat) => cat.id !== categoryId);
    setCategories(updatedCategories);
  };

  // Function to handle the edit action.
  const handleEdit = (categoryId) => {
    console.log(`Editing category with ID: ${categoryId}`);
  };

  return (
    <div className="min-h-screen   p-6 md:p-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Add Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-wide">
            Category Management
          </h1>
          <button className="flex items-center space-x-2 bg-purple-600 font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200">
            <Plus size={18} />
            <span>Add New Category</span>
          </button>
        </div>

        {/* Main content table container */}
        <div className=" rounded-2xl shadow-xl overflow-hidden border border-slate-700">
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className=" text-gray-700">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y ">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <tr
                      key={category.id}
                      className="hover:bg-gray-200 p-5 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="w-16 h-16 rounded-md object-cover border border-slate-600 shadow-md"
                            src={category.image}
                            alt={`Image of ${category.name} category`}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium whitespace-nowrap">
                          {category.name}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right relative group">
                        <div className="inline-block relative">
                          <button className="text-gray-400 p-2 rounded-lg hover:bg-slate-600 transition-colors duration-200 focus:outline-none">
                            <MoreHorizontal size={20} />
                          </button>

                          {/* Dropdown menu that appears on hover */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-2 hidden group-hover:block z-10 w-28">
                            <div className="bg-purple-600/60 rounded-lg shadow-lg flex flex-col p-1 border border-slate-500">
                              <button
                                onClick={() => handleEdit(category.id)}
                                className="flex items-center space-x-2 p-2 rounded-md hover:bg-white transition-colors duration-200"
                                title="Edit"
                              >
                                <Edit size={16} className="text-blue-400" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => handleDelete(category.id)}
                                className="flex items-center space-x-2 p-2 rounded-md hover:bg-white transition-colors duration-200"
                                title="Delete"
                              >
                                <Trash2 size={16} className="text-red-400" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No categories found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
