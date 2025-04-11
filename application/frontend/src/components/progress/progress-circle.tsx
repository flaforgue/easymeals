import { useEffect, useState } from 'react';

function polarToCartesian(radius: number, angle: number) {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

function describeArc(radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(radius, endAngle);
  const end = polarToCartesian(radius, startAngle);
  const isLargerThanHalfCircle = endAngle - startAngle <= Math.PI ? 0 : 1;

  return ['M', start.x, start.y, 'A', radius, radius, 0, isLargerThanHalfCircle, 0, end.x, end.y].join(' ');
}

interface ProgressCircleProps {
  percents: number;
}
export default function ProgressCircle({ percents }: ProgressCircleProps) {
  const [progressCircleSvgDescription, setProgressCircleSvgDescription] = useState('');
  useEffect(() => {
    setProgressCircleSvgDescription(describeArc(28, 0, Math.min(1, percents / 100) * 2 * Math.PI));
  }, [percents]);

  return (
    <div>
      <svg
        className={`
          absolute
          top-0
        `}
        width="64"
        height="64"
        style={{ width: '100%', height: '100%', contentVisibility: 'visible' }}
        viewBox="-32 -32 64 64"
        stroke="#e2e8f0"
        strokeWidth={8}
        fill="none"
      >
        <circle r="28" />
      </svg>
      <svg
        className={`
          absolute
          top-0
        `}
        width="64"
        height="64"
        style={{ width: '100%', height: '100%', contentVisibility: 'visible' }}
        viewBox="-32 -32 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={8}
      >
        <path
          className="transition-all"
          transform="rotate(-90)"
          strokeLinecap="round"
          d={progressCircleSvgDescription}
        />
      </svg>
    </div>
  );
}
