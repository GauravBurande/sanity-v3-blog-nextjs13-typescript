type Props = {
    posts: Post[];
}

const BlogList = ({posts}: Props) => {
  return (
    <div>
      {posts.length}
    </div>
  )
}

export default BlogList
