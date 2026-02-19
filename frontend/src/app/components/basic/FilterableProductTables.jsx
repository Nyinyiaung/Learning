'use client'

import {useState} from "react";
import '@/app/components/filterableProductTables.css'
import classNames from "classnames";
import {italic} from "next/dist/lib/picocolors";

function SearchBar({onChange}) {
    const [filter, setFilter] = useState('');
    const [inStock, setInStock] = useState(false);

    const filterOnChange = (e) => {
        setFilter(e.target.value);
        onChange({
            filter: e.target.value,
            inStock
        });
    }

    const inStockOnChange = (e) => {
        setInStock(e.target.checked);
        onChange({
            filter,
            inStock: e.target.checked
        });
    }

    return (
        <div>
            <form>
                <div>
                    <input type={'text'} value={filter} onChange={filterOnChange} />
                </div>
                <div>
                    <input type={'checkbox'} checked={inStock} onChange={inStockOnChange}/>Only show product in stock
                </div>
            </form>
        </div>
    )
}

function groupByCategory (products) {
    let group = []
    for (const product of products) {
        if (group[product.category]) {
            group[product.category].push(product);
        } else {
            group[product.category] = [product];
        }
    }

    return group;
}

function ProductTable({products}) {
    let group = groupByCategory(products);
    let categories = Object.keys(group);
    return (
        <div>
            <div className={'product-name'}>Name</div>
            <div className={'product-price'}>Price</div>

            {
                categories.map((category, index) => <ProductCategoryRow products={group[category]} key={index} />)
            }
        </div>
    )
}

function ProductCategoryRow({products}) {
    let category = products[0].category;
    return (<div>
        <h3 className={'product-category'}>{category}</h3>
        <ProductRow products={products} />
    </div>)
}

function ProductRow({products}) {
    return (<div>
        {
            products.map((product, index) => (
                <div key={index}>
                    <div className={classNames('product-name', {'product-inStock':!product.stocked})}>{product.name}</div>
                    <div className={classNames('product-price', {'product-inStock':!product.stocked})}>{product.price}</div>
                </div>
            ))
        }
    </div>)
}

export default function FilterableProductTables() {
    const initialData = [
        {category: 'Fruits', price: "$1", stocked: true, name: "Apple"},
        {category: 'Fruits', price: "$1", stocked: true, name: "Dragon Fruit"},
        {category: 'Fruits', price: "$2", stocked: false, name: "Passion Fruit"},

        {category: 'Vegetables', price: "$2", stocked: true, name: "Spinach"},
        {category: 'Vegetables', price: "$4", stocked: false, name: "Pumpkin"},
        {category: 'Vegetables', price: "$1", stocked: true, name: "Peas"},
    ]

    const [products, setProducts] = useState(initialData);
    const searchBarChange = (filterDate) => {
        console.log('Parent Search Bar Change', filterDate);

        let data = initialData;

        if (filterDate.filter) {
            data = data.filter(item => item.name.toLowerCase().includes(filterDate.filter.toString().toLowerCase()));
        }

        if (filterDate.inStock) {
            data = data.filter(d => d.stocked);
        }
        setProducts(data);
    }

    return (
        <div>
            <SearchBar onChange = {searchBarChange}/>
            <ProductTable products={products}/>
        </div>
    )
}