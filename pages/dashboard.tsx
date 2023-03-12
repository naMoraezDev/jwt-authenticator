import { UserCanSee } from "@/components/UserCanSee";
import { useAuth } from "@/contexts/AuthContext";
import { setupApiClient } from "@/services/api";
import { withSSRAuth } from "@/utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <UserCanSee permissions={["metrics.list"]}>
        <div>Métricas</div>
      </UserCanSee>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
