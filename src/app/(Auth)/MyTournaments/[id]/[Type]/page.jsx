import Single from "./Single/Single";
import Double from "./Double/Double";

function Page({ params }) {
  return params.Type === "single" ? <Single /> : <Double />;
}

export default Page;
