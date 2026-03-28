import { getSupabaseClient } from './supabase'
import {
  FALLBACK_TEAS,
  FALLBACK_MENU_ITEMS,
  type Tea,
  type MenuItem,
} from './fallback-data'

// Fetch teas — falls back to static data when Supabase is not configured or table is empty
export async function getTeas(): Promise<Tea[]> {
  const client = getSupabaseClient()
  if (!client) return FALLBACK_TEAS

  try {
    const { data, error } = await client
      .from('teas')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data && data.length > 0 ? (data as Tea[]) : FALLBACK_TEAS
  } catch {
    return FALLBACK_TEAS
  }
}

// Fetch menu items — falls back to static data when Supabase is not configured or table is empty
export async function getMenuItems(): Promise<MenuItem[]> {
  const client = getSupabaseClient()
  if (!client) return FALLBACK_MENU_ITEMS

  try {
    const { data, error } = await client
      .from('menu_items')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data && data.length > 0 ? (data as MenuItem[]) : FALLBACK_MENU_ITEMS
  } catch {
    return FALLBACK_MENU_ITEMS
  }
}
