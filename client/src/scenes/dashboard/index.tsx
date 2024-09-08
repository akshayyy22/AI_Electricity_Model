import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4" ;

const gridTemplateLargeScreens = `
  "a b c "
  "a b c "
  "a b c"
  "a b c"
  "a b c"
  "d d d"
  "d d d"
  "d d d"
  "d d d"
  "d d d"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "g g g"
  "e e e "
  "e e e "
  "e e e "
  "e e e "
  "e e e "
  "e e e "
  "e e e "
  "e e e "
  "e e e "
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  "g"
  "g"
  "g"
  "e"
  "e"
  "e"
  "e"

  
  
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(12, minmax(60px, 1fr))", // Adjusted to accommodate more rows if needed
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </Box>
  );
};

export default Dashboard;
