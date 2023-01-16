'use client';

import {definePreview} from "next-sanity/preview"
import { projectId, dataset } from "./sanity.client"

function onPublicAccessOnly() {
    throw new Error("Unable to load preview as you're  not logged in")
}

if (!projectId || !dataset) {
    throw new Error("Must provide projectId and dataset")
}  

export const usePreview = definePreview({
    projectId,
    dataset,
    // I'm not much familiar with the function below, it wasn't allowing me to preview the dataset, so I just commented it out, I did some search and stack overflow, so it's basically not allowing me to preview unless it get's the user authenticated by any means, so I'll look into this later.
    // onPublicAccessOnly,
})