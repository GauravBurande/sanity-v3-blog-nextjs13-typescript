"use client";

import { usePreview } from "../lib/sanity.preview"
import { groq } from "next-sanity"
import BlogList from "./BlogList"

type Props = {
  query: string
}

export default function PreviewBlogList({query}: Props) {

    const posts = usePreview(null, query)
    return (
        <div>
            <BlogList posts={posts} />
        </div>
    )
}