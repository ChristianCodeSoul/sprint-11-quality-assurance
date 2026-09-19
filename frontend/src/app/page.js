"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../store/api/api";
import { addToCart } from "../store/slices/cartSlice";

export default function Home() {

const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);
const {
    data,
    error,
    isLoading,
} = useGetProductsQuery();
const products = data?.data ?? [];

if (isLoading) {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <p className="eyebrow">ShopIn.</p>
                    <h1>Loading products...</h1>
                    <div className="product-skeleton-grid">
                        {[1, 2, 3].map((item) => (
                            <div
                                className="skeleton-card"
                                key={item}
                            >
                                <div className="skeleton-image" />
                                <div className="skeleton-line skeleton-line-medium" />
                                <div className="skeleton-line skeleton-line-short" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}



if (error) {
    return (
        <main>
            <section className="section">
                <div className="container error-page">
                    <p className="eyebrow">ERROR</p>
                    <h1>Could not load products.</h1>
                    <p>
                        Something went wrong loading the products. Please try refreshing in a moment.
                    </p>
                </div>
            </section>
        </main>
    );
}


return (
    <>
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="logo">
                    ShopIn.
                </Link>
                <nav className="nav">
                    <Link href="/">Home</Link>
                    <Link href="/products">
                        Products
                    </Link>
                    <Link href="/cart">
                        Cart ({cartItems.length})
                    </Link>
                </nav>
            </div>
        </header>


        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <p className="eyebrow">
                            WELCOME TO ShopIn.
                        </p>
                        <h1>
                            Simple things.
                            <br />
                            Better picks.
                        </h1>
                        <p className="hero-description">
                            A simple place to discover useful things for everyday life.
                        </p>
                        <Link
                            href="#products"
                            className="button"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className="section"
                id="products"
            >
                <div className="container">
                    <div className="section-heading">
                        <p className="eyebrow">
                            COLLECTION
                        </p>
                        <h2>Featured Products</h2>
                        <p className="page-description">
                            Explore our collection of carefully selected products.
                        </p>
                    </div>

                    <div className="product-grid">
                        {products.map((product) => (
                            <Link
                                href={`/products/${product._id}`}
                                className="product-card"
                                key={product._id}
                            >
                                <article>
                                    <div className="product-image">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            width={600}
                                            height={600}
                                        />
                                    </div>

                                    <div className="product-content">
                                        <p className="product-category">
                                            {product.category}
                                        </p>
                                        <h2>
                                            {product.title}
                                        </h2>
                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                        <div className="product-footer">
                                            <strong>
                                                Rs. {product.price}
                                            </strong>
                                            <button
                                                type="button"
                                                className="button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                    dispatch(
                                                        addToCart(product)
                                                    );
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>


        <footer className="site-footer">
            <div className="container">
                Sprint 10 | Advanced Ecommerce | 2026.
            </div>
        </footer>
    </>
    );
}
