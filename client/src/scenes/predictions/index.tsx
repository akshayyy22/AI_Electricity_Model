import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetMaxDemandQuery } from "@/state/api"; // Updated import
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DemandData {
  hour: string;
  demand: number;
}

const Predictions = () => {
  const { palette } = useTheme();
  const { data: demandData = [] } = useGetMaxDemandQuery();

  const formattedData = useMemo(() => {
    if (!demandData.length) return [];

    return demandData.map(({ hour, demand }: DemandData) => { // Added type annotations
      return {
        name: hour,
        "Electricity demand": demand,
      };
    });
  }, [demandData]);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Electricity Demand</Typography>
          <Typography variant="h6">
            Hourly electricity demand for a specific date
          </Typography>
        </Box>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
            <Label value="Hour" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `${v} MW`} // Fixed string interpolation
          >
            <Label
              value="Electricity demand (MW)"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Electricity demand" // Fixed dataKey name
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Predictions;
