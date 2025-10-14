import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
      const {auth, setAuth} = useAuth();
      const [products, setProducts] = useState([]);

      const fetchProducts = async () => {
            try {
                  const response = await axios.get("http://localhost:8080/product/", {
                        headers: {
                              Authorization: auth?.token,
                        },
                  });
                  if (response.status === 200) {
                        setProducts(response.data);
                        console.log(JSON.stringify(response.data, null, 4));
                  }
            } catch (error) {
                  console.log("Error fetching products", error);
            }
      };

      useEffect(() => {
            fetchProducts();
      }, []);

      const handleLogout = () => {
            setAuth({ ...auth, user: null, token: "" });
            localStorage.removeItem("auth");
      };
      return (
            <div className="min-h-screen bg-white">
                  {/* Navbar */}
                  <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">🛒 Shopping Cart</h1>
                        {auth?.user ? (
                              <div className="flex items-center space-x-4">
                                    <div className="text-gray-700 font-medium">👤 {auth.user}</div>
                                    <NavLink
                                          onClick={handleLogout}
                                          to="/login"
                                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                          🚪 Logout
                                    </NavLink>
                              </div>
                        ) : (
                              <NavLink to="/login" className="text-gray-700 font-medium">Login</NavLink>
                        )}
                  </div>

                  {/* Product Grid */}
                  <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                              {products.length > 0 ? (
                                    products.map((product, index) => (
                                          <div
                                                key={index}
                                                className="bg-white shadow-lg rounded-lg p-4 transform transition-all hover:scale-105 hover:shadow-xl"
                                          >
                                                <img
                                                      src={product.image}
                                                      alt={product.name}
                                                      className="w-full h-40 object-cover rounded-md"
                                                />
                                                <h2 className="text-xl font-semibold text-gray-700 mt-3">{product.name}</h2>
                                                <p className="text-gray-600">💰 Price: ${product.price}</p>
                                                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                                                      Add to Cart
                                                </button>
                                          </div>
                                    ))
                              ) : (
                                    <p className="text-gray-600 text-lg">No products found.</p>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default Homepage;