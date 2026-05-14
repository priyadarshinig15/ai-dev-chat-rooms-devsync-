import { updateSession } from '@/lib/supabase/proxy'

export async function GET(request) {
  return await updateSession(request)
}
