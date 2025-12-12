"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  assignee: string;
  status: "Completed" | "In Progress" | "Blocked";
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Design system updates",
    assignee: "Sarah Johnson",
    status: "Completed",
    priority: "High",
    dueDate: "2025-01-10",
  },
  {
    id: "2",
    title: "API integration task",
    assignee: "Mike Chen",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-01-15",
  },
  {
    id: "3",
    title: "Homepage redesign",
    assignee: "Emily Davis",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-01-20",
  },
  {
    id: "4",
    title: "Database migration",
    assignee: "Alex Martinez",
    status: "Completed",
    priority: "High",
    dueDate: "2025-01-08",
  },
  {
    id: "5",
    title: "Mobile app testing",
    assignee: "Sarah Johnson",
    status: "Blocked",
    priority: "High",
    dueDate: "2025-01-18",
  },
  {
    id: "6",
    title: "Documentation update",
    assignee: "Mike Chen",
    status: "In Progress",
    priority: "Low",
    dueDate: "2025-01-25",
  },
  {
    id: "7",
    title: "Performance optimization",
    assignee: "Emily Davis",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-01-22",
  },
  {
    id: "8",
    title: "Security audit",
    assignee: "Alex Martinez",
    status: "Blocked",
    priority: "High",
    dueDate: "2025-01-12",
  },
];

export function TaskTable() {
  const [tasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<keyof Task>("dueDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const direction = sortDirection === "asc" ? 1 : -1;
      return aValue < bValue ? -direction : direction;
    });

    return filtered;
  }, [tasks, searchQuery, statusFilter, sortField, sortDirection]);

  const handleSort = (field: keyof Task) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-[color:var(--status-completed)] text-white";
      case "In Progress":
        return "bg-[color:var(--status-in-progress)] text-white";
      case "Blocked":
        return "bg-[color:var(--status-blocked)] text-white";
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search tasks or assignees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setStatusFilter("all")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              statusFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent border border-input text-foreground hover:bg-accent"
            )}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("In Progress")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              statusFilter === "In Progress"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent border border-input text-foreground hover:bg-accent"
            )}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatusFilter("Blocked")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              statusFilter === "Blocked"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent border border-input text-foreground hover:bg-accent"
            )}
          >
            Blocked
          </button>
          <button
            onClick={() => setStatusFilter("Completed")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              statusFilter === "Completed"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent border border-input text-foreground hover:bg-accent"
            )}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <button
                  onClick={() => handleSort("title")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Task
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <button
                  onClick={() => handleSort("assignee")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Assignee
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <button
                  onClick={() => handleSort("status")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Status
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <button
                  onClick={() => handleSort("priority")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Priority
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <button
                  onClick={() => handleSort("dueDate")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Due Date
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-border hover:bg-accent/50 transition-colors"
              >
                <td className="py-4 px-4 font-medium text-sm text-card-foreground">
                  {task.title}
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {task.assignee}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                      getStatusColor(task.status)
                    )}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {task.priority}
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {task.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAndSortedTasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tasks found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
