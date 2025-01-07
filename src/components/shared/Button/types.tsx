import React from "react";
import { TooltipProps } from "@mui/material";
import { ButtonProps as ButtonMuiProps } from "@mui/material/Button";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  startIcon?: boolean;
  endIcon?: boolean;
  icon?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: ButtonMuiProps["size"];
  padding?: string;
  tooltip?: string;
  tooltipPosition?: TooltipProps["placement"];
};
