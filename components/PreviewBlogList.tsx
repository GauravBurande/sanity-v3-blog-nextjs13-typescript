"use client";

import { usePreview } from "../lib/sanity.preview"
import { groq } from "next-sanity"
import { lazy } from "react";
// import BlogList from "./BlogList"

const PreviewBlogList = () => {

    const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt, desc)
`
  
    const BlogList = lazy(() => import("./BlogList"))
    const posts = usePreview(null, query)
    return  (
        <div>
            <BlogList posts={posts} />
        </div>
    )
}

export default PreviewBlogList