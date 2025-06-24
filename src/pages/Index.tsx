
import AdminDashboard from "@/components/AdminDashboard";
import { getCurrentUserRole } from "@/utils/userRole";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const userRole = getCurrentUserRole();

  useEffect(() => {
    // Redirect non-admin users to cases page
    if (userRole !== 'admin') {
      navigate('/cases');
    }
  }, [userRole, navigate]);

  // Only render admin dashboard for admin users
  if (userRole !== 'admin') {
    return null; // This will briefly show before redirect
  }

  return (
    <main className="flex-1">
      <AdminDashboard />
    </main>
  );
};

export default Index;
