// src/sanity/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "c4bleu5x",          // ✅ correct project ID
  dataset: "production",          // ✅ must exist in Sanity
  apiVersion: "2024-01-01",        // ✅ valid date
  useCdn: false,                    // ✅ recommended
});

