import { LucideIcon, LayoutDashboard, CandlestickChart, PieChart } from "lucide-react";

export type NavigationElement = {
  href: string;
  icon: LucideIcon | (() => React.JSX.Element);
  name: string;
};

type TransactionTypes = {
  name: string;
  stat: string;
}

export const TRANSACTION_TYPES: TransactionTypes[] = [
  { name: 'Investments', stat: 'PHP 71,897' },
  { name: 'Monthly Interest', stat: '0.05%' },
  { name: 'Monthly Interest in PHP', stat: 'PHP 3594.85' },
]

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
    href: "/client/transactions",
    icon: PieChart,
    name: "Transactions",
  },
];

export const PROFILE_NAV: NavigationElement[] = [
  {
    href: "/user/profile",
    icon: LayoutDashboard,
    name: "Profile",
  },
  {
    href: "/logout",
    icon: LayoutDashboard,
    name: "Log out",
  },
];
