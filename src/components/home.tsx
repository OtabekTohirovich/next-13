"use client";
import { PostsType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Text from "./text/text";

const Home = () => {
  const [posts, setPosts] = useState<PostsType[]>([])
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        console.log(data);
        
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally{
        setIsLoading(false)
      }
    };
    getData()
  }, []);
  return (
    <>
    {isLoading ? "Loading..." : (
        posts.map(c=>(
            <div key={c.id}>
                <Link href={`/posts/${c.id}`}>{c.title}</Link>
            </div>
        ))
    )}
    <Text title={'mazzami'}/>
    </>
  );
};

export default Home;
