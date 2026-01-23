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
  { id: 1, content: "Learn JavaScript basics", checked: false },
  { id: 2, content: "Practice arrays and objects", checked: true },
  { id: 3, content: "Study asynchronous programming", checked: false },
  { id: 4, content: "Master DOM manipulation", checked: true },
  { id: 5, content: "Build a calculator app", checked: false },
  { id: 6, content: "Learn fetch API", checked: true },
  { id: 7, content: "Work with JSON data", checked: true },
  { id: 8, content: "Use localStorage", checked: false },
  { id: 9, content: "Learn TypeScript basics", checked: false },
  { id: 10, content: "Understand modules", checked: true },
  { id: 11, content: "Use npm packages", checked: false },
  { id: 12, content: "Discover React components", checked: true },
  { id: 13, content: "Learn JSX syntax", checked: false },
  { id: 14, content: "Study state & props", checked: true },
  { id: 15, content: "Build a todo app", checked: false },
  { id: 16, content: "Study routing", checked: false },
  { id: 17, content: "Use context API", checked: true },
  { id: 18, content: "Fetch data in React", checked: true },
  { id: 19, content: "Learn Next.js basics", checked: false },
  { id: 20, content: "Understand SSR & CSR", checked: false },
  { id: 21, content: "Build REST API with Node", checked: true },
  { id: 22, content: "Connect to MongoDB", checked: false },
  { id: 23, content: "Build authentication", checked: false },
  { id: 24, content: "Deploy app to Vercel", checked: true },
  { id: 25, content: "Study CI/CD pipelines", checked: false },
  { id: 26, content: "Practice problem solving", checked: true },
  { id: 27, content: "Learn Git & GitHub", checked: true },
  { id: 28, content: "Understand Clean Code", checked: false },
  { id: 29, content: "Develop debugging skills", checked: true },
  { id: 30, content: "Improve performance", checked: false }
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
