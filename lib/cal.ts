import { getPlan, type PlanId } from "./plans";

export function calEventLink(planId: PlanId) {
  const plan = getPlan(planId);
  if (!plan) return "";
  const slugs: Record<PlanId, string> = {
    supplement: process.env.NEXT_PUBLIC_CAL_EVENT_SUPPLEMENT ?? "",
    nutrition: process.env.NEXT_PUBLIC_CAL_EVENT_NUTRITION ?? "",
    premium: process.env.NEXT_PUBLIC_CAL_EVENT_PREMIUM ?? "",
  };
  const username = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "";
  const slug = slugs[plan.id];
  if (!username || !slug) return "";
  return `${username}/${slug}`;
}

export function calFallbackUrl(planId: PlanId) {
  const link = calEventLink(planId);
  return link ? `https://cal.com/${link}` : "";
}
