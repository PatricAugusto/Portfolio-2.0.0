// src/app/icon.js

import { FaRobot } from 'react-icons/fa';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ImageResponse } from 'next/server';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  const svgString = renderToString(createElement(FaRobot, { size: 32, color: 'white' }));
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    ),
    {
      ...size,
    }
  );
}