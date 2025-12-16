import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/integrations/supabase/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// For public bucket images (website display assets)
export function getMediaUrl(bucket: string, path: string): string {
  if (!path) return "";
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

// For private bucket files that need signed URLs (quote attachments)
export async function getSignedMediaUrl(bucket: string, path: string, expiresIn: number = 3600): Promise<string> {
  if (!path) return "";
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, expiresIn);
  if (error) {
    console.error("Error creating signed URL:", error);
    return "";
  }
  return data?.signedUrl || "";
}