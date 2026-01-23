"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Field, 
  FieldContent, 
  FieldDescription, 
  FieldGroup, 
  FieldLabel, 
  FieldSet, 
  FieldTitle 
} from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { gsap } from "gsap";
import { User, Bell, Shield, Palette, Globe } from "lucide-react";

import { useTheme } from "next-themes"

export default function SettingsPage() {
  const containerRef = useRef(null);
  const { setTheme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".settings-section", {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-8 p-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Separator />

      <div className="grid gap-8">
        <section className="settings-section grid gap-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>
                This is how others will see you on the site.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FieldGroup>
                <Field>
                  <FieldLabel>Username</FieldLabel>
                  <FieldContent>
                    <Input placeholder="shadcn" defaultValue="ahmed_dev" />
                    <FieldDescription>
                      This is your public display name.
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <FieldContent>
                    <Input placeholder="m@example.com" defaultValue="ahmed@example.com" />
                    <FieldDescription>
                      Your primary email address.
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Bio</FieldLabel>
                  <FieldContent>
                    <Input placeholder="Tell us about yourself" defaultValue="Full-stack developer loving GSAP and Shadcn UI." />
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 px-6 py-4">
              <Button>Update profile</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="settings-section grid gap-4">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Choose what you want to be notified about.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Marketing emails</p>
                  <p className="text-xs text-muted-foreground">
                    Receive emails about new products, features, and more.
                  </p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Security emails</p>
                  <p className="text-xs text-muted-foreground">
                    Receive emails about your account activity and security.
                  </p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="settings-section grid gap-4">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>
                Select the theme for the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => setTheme("light")}>
                <div className="aspect-video rounded-md border-2 border-muted bg-popover p-1 group-hover:border-primary transition-colors">
                  <div className="h-full w-full rounded-sm bg-[#ecedf0]" />
                </div>
                <span className="text-xs text-center font-medium">Light</span>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => setTheme("dark")}>
                <div className="aspect-video rounded-md border-2 border-primary bg-popover p-1">
                  <div className="h-full w-full rounded-sm bg-slate-950" />
                </div>
                <span className="text-xs text-center font-medium">Dark</span>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => setTheme("system")}>
                <div className="aspect-video rounded-md border-2 border-muted bg-popover p-1 group-hover:border-primary transition-colors">
                  <div className="h-full w-full rounded-sm bg-slate-400" />
                </div>
                <span className="text-xs text-center font-medium">System</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
