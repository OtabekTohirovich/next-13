import { PostsType } from "@/interface";
import Link from "next/link";
import React, { FC } from "react";

const Posts: FC<{ data: PostsType[] }> = ({ data }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>
              <Link href={`/posts/${c.id}`}>{c.title}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
