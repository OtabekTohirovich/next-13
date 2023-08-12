import Posts from "@/components/posts";
import { PostsType } from "@/interface";
import axios from "axios";
import { notFound } from "next/navigation";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  // await new Promise((resolve)=> setTimeout(()=>{
  //   resolve('')
  // }, 2000))

  return data;
}

const PostsPage = async () => {
  const data: PostsType[] = await getData();
  if(!data.length){
    notFound()
  }
  return (
    <Posts data={data}/>
  );
};

export default PostsPage;
