import React, { ReactNode } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
  value: number;
  limit: number;
  title: string;
  color: string;
};

const RemainTime = ({ value, limit, title, color }: Props) => (
  <div className="relative w-[200px] h-[200px] text-center">
    <CircularProgressbar
        minValue={0}
        maxValue={limit}
        value={value}
        text={`${value}`}
        strokeWidth={2}
        styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
            // Path color
            stroke: `rgba(${color}, ${value / limit})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
            // Trail color
            stroke: '#d6d6d6',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
            },
            // Customize the text
            text: {
            // Text color
            fill: `rgb(${color})`,
            // Text size
            fontSize: '30px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
            fill: '#3e98c7',
            },
        }}
    />
    <p className={`absolute text-[30px] top-[110px] text-center w-full`} style={{color: `rgb(${color})`}}>{title}</p>
  </div>
);

export default RemainTime;
