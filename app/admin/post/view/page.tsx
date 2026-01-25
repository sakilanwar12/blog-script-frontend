import { Title } from "@mantine/core";
import PostViewTable from "./PostViewTable";

function PostViewPage() {
  return (
    <div>
      <Title>All Posts</Title>
      <div className="h-5"></div>
      <PostViewTable />
    </div>
  );
}

export default PostViewPage;
