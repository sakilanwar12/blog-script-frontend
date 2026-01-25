"use client";
import { getPost } from "@/lib/api/post.api";
import QUERY_KEYS from "@/lib/api/query-keys";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

function PostViewTable() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: QUERY_KEYS.POST.GET_POSTS,
    queryFn: getPost,
    retry: false,
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>content</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data?.data?.map((post) => (
          <Table.Tr key={post.id}>
            <Table.Td>{post.title}</Table.Td>
            <Table.Td>{post.content}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default PostViewTable;
