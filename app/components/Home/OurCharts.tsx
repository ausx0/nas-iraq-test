"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Divider } from "@nextui-org/react";

const OurCharts = () => {
  const t = useTranslations("HomePage");

  const data = [
    { name: "Product 1", "Product 1": 120 },
    { name: "Product 2", "Product 2": 75 },
  ];

  const pieData = [
    { name: "Product 1", value: 50 },
    { name: "Product 2", value: 50 },
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle" // Center horizontally
        dominantBaseline="central" // Center vertically
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["#8e44ad", "#e67e22"]; // Matching the colors in the image

  return (
    <div className="flex flex-col items-center px-2 gap-4 justify-center mt-8 w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold text-white mb-4">
        {t("OurCharts")}
      </h1>
      <div className="w-full p-3 bg-[#1E1E1E]   shadow-lg rounded-sm">
        <h2 className="text-xl mx-4 text-white">{t("NetProfit")}</h2>
        <p className="text-sm mx-4 text-gray-400">{new Date().getFullYear()}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: -10,
              bottom: 5,
            }}
            barSize={11}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#4F4D4D"
            />
            <XAxis dataKey="name" tick={{ fill: "white" }} />
            <YAxis fontSize={12} tick={{ fill: "white" }} domain={[0, 200]} />
            <Legend
              wrapperStyle={{ color: "white" }}
              verticalAlign="bottom"
              iconType="circle"
              fontSize={12}
              formatter={(value, entry) => (
                <span style={{ color: "white", fontSize: "0.8rem" }}>
                  {value}
                </span> // This makes the text white
              )}
            />
            <Bar dataKey="Product 1" color="white" fill="#8e44ad" />
            <Bar dataKey="Product 2" fill="#e67e22" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-full py-3 bg-[#1E1E1E] shadow-lg rounded-sm">
        <h2 className="text-xl px-3 mx-4 text-white">{t("PrimaryText")}</h2>
        <p className="text-sm mx-4 px-3 text-gray-400">Secondary text</p>
        <Divider className="my-4 bg-[#4F4F4F]" />
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={60}
              dataKey="value"
              stroke="black"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              wrapperStyle={{ color: "white" }}
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              formatter={(value, entry) => (
                <span style={{ color: "white", fontSize: "0.8rem" }}>
                  {value}
                </span> // This makes the text white
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OurCharts;
