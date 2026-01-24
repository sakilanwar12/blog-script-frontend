import AdminLayout from "@/components/partials/AdminLayout";
import QueryProvider from "@/providers/QueryProvider";

function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AdminLayout>{children}</AdminLayout>
    </QueryProvider>
  );
}

export default AdminRootLayout;
