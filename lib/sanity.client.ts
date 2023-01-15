import { createClient } from "next-sanity"

export const projectId: any = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset: any = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion= process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: true,
})
