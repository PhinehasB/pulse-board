"use client";

const data = [
  { name: "Mon", tasks: 45, users: 18 },
  { name: "Tue", tasks: 52, users: 21 },
  { name: "Wed", tasks: 49, users: 20 },
  { name: "Thu", tasks: 63, users: 24 },
  { name: "Fri", tasks: 58, users: 22 },
  { name: "Sat", tasks: 31, users: 12 },
  { name: "Sun", tasks: 28, users: 10 },
];

export function ActivityChart() {
  const maxTasks = Math.max(...data.map((d) => d.tasks));
  const maxUsers = Math.max(...data.map((d) => d.users));
  const totalTasks = data.reduce((sum, d) => sum + d.tasks, 0);
  const totalUsers = data.reduce((sum, d) => sum + d.users, 0);

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-card-foreground">
          Weekly Activity
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Task completion and user engagement trends
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 mb-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-chart-1" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-card-foreground">
              Tasks Completed
            </span>
            <span className="text-xs text-muted-foreground">
              {totalTasks} total
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-chart-2" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-card-foreground">
              Active Users
            </span>
            <span className="text-xs text-muted-foreground">
              {totalUsers} total
            </span>
          </div>
        </div>
      </div>

      <div className="h-80 w-full">
        <svg viewBox="0 0 700 320" className="w-full h-full">
          {/* Grid lines */}
          <g className="stroke-muted/50" strokeDasharray="3 3" strokeWidth="1">
            <line x1="50" y1="270" x2="650" y2="270" />
            <line x1="50" y1="202.5" x2="650" y2="202.5" />
            <line x1="50" y1="135" x2="650" y2="135" />
            <line x1="50" y1="67.5" x2="650" y2="67.5" />
            <line x1="50" y1="0" x2="650" y2="0" />
          </g>

          {/* Y axis labels */}
          <text
            x="40"
            y="275"
            className="fill-muted-foreground text-xs"
            textAnchor="end"
          >
            0
          </text>
          <text
            x="40"
            y="207"
            className="fill-muted-foreground text-xs"
            textAnchor="end"
          >
            25
          </text>
          <text
            x="40"
            y="140"
            className="fill-muted-foreground text-xs"
            textAnchor="end"
          >
            50
          </text>
          <text
            x="40"
            y="72"
            className="fill-muted-foreground text-xs"
            textAnchor="end"
          >
            75
          </text>

          {/* Bars for each day */}
          {data.map((d, i) => {
            const x = 80 + i * 82;
            const barWidth = 15;
            const gap = 4;
            const tasksHeight = (d.tasks / maxTasks) * 260;
            const usersHeight = (d.users / maxUsers) * 260;

            return (
              <g key={d.name}>
                {/* Tasks bar (purple) */}
                <rect
                  x={x}
                  y={270 - tasksHeight}
                  width={barWidth}
                  height={tasksHeight}
                  style={{ fill: "var(--color-chart-1)" }}
                  className="hover:opacity-80 transition-opacity"
                  rx="2"
                />
                {/* Users bar (blue) */}
                <rect
                  x={x + barWidth + gap}
                  y={270 - usersHeight}
                  width={barWidth}
                  height={usersHeight}
                  style={{ fill: "var(--color-chart-2)" }}
                  className="hover:opacity-80 transition-opacity"
                  rx="2"
                />
                {/* Day label */}
                <text
                  x={x + barWidth + gap / 2}
                  y="295"
                  className="fill-muted-foreground text-xs font-medium"
                  textAnchor="middle"
                >
                  {d.name}
                </text>
                {/* Value labels on hover */}
                <text
                  x={x + barWidth / 2}
                  y={270 - tasksHeight - 5}
                  className="fill-card-foreground text-[10px] font-semibold opacity-0 hover:opacity-100"
                  textAnchor="middle"
                >
                  {d.tasks}
                </text>
                <text
                  x={x + barWidth + gap + barWidth / 2}
                  y={270 - usersHeight - 5}
                  className="fill-card-foreground text-[10px] font-semibold opacity-0 hover:opacity-100"
                  textAnchor="middle"
                >
                  {d.users}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
