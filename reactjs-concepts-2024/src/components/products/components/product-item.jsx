import styles from "./product-item.module.css"; // module styling

// nested component

function ButtonComponent() {
  // console.log(styles);

  return <button className={styles.buttonStyle}>Click</button>;
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div
      style={{ padding: "20px", border: "2px solid red", marginBottom: "10px" }}
      key={key}
    >
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
