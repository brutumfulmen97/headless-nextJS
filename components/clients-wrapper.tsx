import { getClientImages } from "@/content/queries";
import Clients from "./clients";

const ClientsWrapper = async () => {
  const data = await getClientImages();

  if (!data) return null;

  return <Clients content={data.assetCollection.items} />;
};

export default ClientsWrapper;
