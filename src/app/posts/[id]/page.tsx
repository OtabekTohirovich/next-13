import axios from "axios";

async function getData(id: string) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}

const PostsDetailsPage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return (
    <div>
      <h2>{data.title}</h2>
      <div>{data.body}</div>
    </div>
  );
};

export default PostsDetailsPage;
