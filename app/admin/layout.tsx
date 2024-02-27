import AdminSidebar from "../components/AdminSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 p-3">
     
      <div className="col-12">{children}</div>
    </div>
  );
}