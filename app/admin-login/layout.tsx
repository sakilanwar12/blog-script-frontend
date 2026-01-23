import QueryProvider from "@/providers/QueryProvider";

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            {children}
        </QueryProvider>
    );
}

export default AuthLayout;