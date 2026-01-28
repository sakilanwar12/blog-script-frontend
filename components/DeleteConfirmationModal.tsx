import {
  Modal,
  Button,
  Text,
  Group,
  Stack,
  ThemeIcon,
  Box,
} from "@mantine/core";
import { AlertTriangle } from "lucide-react";

interface IDeleteConfirmationDialogProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}
export default function DeleteConfirmationDialog({
  opened,
  onClose,
  onConfirm,
  loading = false,
  title = "Confirm Deletion",
  message = "You are about to permanently delete this item. This action cannot be undone and all associated data will be lost forever.",
  confirmText = "Delete Forever",
  cancelText = "Cancel",
}: IDeleteConfirmationDialogProps) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title={
          <Group gap="sm">
            <ThemeIcon
              size={40}
              radius="md"
              variant="light"
              className="warning-icon"
              style={{
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              <AlertTriangle size={22} color="#ef4444" />
            </ThemeIcon>
            <Text size="xl" className="title-text">
              {title}
            </Text>
          </Group>
        }
        centered
        size="md"
        classNames={{ root: "delete-modal" }}
        overlayProps={{
          opacity: 0.7,
          blur: 8,
        }}
      >
        <Stack gap="xl">
          <Text size="md" className="warning-text">
            {message}
          </Text>

          <Box
            p="md"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "8px",
            }}
          >
            <Text size="sm" className="warning-text mono">
              <span className="code-text">DELETE_PERMANENT</span>
              {" • "}
              No recovery option available
            </Text>
          </Box>

          <Group justify="flex-end" gap="md" mt="md">
            <Button
              variant="default"
              onClick={onClose}
              className="cancel-btn"
              size="md"
              disabled={loading}
            >
              {cancelText}
            </Button>
            <Button
              className="danger-btn"
              onClick={onConfirm}
              loading={loading}
              size="md"
            >
              {loading ? "Deleting..." : confirmText}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
