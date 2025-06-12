import React, { useState } from "react";

type AllowedGroup = "cash" | "etf" | "stock" | "crypto" | "realEstate" | "other";

type PieChartDataItem = {
    value: number;
    group: AllowedGroup;
    name: string;
  };

type PieChartProps = {
  data: PieChartDataItem[];

};

const PieChart: React.FC<PieChartProps> = ({
  data,
}) => {
  const size = 400;
  const thickness = 50;
  
  //sort
  const groupTotals = data.reduce<Record<AllowedGroup, number>>((acc, item) => {
    acc[item.group] = (acc[item.group] || 0) + item.value;
    return acc;
  }, {} as Record<AllowedGroup, number>);
  
  const sortedGroups = Object.entries(groupTotals)
    .sort((a, b) => b[1] - a[1])
    .map(([group]) => group as AllowedGroup);
  
  const sortedData: PieChartDataItem[] = [];
  
  sortedGroups.forEach(group => {
    const itemsInGroup = data
      .filter(item => item.group === group)
      .sort((a, b) => b.value - a.value);
    sortedData.push(...itemsInGroup);
  });



  const value = sortedData.map(item => item.value);
  const group = sortedData.map(item => item.group);
  const name = sortedData.map(item => item.name);

  const groupCount = {'cash': 0,'etf': 0,'stock': 0,'crypto': 0,'realEstate': 0,'other': 0};
  const itemGroupCount = {'cash': 0,'etf': 0,'stock': 0,'crypto': 0,'realEstate': 0,'other': 0};
  for (const item of group) {
    groupCount[item]++;
  }

  const total = value.reduce((sum, v) => sum + v, 0)
  const outerRadius = size / 2.5;
  const innerRadius = outerRadius - thickness;


  
  const colors = {
    'cash': '#10B981',
    'etf': '#5290F6',
    'stock': '#F4AA2E',
    'crypto': '#A07BF4',
    'realEstate': '#EF5E5E',
    'other': '#6B7280'
  }

  const altColors = {
    'cash': '#34D29A',
    'etf': '#7AAEFF',
    'stock': '#F7C858',
    'crypto': '#C1A1F9',
    'realEstate': '#F47A7A',
    'other': '#9CA3AF'
  }

  const gap = 0.002;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent: number, radius: number) => {
    const angle = 2 * Math.PI * percent - Math.PI / 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return [x, y];
  };

  return (
    <div className="relative">
        <svg width={size} height={size}>
            <g transform={`translate(${size / 2}, ${size / 2})`}>
                {sortedData.map((item, i) => {
                const percent = item.value / total;

                const startPercent = cumulativePercent + gap / 2;
                const endPercent = cumulativePercent + percent - gap / 2;

                const [startOuterX, startOuterY] = getCoordinatesForPercent(startPercent, outerRadius);
                const [endOuterX, endOuterY] = getCoordinatesForPercent(endPercent, outerRadius);
                const [startInnerX, startInnerY] = getCoordinatesForPercent(startPercent, innerRadius);
                const [endInnerX, endInnerY] = getCoordinatesForPercent(endPercent, innerRadius);

                const largeArcFlag = (endPercent - startPercent) > 0.5 ? 1 : 0;

                const midPercent = cumulativePercent + percent / 2;
                const [midX, midY] = getCoordinatesForPercent(midPercent, (outerRadius + innerRadius) / 2);
                const dx = midX;
                const dy = midY;

                const isHovered = hoveredIndex === i;
                const hoverOffset = isHovered ? 10 : 0;

                const pathData = [
                    `M ${startOuterX} ${startOuterY}`,
                    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}`,
                    `L ${endInnerX} ${endInnerY}`,
                    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInnerX} ${startInnerY}`,
                    "Z",
                ].join(" ");

                cumulativePercent += percent;

                itemGroupCount[item.group]++;

                return (
                    <path
                    key={i}
                    d={pathData}
                    fill={(groupCount[item.group] % 2 != 0)
                            ? itemGroupCount[item.group] % 2 != 0
                                ? colors[item.group]
                                : altColors[item.group]
                            : altColors[item.group]
                        }
                    transform={`translate(${(dx * hoverOffset) / ((outerRadius + innerRadius) / 2)} ${(dy * hoverOffset) / ((outerRadius + innerRadius) / 2)})`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="cursor-pointer transition-transform duration-300"
                    />
                );
                })}
            </g>
            </svg>
        <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="font-extrabold text-4xl">{hoveredIndex === null ? total + '€' : value[hoveredIndex] + '€'}</p>
            <p className="font-semibold text-sm">{hoveredIndex === null ? 'Net Worth' : name[hoveredIndex]}</p>
        </div>
    </div>
  );
};

export default PieChart;
