import { ReactNode } from "react";

// components/AdminLayout.tsx
const AdminLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div>
        <header>Admin Header</header>
        <nav>Admin Navigation</nav>
        <main>{children}</main>
        <footer>Admin Footer</footer>
      </div>
    );
  };
  
  export default AdminLayout;
  