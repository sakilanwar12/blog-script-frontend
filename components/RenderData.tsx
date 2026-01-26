import { ReactNode } from "react";
import { Loader, Alert, Center, Stack, Text } from "@mantine/core";
import { AlertCircle } from "lucide-react";

interface RenderDataProps {
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  error?: Error | null;
  isEmpty?: boolean;
  children: ReactNode;
  loadingMessage?: string;
  emptyMessage?: string;
  errorTitle?: string;
}

function RenderData({
  isLoading = false,
  isFetching = false,
  isError = false,
  error = null,
  isEmpty = false,
  children,
  loadingMessage = "Loading data...",
  emptyMessage = "No data available",
  errorTitle = "Error loading data",
}: RenderDataProps) {
  // Show loading state
  if (isLoading) {
    return (
      <Center style={{ minHeight: "300px" }}>
        <Stack align="center" gap="md">
          <Loader size="lg" />
          <Text size="sm" c="dimmed">
            {loadingMessage}
          </Text>
        </Stack>
      </Center>
    );
  }

  // Show error state
  if (isError) {
    return (
      <Alert
        icon={<AlertCircle size={20} />}
        title={errorTitle}
        color="red"
        variant="light"
        style={{ margin: "20px 0" }}
      >
        {error?.message || "An unexpected error occurred. Please try again."}
      </Alert>
    );
  }

  // Show empty state
  if (isEmpty) {
    return (
      <Center style={{ minHeight: "300px" }}>
        <Stack align="center" gap="md">
          <Text size="lg" fw={500} c="dimmed">
            {emptyMessage}
          </Text>
        </Stack>
      </Center>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {isFetching && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10,
            padding: "10px",
          }}
        >
          <Loader size="sm" />
        </div>
      )}
      {children}
    </div>
  );
}

export default RenderData;
