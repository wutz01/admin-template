import { LucideIcon, LayoutDashboard, CandlestickChart, PieChart } from "lucide-react";

export type NavigationElement = {
  href: string;
  icon: LucideIcon | (() => React.JSX.Element);
  name: string;
};

export const CLIENTS_NAV: NavigationElement[] = [
  {
    href: "/client/dashboard",
    icon: LayoutDashboard,
    name: "Dashboard",
  },
  {
    href: "/client/investments",
    icon: CandlestickChart,
    name: "Investments",
  },
  {
    href: "/client/reports",
    icon: PieChart,
    name: "Reports",
  },
];

export const PROFILE_NAV: NavigationElement[] = [
  {
    href: "/profile",
    icon: LayoutDashboard,
    name: "Profile",
  },
  {
    href: "/logout",
    icon: LayoutDashboard,
    name: "Log out",
  },
];
