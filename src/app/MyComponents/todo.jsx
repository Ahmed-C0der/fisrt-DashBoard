"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import React from "react";
import { format } from "date-fns";
const items = [
  { id: 1, content: "Review Q2 campaign performance report", checked: true },
  { id: 2, content: "Update product inventory for spring collection", checked: true },
  { id: 3, content: "Follow up with enterprise client onboarding", checked: false },
  { id: 4, content: "Push hotfix to production — checkout flow", checked: true },
  { id: 5, content: "Schedule weekly team standup", checked: true },
  { id: 6, content: "Audit landing page conversion rate", checked: false },
  { id: 7, content: "Integrate Stripe webhook for subscription renewals", checked: true },
  { id: 8, content: "Review pull requests from dev team", checked: false },
  { id: 9, content: "Prepare client demo environment", checked: false },
  { id: 10, content: "Update API documentation for v2.1", checked: true },
  { id: 11, content: "Optimize database queries on orders table", checked: false },
  { id: 12, content: "Set up staging environment for new client", checked: true },
  { id: 13, content: "Design new dashboard widget for analytics", checked: false },
  { id: 14, content: "Resolve reported bug in user permissions", checked: true },
  { id: 15, content: "Write unit tests for auth module", checked: false },
  { id: 16, content: "Sync with designer on mobile breakpoints", checked: true },
  { id: 17, content: "Deploy v2.3 to production server", checked: false },
  { id: 18, content: "Review monthly SaaS usage metrics", checked: true },
  { id: 19, content: "Refactor legacy payment service", checked: false },
  { id: 20, content: "Send project progress report to stakeholders", checked: true },
  { id: 21, content: "Configure CDN caching rules for media assets", checked: false },
  { id: 22, content: "Migrate user data to new schema", checked: true },
  { id: 23, content: "Set up error monitoring with Sentry", checked: true },
  { id: 24, content: "Conduct code review for onboarding flow", checked: false },
  { id: 25, content: "Plan sprint 14 backlog with product team", checked: false },
  { id: 26, content: "Fix broken image URLs in CMS", checked: true },
  { id: 27, content: "Enable two-factor authentication for admin panel", checked: false },
  { id: 28, content: "Build export-to-CSV feature for reports", checked: true },
  { id: 29, content: "Update privacy policy page content", checked: false },
  { id: 30, content: "Run Lighthouse audit on all key pages", checked: true }
];

function TODo() {
  const [date, setDate] = React.useState( new Date());
  const [open, setOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState(items);

function toggleChecked(id, value) {
  setTasks(prev =>
    prev.map(item =>
      item.id === id ? { ...item, checked: value } : item
    )
  );
}

  return (
    <div className="flex gap-4 flex-col items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className={"w-full"}>{date ? format(date,"PPP") : <span>Pick your Date</span>}
          <CalendarIcon />
          </Button>
          
        </PopoverTrigger>
        <PopoverContent>
            
          <Calendar
            mode="single"
            selected={date}
            onSelect={(data)=>{
                setDate(data)
                setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="h-80 w-full">
  {tasks.map(item => (
    <Card key={item.id}>
      <CardContent className="flex gap-2 items-center py-4">
        <Checkbox
          id={String(item.id)}
          checked={item.checked}
          onCheckedChange={(value) => toggleChecked(item.id, value)}
        />
        <Label htmlFor={String(item.id)}>{item.content}</Label>
      </CardContent>
    </Card>
  ))}
</ScrollArea>

    </div>
  );
}

export default TODo;
