import { PostsType } from "@/interface";
import axios from "axios";
import Link from "next/link";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return data;
}

const PostsPage = async () => {
  const data: PostsType[] = await getData();
  return (
    <>
      {data.map((c) => (
        <div key={c.id}>
          <Link href={`/posts/${c.id}`}>{c.title}</Link>
        </div>
      ))}
    </>
  );
};

export default PostsPage;
