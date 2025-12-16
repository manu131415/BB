import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'c4bleu5x',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
