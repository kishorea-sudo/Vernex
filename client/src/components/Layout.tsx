// client/src/components/Layout.tsx
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {children}
    </div>
  );
};
export default Layout;