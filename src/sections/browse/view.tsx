"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance"; // Adjust the path according to your file structure
import { CategoryCard, VehiclesCard } from "@/components/card";
import { Category, Vehicle } from "@/types"; // ✅ ini yang benar

export function BrowseView() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [popularVehicles, setPopularVehicles] = useState<Vehicle[]>([]);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchPopularVehicles = async () => {
      try {
        const response = await axiosInstance.get("/vehicles/popular");
        setPopularVehicles(response.data.data);
      } catch (error) {
        console.error("Error fetching popular vehicles:", error);
      }
    };

    fetchCategories();
    fetchPopularVehicles();
  }, []);
  return (
    <div className="min-h-screen pb-2 flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-lg">
        <div className="text-center mb-2 p-4 border-gray-200">
          <h1 className="text-2xl font-bold">Make More Adventures.</h1>
          <h1 className="text-2xl font-bold">Explore Our Vehicles.</h1>
        </div>

        <div className="px-4 pb-4">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <div className="flex overflow-x-auto">
              <CategoryCard categories={categories} />
            </div>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-4">Popular Cars</h3>
            <div className="flex overflow-x-auto">
              {popularVehicles.map((popular, index) => (
                <VehiclesCard
                  key={index}
                  id={popular.id}
                  title={popular.name}
                  subTitle={popular.slug}
                  price={`Rp ${popular.price.toLocaleString("id-ID")}`}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Popular Motobike</h3>
            <div className="flex overflow-x-auto">
              {vehicles.map((popular, index) => (
                <VehiclesCard
                  id={popular.id}
                  key={index}
                  title="Ferarri"
                  subTitle="Track"
                  price="Rp 18939434"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
