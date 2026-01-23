"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  
} from "@/components/ui/chart"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", users: 120, sessions: 200, revenue: 500 },
  { date: "2024-04-02", users: 150, sessions: 230, revenue: 620 },
  { date: "2024-04-03", users: 170, sessions: 210, revenue: 580 },
  { date: "2024-04-04", users: 200, sessions: 250, revenue: 700 },
  { date: "2024-04-05", users: 220, sessions: 270, revenue: 750 },
  { date: "2024-04-06", users: 180, sessions: 230, revenue: 600 },
  { date: "2024-04-07", users: 160, sessions: 210, revenue: 550 },
  { date: "2024-04-08", users: 210, sessions: 290, revenue: 800 },
  { date: "2024-04-09", users: 130, sessions: 180, revenue: 400 },
  { date: "2024-04-10", users: 190, sessions: 240, revenue: 670 },
  { date: "2024-04-11", users: 230, sessions: 300, revenue: 820 },
  { date: "2024-04-12", users: 210, sessions: 260, revenue: 710 },
]


const chartConfig = {
  users: { label: "Users", color: "var(--chart-1)" },
  sessions: { label: "Sessions", color: "var(--chart-2)" },
  revenue: { label: "Revenue", color: "var(--chart-3)" },
}


export default function ChartAreaInteractive() {


  // const filteredData = chartData.filter((item) => {
  //   // fisrt get the date
  //   const date = new Date(item.date)
  //   // second define the last date
  //   const referenceDate = new Date("2024-06-30")
  //   // define how days you want to show
  //   let daysToSubtract = 90
  //   if (timeRange === "30d") {
  //     daysToSubtract = 30
  //   } else if (timeRange === "7d") {
  //     daysToSubtract = 7
  //   }
  //   // get the last date in startDate
  //   const startDate = new Date(referenceDate)
  //   // change the day in last Date to -->
  //   // the day of the last data and go back ${daysToSubtract} steps
  //   startDate.setDate(startDate.getDate() - daysToSubtract)
  //   // get the days after the startDate(the last Date) after change the day
  //   return date >= startDate
  // })

  return (
    <Card className="pt-0">
      {/* define how much days you want to show */}
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total Data with revenue for the last 3 months
          </CardDescription>
        </div>
        
      </CardHeader>
      {/* show the days */}
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-users)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-users)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="sessions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sessions)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sessions)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#revenue)"
              stroke="var(--color-revenue)"
              stackId="a"
            />
            <Area
              dataKey="sessions"
              type="natural"
              fill="url(#sessions)"
              stroke="var(--color-sessions)"
              stackId="a"
            />
            <Area
              dataKey="users"
              type="natural"
              fill="url(#users)"
              stroke="var(--color-users)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
