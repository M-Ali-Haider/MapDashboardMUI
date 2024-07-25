import { Box } from "@mui/material";
import StatCard from "./card";
import React from "react";
import { StatItem } from "@/models/stats";

const StatsBox = ({ stats }: { stats: StatItem[] }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "1rem",
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
        }}
      >
        {stats.map((item, index) => (
          <StatCard key={index} item={item} index={index} />
        ))}
      </Box>
    </>
  );
};
export default StatsBox;
