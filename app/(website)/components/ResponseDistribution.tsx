// ResponseCharts.tsx
"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  TooltipContentProps,
} from "recharts";

// ----------------- Bar Chart -----------------

type barData = {
  name: string;
  value: number;
}[];
const BAR_COLOR = "#07233b";

export function ResponseDistribution({text,barData}:{text?:string,barData: barData},) {
  return (
    <div className="h-full w-full rounded-md p-4">
      <p className="text-sm sm:text-base font-semibold text-custom-dark-grey/90 mb-2">
        {text || "Response Distribution"}
      </p>

      <div className="h-[200px] sm:h-[240px] max-w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              content={(props: TooltipContentProps<any, any>) => {
                const { active, payload } = props;
                if (!active || !payload || !payload.length) return null;
                const data = payload[0];
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "0.5rem",
                      color: BAR_COLOR,
                    }}
                  >
                    {data.name}: {data.value}%
                  </div>
                );
              }}
            />
            <Bar
              dataKey="value"
              fill={BAR_COLOR}
              radius={[10, 10, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ----------------- Donut Chart -----------------
const pieData = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 10 },
];

const COLORS = ["#10B981", "#F3704B", "#EF4444"];

export function SentimentDonut() {
  return (
    <div className="sm:h-full sm:w-full rounded-md p-4">
      <p className="text-base font-semibold text-custom-dark-grey/90 mb-4">
        Sentiment Analysis
      </p>

      <div className="h-[240px]  w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              label={({ name, percent }) =>
                `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
              }
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              layout="horizontal"
              iconType="circle"
              iconSize={6}
              wrapperStyle={{ gap: 8 }}
              formatter={(value: string | number | undefined) => {
                if (!value) return "";
                const item = pieData.find((d) => d.name === value);
                return `${value} (${item?.value}%)`;
              }}
            />

            <Tooltip
              content={(props: TooltipContentProps<any, any>) => {
                const { active, payload } = props;
                if (!active || !payload || !payload.length) return null;
                const data = payload[0];
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: data.color,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: data.color,
                      }}
                    >
                      {data.name}: {data.value}%
                    </span>
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ----------------- Pie Chart -----------------
const fullPieData = [
  { name: "Satisfied:", value: 37 },
  { name: "Very Satisfied:", value:  29 },
  { name: "Very Dissatisfied:", value:  3 },
  { name: "Dissatisfied:", value:  10},
  { name: "Neutral:", value: 21}
];

const PIE_COLORS = ["#34D399", "#10B981","#EF4444","#FB923C", "#FBBF24"];
export function SentimentCircle({text}:{text?:string}) {
  return (
    <div className="sm:h-full sm:w-full rounded-md p-4">
      <p className="text-sm sm:text-base font-semibold text-custom-dark-grey/90 mb-4">
        {text || "Sentiment Analysis"}
      </p>

      <div className="h-[240px] sm:h-[280px]  max-w-full">
        <ResponsiveContainer width="90%" height="90%">
          <PieChart>
            <Pie
              data={fullPieData}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
              }
            >
              {fullPieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              content={(props: TooltipContentProps<any, any>) => {
                const { active, payload } = props;
                if (!active || !payload || !payload.length) return null;
                const data = payload[0];
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: data.color,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: data.color,
                      }}
                    >
                      {data.name}: {data.value}%
                    </span>
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}