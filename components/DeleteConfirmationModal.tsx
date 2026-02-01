import {
  Modal,
  Button,
  Text,
  Group,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { AlertTriangle } from "lucide-react";

interface IDeleteConfirmationDialogProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  title?: string;
}
export default function DeleteConfirmationDialog({
  opened,
  onClose,
  onConfirm,
  loading = false,
  message = "If you delete this item, it will be permanently deleted and cannot be recovered.",
  confirmText = "Delete",
  cancelText = "Cancel",
  title = "Are you sure you want to delete this item?",
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
        <Stack gap="sm">
          <Text size="lg" className="warning-text">
            {title}
          </Text>
          <Text size="md" className="warning-text">
            {message}
          </Text>

          <Group grow   gap="md" mt="md">
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
              color="#ef4444"
            >
              {loading ? "Deleting..." : confirmText}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
