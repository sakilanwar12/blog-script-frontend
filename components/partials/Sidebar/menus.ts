import { Home, FileText } from "lucide-react";
interface IMenuItem {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
    children?: IMenuItem[];
}
export const navItems: IMenuItem[] = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    {
        icon: FileText,
        label: "Posts",
        href: "/admin/post",
        children: [
            {
                label: "Create",
                href: "/admin/post/create",
            },
            {
                label: "Posts",
                href: "/admin/post/view",
            },
        ],
    },
];
