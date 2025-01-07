import ButtonMui from "@mui/material/Button";
import { ButtonProps } from "./types";
import { Typography, Tooltip } from "@mui/material";

const Button = ({
  children,
  icon,
  startIcon,
  endIcon,
  color = "#FFFFFF",
  backgroundColor = "red",
  size,
  onClick,
  tooltip,
  tooltipPosition = "top",
}: ButtonProps) => {
  const dynamicSX = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: color,
    backgroundColor: backgroundColor,
  };

  const renderIcon = () => {
    return <span style={{ display: "flex" }}>{icon}</span>;
  };

  const renderButton = () => (
    <ButtonMui sx={dynamicSX} onClick={onClick} size={size}>
      {startIcon && renderIcon()}
      <Typography sx={{ textTransform: "none" }}>{children}</Typography>
      {endIcon && renderIcon()}
    </ButtonMui>
  );

  return tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPosition}>
      {renderButton()}
    </Tooltip>
  ) : (
    renderButton()
  );
};

export default Button;
