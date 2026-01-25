"use client";
import { getPost } from "@/lib/api/post.api";
import QUERY_KEYS from "@/lib/api/query-keys";
import { ActionIcon, Checkbox, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { SquarePen, Trash2 } from "lucide-react";

function PostViewTable() {
  const {
    data: getPostRes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: QUERY_KEYS.POST.GET_POSTS,
    queryFn: getPost,
    retry: false,
  });

  const getPostData = getPostRes?.data;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ width: "20px", paddingRight: "10px" }}>
            <Checkbox />
          </Table.Th>
          <Table.Th style={{ paddingLeft: "0px" }}>Title</Table.Th>
          <Table.Th>Author</Table.Th>
          <Table.Th>Categories</Table.Th>
          <Table.Th>Content</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th style={{ textAlign: "right" }}>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {getPostData?.map((post) => (
          <Table.Tr key={post.id}>
            <Table.Td>
              <Checkbox />
            </Table.Td>
            <Table.Td style={{ paddingLeft: "0px" }}>
              <p>{post?.title}</p>
            </Table.Td>
            <Table.Td>{post.content}</Table.Td>
            <Table.Td>Sakil Anwar</Table.Td>
            <Table.Td>Blog</Table.Td>
            <Table.Td>last modified</Table.Td>
            <Table.Td style={{ textAlign: "right" }}>
              <ActionIcon variant="transparent" size="sm" className="mr-3">
                <SquarePen className="size-6" />
              </ActionIcon>
              <ActionIcon variant="transparent" size="sm">
                <Trash2 className="size-6 text-red-500" />
              </ActionIcon>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default PostViewTable;
