"use client";

import Cal from "@calcom/embed-react";
import { calEventLink, calFallbackUrl } from "@/lib/cal";
import type { PlanId } from "@/lib/plans";

export function CalEmbed({
  planId,
  name,
  email,
  notes,
}: {
  planId: PlanId;
  name: string;
  email: string;
  notes: string;
}) {
  const calLink = calEventLink(planId);
  const fallback = calFallbackUrl(planId);
  if (!calLink) {
    return (
      <p>
        Scheduling is not configured yet. Email info@healingpetsnutrition.com.
      </p>
    );
  }
  return (
    <div>
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "700px", overflow: "scroll" }}
        config={{
          name,
          email,
          notes,
          theme: "light",
        }}
      />
      <p className="mt-4 text-center">
        Calendar not loading?{" "}
        <a className="underline" href={fallback} target="_blank" rel="noreferrer">
          Open scheduler
        </a>
      </p>
    </div>
  );
}
