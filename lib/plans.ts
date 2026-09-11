export const PLAN_IDS = ["supplement", "nutrition", "premium"] as const;
export type PlanId = (typeof PLAN_IDS)[number];

export const PLANS: {
  id: PlanId;
  name: string;
  priceCad: number;
  durationMin: number;
  envSlugKey:
    | "NEXT_PUBLIC_CAL_EVENT_SUPPLEMENT"
    | "NEXT_PUBLIC_CAL_EVENT_NUTRITION"
    | "NEXT_PUBLIC_CAL_EVENT_PREMIUM";
  bullets: string[];
}[] = [
  {
    id: "supplement",
    name: "Supplement Plan",
    priceCad: 75,
    durationMin: 45,
    envSlugKey: "NEXT_PUBLIC_CAL_EVENT_SUPPLEMENT",
    bullets: [
      "Dog's health history",
      "Your goals and concerns",
      "What specific supplements could be beneficial and why",
      "A 45 minute consultation via Zoom or telephone",
      "Additional time can be purchased $20 - 15 minutes",
    ],
  },
  {
    id: "nutrition",
    name: "Nutrition Plan",
    priceCad: 120,
    durationMin: 60,
    envSlugKey: "NEXT_PUBLIC_CAL_EVENT_NUTRITION",
    bullets: [
      "Dog's health history",
      "Current and past food as well as supplements",
      "Your goals and concerns",
      "Customized food plan according to health status and activity level of your dog",
      "Discuss the benefits of raw/fresh food and what you are open to feeding",
      "Premade fresh food and homemade recipes will be discussed",
      "Weekly follow ups for 6 weeks for further protocol adjustments if needed",
      "1 hour consultation via Zoom or telephone",
      "Additional time can be purchased $20 - 15 minutes",
    ],
  },
  {
    id: "premium",
    name: "Premium Consultation Plan",
    priceCad: 160,
    durationMin: 90,
    envSlugKey: "NEXT_PUBLIC_CAL_EVENT_PREMIUM",
    bullets: [
      "Dog's health history",
      "Current and past food as well as supplements",
      "Your goals and concerns",
      "Discuss the benefits of raw/fresh food and what you are open to feeding",
      "Customized food and supplement plan with weekly follow ups",
      "Weekly follow ups for 12 weeks for further protocol adjustments if needed",
      "Free bone broth recipe, which is great for joint, immune, gut health and many more",
      "90 minute consultation via Zoom or telephone",
      "Additional time can be purchased $20 - 15 minutes",
    ],
  },
];

export function getPlan(id: string) {
  return PLANS.find((plan) => plan.id === id);
}
