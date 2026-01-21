import AuthProvider from "@/providers/AuthProvider";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default AdminLayout;