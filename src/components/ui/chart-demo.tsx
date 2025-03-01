"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
{ date: "2024-04-01", desktop: 2220.45, mobile: 150.12 },
{ date: "2024-04-02", desktop: 970.67, mobile: 180.34 },
{ date: "2024-04-03", desktop: 1670.89, mobile: 120.56 },
{ date: "2024-04-04", desktop: 2420.78, mobile: 260.23 },
{ date: "2024-04-05", desktop: 3730.34, mobile: 290.89 },
{ date: "2024-04-06", desktop: 3010.12, mobile: 340.45 },
{ date: "2024-04-07", desktop: 2450.56, mobile: 180.67 },
{ date: "2024-04-08", desktop: 4090.89, mobile: 320.34 },
{ date: "2024-04-09", desktop: 590.23, mobile: 110.78 },
{ date: "2024-04-10", desktop: 2610.45, mobile: 190.12 },
{ date: "2024-04-11", desktop: 3270.67, mobile: 350.34 },
{ date: "2024-04-12", desktop: 2920.89, mobile: 210.56 },
{ date: "2024-04-13", desktop: 3420.78, mobile: 380.23 },
{ date: "2024-04-14", desktop: 1370.34, mobile: 220.89 },
{ date: "2024-04-15", desktop: 1200.12, mobile: 170.45 },
{ date: "2024-04-16", desktop: 1380.56, mobile: 190.67 },
{ date: "2024-04-17", desktop: 4460.89, mobile: 360.34 },
{ date: "2024-04-18", desktop: 3640.23, mobile: 410.78 },
{ date: "2024-04-19", desktop: 2430.45, mobile: 180.12 },
{ date: "2024-04-20", desktop: 890.67, mobile: 150.34 },
{ date: "2024-04-21", desktop: 1370.89, mobile: 200.56 },
{ date: "2024-04-22", desktop: 2240.78, mobile: 170.23 },
{ date: "2024-04-23", desktop: 1380.34, mobile: 230.89 },
{ date: "2024-04-24", desktop: 3870.12, mobile: 290.45 },
{ date: "2024-04-25", desktop: 2150.56, mobile: 250.67 },
{ date: "2024-04-26", desktop: 750.89, mobile: 130.23 },
{ date: "2024-04-27", desktop: 3830.34, mobile: 420.89 },
{ date: "2024-04-28", desktop: 1220.12, mobile: 180.45 },
{ date: "2024-04-29", desktop: 3150.56, mobile: 240.67 },
{ date: "2024-04-30", desktop: 4540.89, mobile: 380.23 },
{ date: "2024-05-01", desktop: 1650.34, mobile: 220.89 },
{ date: "2024-05-02", desktop: 2930.12, mobile: 310.45 },
{ date: "2024-05-03", desktop: 2470.56, mobile: 190.67 },
{ date: "2024-05-04", desktop: 3850.89, mobile: 420.23 },
{ date: "2024-05-05", desktop: 4810.34, mobile: 390.89 },
{ date: "2024-05-06", desktop: 4980.12, mobile: 520.45 },
{ date: "2024-05-07", desktop: 3880.56, mobile: 300.67 },
{ date: "2024-05-08", desktop: 1490.89, mobile: 210.23 },
{ date: "2024-05-09", desktop: 2270.34, mobile: 180.89 },
{ date: "2024-05-10", desktop: 2930.12, mobile: 330.45 },
{ date: "2024-05-11", desktop: 3350.56, mobile: 270.67 },
{ date: "2024-05-12", desktop: 1970.89, mobile: 240.23 },
{ date: "2024-05-13", desktop: 1970.34, mobile: 160.89 },
{ date: "2024-05-14", desktop: 4480.12, mobile: 490.45 },
{ date: "2024-05-15", desktop: 4730.56, mobile: 380.67 },
{ date: "2024-05-16", desktop: 3380.89, mobile: 400.23 },
{ date: "2024-05-17", desktop: 4990.34, mobile: 420.89 },
{ date: "2024-05-18", desktop: 3150.12, mobile: 350.45 },
{ date: "2024-05-19", desktop: 2350.56, mobile: 180.67 },
{ date: "2024-05-20", desktop: 1770.89, mobile: 230.23 },
{ date: "2024-05-21", desktop: 820.34, mobile: 140.89 },
{ date: "2024-05-22", desktop: 810.12, mobile: 120.45 },
{ date: "2024-05-23", desktop: 2520.56, mobile: 290.67 },
{ date: "2024-05-24", desktop: 2940.89, mobile: 220.23 },
{ date: "2024-05-25", desktop: 2010.34, mobile: 250.89 },
{ date: "2024-05-26", desktop: 2130.12, mobile: 170.45 },
{ date: "2024-05-27", desktop: 4200.56, mobile: 460.67 },
{ date: "2024-05-28", desktop: 2330.89, mobile: 190.23 },
{ date: "2024-05-29", desktop: 780.34, mobile: 130.89 },
{ date: "2024-05-30", desktop: 3400.12, mobile: 280.45 },
{ date: "2024-05-31", desktop: 1780.56, mobile: 230.67 },
{ date: "2024-06-01", desktop: 1780.89, mobile: 200.23 },
{ date: "2024-06-02", desktop: 4700.34, mobile: 410.89 },
{ date: "2024-06-03", desktop: 1030.12, mobile: 160.45 },
{ date: "2024-06-04", desktop: 4390.56, mobile: 380.67 },
{ date: "2024-06-05", desktop: 880.89, mobile: 140.23 },
{ date: "2024-06-06", desktop: 2940.34, mobile: 250.89 },
{ date: "2024-06-07", desktop: 3230.12, mobile: 370.45 },
{ date: "2024-06-08", desktop: 3850.56, mobile: 320.67 },
{ date: "2024-06-09", desktop: 4380.89, mobile: 480.23 },
{ date: "2024-06-10", desktop: 1550.34, mobile: 200.89 },
{ date: "2024-06-11", desktop: 920.12, mobile: 150.45 },
{ date: "2024-06-12", desktop: 4920.56, mobile: 420.67 },
{ date: "2024-06-13", desktop: 810.89, mobile: 130.23 },
{ date: "2024-06-14", desktop: 4260.34, mobile: 380.89 },
{ date: "2024-06-15", desktop: 3070.12, mobile: 350.45 },
{ date: "2024-06-16", desktop: 3710.56, mobile: 310.67 },
{ date: "2024-06-17", desktop: 4750.89, mobile: 520.23 },
{ date: "2024-06-18", desktop: 1070.34, mobile: 170.89 },
{ date: "2024-06-19", desktop: 3410.12, mobile: 290.45 },
{ date: "2024-06-20", desktop: 4080.56, mobile: 450.67 },
{ date: "2024-06-21", desktop: 1690.89, mobile: 210.23 },
{ date: "2024-06-22", desktop: 3170.34, mobile: 270.89 },
{ date: "2024-06-23", desktop: 4800.12, mobile: 530.45 },
{ date: "2024-06-24", desktop: 1320.56, mobile: 180.67 },
{ date: "2024-06-25", desktop: 1410.89, mobile: 190.23 },
{ date: "2024-06-26", desktop: 4340.34, mobile: 380.89 },
{ date: "2024-06-27", desktop: 4480.12, mobile: 490.45 },
{ date: "2024-06-28", desktop: 1490.56, mobile: 200.67 },
{ date: "2024-06-29", desktop: 1030.89, mobile: 160.23 },
{ date: "2024-06-30", desktop: 4460.34, mobile: 400.89 },
]

const chartConfig = {
  views: {
    label: "Ad Views",
  },
  desktop: {
    label: "Instagram",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Telegram",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartDemo() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Ad Revenue 3m</CardTitle>
          <CardDescription>
            Total ad revenue for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  ${total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  formatter={(value) => {
                    if (typeof value === 'number') {
                      return `$${value.toFixed(2)}`; // Format the number with $ and two decimal places
                    }
                    return value;
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
