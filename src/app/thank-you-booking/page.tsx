import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your call with GrowVibe is booked — here's what happens next.",
  robots: { index: false, follow: true },
};

export default function ThankYouBookingPage() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container flex flex-col items-center py-24 text-center">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <Badge variant="accent" className="mt-6">
            Booking Confirmed
          </Badge>
          <h1 className="mx-auto mt-4 max-w-xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            You&apos;re booked
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
            Your call is on the calendar. You&apos;ll get a calendar invite
            and confirmation email with the details shortly.
          </p>

          <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-xl border border-border/70 bg-secondary/40 p-4 text-left">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Need to reach us sooner?</span>{" "}
              We reply to messages within 4 hours during business hours.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/">
                Back to homepage
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
