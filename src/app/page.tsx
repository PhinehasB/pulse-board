"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { KPICard } from "@/components/kpi-card";
import { ActivityChart } from "@/components/activity-chart";
import { RecentActivity } from "@/components/recent-activity";

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Dashboard Overview
              </h1>
              <p className="text-muted-foreground mt-1">
                Track your team&apos;s productivity metrics
              </p>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <KPICard
                title="Tasks Completed"
                value="847"
                change="+12.5%"
                trend="up"
                iconType="check"
              />
              <KPICard
                title="Active Users"
                value="24"
                change="+3 today"
                trend="up"
                iconType="users"
              />
              <KPICard
                title="Uptime"
                value="99.9%"
                change="-0.1%"
                trend="down"
                iconType="clock"
              />
            </div>

            {/* Analytics Chart */}
            <ActivityChart />

            {/* Recent Activity */}
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}
