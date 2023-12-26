import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function ContainerComponentHandler() {
  return (
    <>
      <ResourceLoader resourceUrl="http://localhost:8080/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="http://localhost:8080/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default ContainerComponentHandler;
