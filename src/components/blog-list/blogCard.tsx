import React, { ReactElement } from "react";
import { BlogListType } from "../../types/blogTypes";

interface Props {
  auth?: boolean;
  data: BlogListType;
}

function BlogCard({ auth, data }: Props): ReactElement {
  return <div>{data.title}</div>;
}

export default BlogCard;
