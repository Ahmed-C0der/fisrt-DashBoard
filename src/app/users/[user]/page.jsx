import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Zap, Flame, Edit2, MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyUserChart from "@/app/MyComponents/userChart";
import UserSheet from "@/app/MyComponents/userSheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function User() {
  const user = {
    name: "John Doe",
    username: "john.doe",
    email: "john.doe@gmail.com",
    phone: "+1 234 5678",
    location: "New York, NY",
    role: "Admin",
    joined: "2025.01.01",
    profileCompletion: 75,
  };

  const transactions = [
    {
      id: 1,
      type: "Subscription Renewal",
      user: "John Doe",
      amount: "1.4K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 2,
      type: "Payment for Services",
      user: "Jane Smith",
      amount: "2.1K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 3,
      type: "Subscription Renewal",
      user: "Michael Johnson",
      amount: "1.3K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      type: "Product Purchase",
      user: "Sarah Williams",
      amount: "0.8K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 5,
      type: "Service Upgrade",
      user: "Robert Wilson",
      amount: "2.5K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 6,
      type: "Subscription Renewal",
      user: "John Doe",
      amount: "1.4K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 7,
      type: "Payment for Services",
      user: "Jane Smith",
      amount: "2.1K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 8,
      type: "Subscription Renewal",
      user: "Michael Johnson",
      amount: "1.3K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 9,
      type: "Product Purchase",
      user: "Sarah Williams",
      amount: "0.8K",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 10,
      type: "Service Upgrade",
      user: "Robert Wilson",
      amount: "2.5K",
      avatar: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex-col flex xl:flex-row gap-6 ">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6 xl:w-1/3">
          {/* User Badges */}
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">User Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <HoverCard>
                  <HoverCardTrigger>
                    <Shield className="w-6 h-6" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Verified Account: This user has successfully completed all security verification steps.
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="p-3 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                <HoverCard>
                  <HoverCardTrigger>
                    <Award className="w-6 h-6" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Top Contributor: Recognized for providing exceptional value and support to the community.
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                <HoverCard>
                  <HoverCardTrigger>
                    <Zap className="w-6 h-6" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Power User: Granted for demonstrating advanced proficiency and high engagement levels.
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <HoverCard>
                  <HoverCardTrigger>
                    <Flame className="w-6 h-6" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    On Fire: Awarded for maintaining a consistent daily activity streak over the last 30 days.
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          {/* User Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold">
                User Information
              </CardTitle>
              <UserSheet />
              
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium text-muted-foreground">
                  <span>Profile completion</span>
                </div>
                <div className="flex items-center gap-4">
                  <Progress
                    value={user.profileCompletion}
                    className="h-2 flex-1"
                  />
                  <span className="text-sm font-bold">
                    {user.profileCompletion}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Username:</span>
                  <span className="text-sm text-muted-foreground">
                    {user.username}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Email:</span>
                  <span className="text-sm text-muted-foreground">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Phone:</span>
                  <span className="text-sm text-muted-foreground">
                    {user.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Location:</span>
                  <span className="text-sm text-muted-foreground">
                    {user.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Role:</span>
                  <Badge
                    variant="secondary"
                    className="bg-white text-black hover:bg-white/90 px-3 py-0.5 text-xs font-bold"
                  >
                    {user.role}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Joined on {user.joined}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <ScrollArea className="h-[200px]">
              <CardContent className="flex flex-col gap-4">
                {transactions.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-background">
                        <AvatarImage src={t.avatar} />
                        <AvatarFallback>{t.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{t.type}</span>
                        <span className="text-xs text-muted-foreground">
                          {t.user}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold">{t.amount}</span>
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 xl:w-2/3">
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">User Card</CardTitle>
            </CardHeader>
            <CardContent className="h-[120px] italic  rounded-xl m-4 mt-0">
              <div className="flex items-center gap-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-bold">John Doe</h1>
              </div>
              <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
            </CardContent>
          </Card>

          <MyUserChart className="h-[240px]" />
          {/* <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Chart</CardTitle>
            </CardHeader>
            <CardContent asChild className="h-[240px] flex items-center justify-center text-muted-foreground italic border-2 border-dashed border-muted rounded-xl m-4 mt-0">
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
