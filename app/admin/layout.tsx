import QueryProvider from "@/providers/QueryProvider";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            {children}
        </QueryProvider>
    );
}

export default AdminLayout;