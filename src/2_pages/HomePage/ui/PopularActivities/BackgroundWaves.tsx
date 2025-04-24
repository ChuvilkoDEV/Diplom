import React from 'react';
import { Box } from '@mui/material'

const BackgroundWaves = () => {
  return (<Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100px",
      zIndex: 1,
      lineHeight: 0,
    }}
  >
    <svg
      viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100px" }}
    >
      <defs>
        <mask id="wave-mask">
          {/* Белый прямоугольник, который будет основой (все видно) */}
          <rect x="0" y="0" width="100%" height="100" fill="white" />

          {/* Первая волна с полной непрозрачностью (черный цвет вырезает) */}
          <path
            fill="black"
            d="M0,64L60,58C120,53,240,43,360,32C480,21,600,11,720,21C840,32,960,64,1080,74C1200,85,1320,75,1380,69L1440,64V100H0Z" />

          {/* Вторая волна с полупрозрачностью (черный цвет вырезает) */}
          <path
            fill="black"
            fillOpacity="0.5"
            d="M0,40L60,46C120,52,240,63,360,67C480,71,600,63,720,56C840,49,960,42,1080,46C1200,50,1320,66,1380,74L1440,82V100H0Z" />
        </mask>
      </defs>

      {/* Прямоугольник с маской, который будет отрезан обеими волнами */}
      <rect x="0" y="0" width="100%" height="100" fill="white" mask="url(#wave-mask)" />
    </svg>
  </Box>)
}

export default BackgroundWaves;