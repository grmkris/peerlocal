import type { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import { ToggleTheme } from "./ToggleTheme";
import { AppModals } from "./modals/AppModals";

export const NAVIGATION_ITEMS = [
  <Link href="/" key={0}>
    <HomeIcon className={"h-5 w-5"} />{" "}
  </Link>,
  <Link href="/" key={1}>
    <InboxStackIcon className={"h-5 w-5"} />
  </Link>,
];

export const Layout = (props: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base-100">
      <AppModals />
      <SideNavigation>{props.children}</SideNavigation>
      <NavigationBottom />
    </main>
  );
};

const NavigationBottom = () => {
  return (
    <>
      <nav className="btm-nav lg:hidden">
        {NAVIGATION_ITEMS.map((item) => item)}
        <ToggleTheme />
      </nav>
    </>
  );
};

const SideNavigation = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-10 mt-10 px-2 py-10 sm:px-0">
      <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
          <ul className="menu rounded-box w-56 bg-base-200">
            {NAVIGATION_ITEMS.map((item) => {
              return <li key={item.key}> {item} </li>;
            })}
          </ul>
          <ToggleTheme />
        </div>

        <main className="lg:col-span-9 xl:col-span-9">{children}</main>
      </div>
    </div>
  );
};
