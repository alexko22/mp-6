// Alex Olson | alexko@bu.edu
// app/api/auth/[...nextauth]/route.ts - Auth.js initialization as instructed by documentation
// if curious you can find the setup documentation here: https://authjs.dev/getting-started/installation?framework=Next.js

import { handlers } from "@/auth"
export const { GET, POST } = handlers