import {
    Home,
    Users,
    Settings,
    BarChart3,
    Package,
    FileText,
} from "lucide-react";

export const navItems = [
    { icon: Home, label: "Dashboard", href: "/admin", badge: null },
    { icon: Users, label: "Users", href: "/admin/users", badge: "12" },
    { icon: Package, label: "Products", href: "/admin/products", badge: null },
    {
        icon: BarChart3,
        label: "Analytics",
        href: "/admin/analytics",
        badge: null,
    },
    { icon: FileText, label: "Reports", href: "/admin/reports", badge: "3" },
    { icon: Settings, label: "Settings", href: "/admin/settings", badge: null },
];