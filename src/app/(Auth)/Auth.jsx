import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import Dashboards from "./Dashboards/Dashboards";

function Auth() {
  return (
    <AuthWrapper>
      <Dashboards />
    </AuthWrapper>
  );
}
export default Auth;
