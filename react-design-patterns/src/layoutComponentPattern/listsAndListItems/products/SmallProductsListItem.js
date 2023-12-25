export const SmallProductsListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <p>
      Name: {name}, Price: {price}
    </p>
  );
};
