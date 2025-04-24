import React from "react";
import { SvgIconProps } from "@mui/material";

const GradientIcon = ({
                        IconComponent,
                        ...props
                      }: { IconComponent: React.ElementType } & SvgIconProps) => (
  <svg width="60" height="60" viewBox="0 0 40 40" style={{ display: "inline-block" }}>
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(223,25,216,1)" />
        <stop offset="100%" stopColor="rgba(153,34,255,1)" />
      </linearGradient>
    </defs>
    <foreignObject width="100%" height="100%">
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconComponent
          sx={{
            fontSize: 40,
            fill: "url(#iconGradient)",
          }}
          {...props}
        />
      </div>
    </foreignObject>
  </svg>
);

export default GradientIcon;
