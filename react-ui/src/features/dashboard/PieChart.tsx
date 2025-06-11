type PieChartProps = {
    data: number[];
    colors?: string[];
    size?: number;
  };
  
  const PieChart: React.FC<PieChartProps> = ({
    data,
    colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
    size = 500,
  }) => {
    const total = data.reduce((a, b) => a + b, 0);
    const radius = size / 3;
    const circumference = 2 * Math.PI * radius;
  
    let cumulativePercent = 0;
  
    return (
      <svg width={size} height={size} viewBox={`0 00 ${size} ${size}`}>
        {data.map((value, i) => {
          const percent = value / total;
          const strokeDasharray = `${percent * circumference} ${circumference}`;
          const rotation = cumulativePercent * 360;
  
          cumulativePercent += percent;
  
          return (
            <circle
              key={i}
              r={radius}
              cx={size / 2}
              cy={size / 2}
              fill="transparent"
              stroke={colors[i % colors.length]}
              strokeWidth={50}
              strokeDasharray={strokeDasharray}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            />
          );
        })}
      </svg>
    );
  };
  
  export default PieChart;
  