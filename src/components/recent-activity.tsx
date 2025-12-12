"use client";

import { useState } from "react";

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  task: string;
  time: string;
  details?: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    user: "Sarah Johnson",
    action: "completed",
    task: "Design system updates",
    time: "2 minutes ago",
    details:
      "Updated button components and color tokens across the design system",
  },
  {
    id: "2",
    user: "Mike Chen",
    action: "created",
    task: "API integration task",
    time: "15 minutes ago",
    details:
      "Set up REST endpoints for user authentication and profile management",
  },
  {
    id: "3",
    user: "Emily Davis",
    action: "commented on",
    task: "Homepage redesign",
    time: "1 hour ago",
    details: "Provided feedback on the hero section and navigation structure",
  },
  {
    id: "4",
    user: "Alex Martinez",
    action: "completed",
    task: "Database migration",
    time: "3 hours ago",
    details:
      "Successfully migrated all user data to the new PostgreSQL instance",
  },
];

export function RecentActivity() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-card-foreground">
          Recent Activity
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Latest team actions and updates
        </p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => {
          const isExpanded = expandedId === activity.id;

          return (
            <div
              key={activity.id}
              className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : activity.id)}
            >
              <div className="flex items-start gap-3">
                <button className="mt-0.5 text-muted-foreground">
                  {isExpanded ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <p className="text-sm text-card-foreground">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium">{activity.task}</span>
                    </p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                  {isExpanded && activity.details && (
                    <p className="text-sm text-muted-foreground mt-2 pl-0">
                      {activity.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
