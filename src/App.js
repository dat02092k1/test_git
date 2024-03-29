// import logo from './logo.svg';
// import './App.css';

// function App() {
  
// }

// export default App;

function SearchBar() {
  return (
    <form>
      <input placeholder="Search..." />
      <br/>
      <label>
        <input type="checkbox" />
        {' '}
        HEHHHH
      </label>
    </form>
  );
}

function ProductCategoryRow({ category }) {
  console.log(category)
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}) {
  const name = product.stocked ? product.name:
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}

function ProductTable( { products }) { 
  // console.log(products)
    const row = [];
    let lastCategory = null;

    products.forEach((product) => {
      // console.log(product)
      if (product.category !== lastCategory) {
        row.push(
          <ProductCategoryRow
            category={product.category}
            key = {product.category} />
          
        );
      }
      row.push(
        <ProductRow
          product = {product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
}

function FilterableProductTable({products}) {
 // console.log(products)
  return (
    <div>
      <SearchBar/>
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}