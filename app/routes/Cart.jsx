

export function loader({ request }) {
  const { items } = request.session.get("cart") || cart;

  return (
    <div>
      <h1>Cart</h1>
      {items.map((item) => (
        <div key={item.productId}>
          <p>{item.productId}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
