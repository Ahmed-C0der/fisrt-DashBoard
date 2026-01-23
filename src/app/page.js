"use client"
import React, { useRef, useEffect } from 'react'
import Mychart from "./MyComponents/Mychart"
import Mychart2 from "./MyComponents/myChart2"
import MyChart3 from './MyComponents/myChart3'
import MyChart_2 from './MyComponents/myChart_2'
import TODo from './MyComponents/todo'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"

function Page() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <Badge variant="outline" className="px-3 py-1">v1.0.4</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        <Card className="home-card lg:col-span-2 xl:col-span-1 2xl:col-span-2 border-none bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">All Systems Operational</div>
            <p className="text-xs text-muted-foreground mt-1">Last checked 2 minutes ago</p>
          </CardContent>
        </Card>

        <Card className="home-card border-none bg-secondary/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground mt-1">New visitors today</p>
          </CardContent>
        </Card>

        <Card className="home-card border-none bg-accent/20">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground mt-1">Uptime this month</p>
          </CardContent>
        </Card>

        <Card className="home-card border-none bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <MyChart_2 />
          </CardContent>
        </Card>

        <Card className="home-card border-none bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TODo />
          </CardContent>
        </Card>

        <Card className="home-card lg:col-span-2 xl:col-span-1 2xl:col-span-2 border-none bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Revenue Stream</CardTitle>
          </CardHeader>
          <CardContent>
            <Mychart />
          </CardContent>
        </Card>

        <Card className="home-card border-none bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium">User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <MyChart3 />
          </CardContent>
        </Card>

        <Card className="home-card lg:col-span-3 xl:col-span-1 2xl:col-span-3 border-none bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Global Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <Mychart2 />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page