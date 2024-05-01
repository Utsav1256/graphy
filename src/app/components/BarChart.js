"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [
            {
              label: "Money Earned in USD",
              data: [209, 204, 307, 305, 110, 310, 204, 208],
              backgroundColor: "blue",
              hoverBackgroundColor: "orange",

              borderColor: "blue",
            },
          ],
        },
        options: {
          // responsive:true,
          scales: {
            x: {
              type: "category",
              labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], // Specify labels for the x-axis
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "90vw", height: "80vw" }}>
      <canvas ref={chartRef} />
    </div>
  );
};
export default BarChart;
