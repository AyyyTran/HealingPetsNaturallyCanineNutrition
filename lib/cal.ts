import { getPlan, type PlanId } from "./plans";

export function calEventLink(planId: PlanId) {
  const plan = getPlan(planId);
  if (!plan) return "";
  const username = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "";
  const slug = process.env[plan.envSlugKey] ?? "";
  if (!username || !slug) return "";
  return `${username}/${slug}`;
}

export function calFallbackUrl(planId: PlanId) {
  const link = calEventLink(planId);
  return link ? `https://cal.com/${link}` : "";
}
