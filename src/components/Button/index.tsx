import { styled } from "stitches.config";

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  backgroundColor: "$foreground",
  color: "$background",
  borderRadius: "0",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "lightgray",
  },
});
