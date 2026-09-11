import { handleIntakePost } from "@/lib/intake-handler";

export async function POST(req: Request) {
  return handleIntakePost(req);
}
