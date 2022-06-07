import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export default function CustomizedProgressBars(props) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#F4F5F4",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: catchColor(statusType),
    },
  }));

  const catchColor = (statusType) => {
    switch (statusType) {
      case 0:
        return "#48D0B0";
        break;
      case 1:
        return "#48D0B0";
        break;
      case 2:
        return "#FB6C6C";
        break;
      case 3:
        return "#48D0B0";
        break;
      case 4:
        return "#FB6C6C";
        break;
      case 5:
        return "#FFCE4B";
        break;
      case 10:
        return "#4BC07A";
        break;
      default:
        break;
    }
  };

  const { statusValue, statusType } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={statusValue} />
    </Box>
  );
}
