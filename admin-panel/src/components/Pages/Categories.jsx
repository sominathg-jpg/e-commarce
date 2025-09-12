import React, { useState } from "react";
import { Edit, Trash2, MoreHorizontal, Plus, MoreHorizontalIcon, Trash, Trash2Icon } from "lucide-react";
import useProductStore from "../../store/useProductStore";
import { Link } from "react-router-dom";

// The main Categories component that renders the categories page.
const Categories = () => {
  const { categories, fetchCategories } = useProductStore();

  console.log(categories);

  // Function to handle the delete action.
  const handleDelete = (categoryId) => {
    console.log(`Deleting category with ID: ${categoryId}`);
    const updatedCategories = categories.filter((cat) => cat.id !== categoryId);
  };

  // Function to handle the edit action.
  const handleEdit = (categoryId) => {
    console.log(`Editing category with ID: ${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-purple-50 p-6 md:p-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Add Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-wide text-purple-800">
            Category Management
          </h1>
          <button className="flex items-center space-x-2 bg-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200">
            <Plus size={18} />
            <Link to="/category-form">
              <span>Add New Category</span>
            </Link>
          </button>
        </div>

        {/* Main content table container */}
        <div className="rounded-2xl shadow-xl overflow-hidden border border-purple-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-purple-100 text-purple-800">
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
              <tbody className="divide-y divide-purple-100">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <tr
                      key={category._id}
                      className="hover:bg-purple-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="w-16 h-16 rounded-md object-cover border border-purple-200 shadow-md"
                            src={category.image}
                            alt={`Image of ${category.name} category`}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-purple-900 whitespace-nowrap">
                          {category.name}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right relative group">
                        <div className="inline-block relative">
                          <button className="text-purple-500 p-2 rounded-lg hover:bg-purple-100 transition-colors duration-200 focus:outline-none">
                            <MoreHorizontalIcon size={20} />
                          </button>

                          {/* Dropdown menu that Categoriesears on hover */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-2 hidden group-hover:block z-10 w-28">
                            <div className="bg-white rounded-lg shadow-lg flex flex-col p-1 border border-purple-200">
                              <button
                                onClick={() => handleEdit(category.id)}
                                className="flex items-center space-x-2 p-2 rounded-md hover:bg-purple-50 transition-colors duration-200"
                                title="Edit"
                              >
                                <Edit size={16} className="text-purple-600" />
                                <span className="text-purple-700">Edit</span>
                              </button>
                              <button
                                onClick={() => handleDelete(category.id)}
                                className="flex items-center space-x-2 p-2 rounded-md hover:bg-purple-50 transition-colors duration-200"
                                title="Delete"
                              >
                                <Trash2Icon size={16} className="text-red-500" />
                                <span className="text-red-600">Delete</span>
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
                      className="px-6 py-4 text-center text-purple-500"
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

export default Categories;
