// ResponseCharts.tsx
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
const barData = [
  { name: "Q1", value: 80 },
  { name: "Q2", value: 70 },
  { name: "Q3", value: 90 },
  { name: "Q4", value: 70 },
  { name: "Q5", value: 75 },
];

const BAR_COLOR = "#07233b";

export function ResponseDistribution() {
  return (
    <div className="h-full w-full rounded-md p-4">
      <p className="text-base font-semibold text-custom-dark-grey/90 mb-2">
        Response Distribution
      </p>

      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
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