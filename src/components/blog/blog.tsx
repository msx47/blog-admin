import React, { ReactElement } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BlogListType } from "../../types/blogTypes";
import BlogLists from "../blog-list/blogLists";
import BlogNav from "../blog-nav/blogNav";
import WithTransition from "../hoc/withTransition";

interface Props {
  auth?: boolean;
}

export const BlogContext = React.createContext<[BlogListType] | null>(null);

async function fetcher(uri: string) {
  const json = await fetch(uri, {
    credentials: "include",
  });
  let data;
  if (json.ok) {
    data = await json.json();
  } else {
    throw new Error("internal server error");
  }

  return data as [BlogListType];
}

function Blog({ auth }: Props): ReactElement {
  const { data, error, loading } = useFetch("/api/list", fetcher, true, 3600);

  const render = loading ? (
    <div>loading</div>
  ) : data ? (
    <BlogContext.Provider value={data}>
      <div className="flex flex-col w-10/12 items-center opacity-[inherit]">
        <BlogNav count={data ? data.length : -1} />
        <BlogLists />
      </div>
    </BlogContext.Provider>
  ) : error ? (
    <div>Something went very horrible</div>
  ) : (
    <div>Something went wrong</div>
  );

  return <WithTransition children={render} />;
}

export default Blog;
