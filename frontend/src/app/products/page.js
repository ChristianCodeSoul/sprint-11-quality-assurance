"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "@/store/api/api";

export default function ProductsPage() {

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
                        <p className="eyebrow">COLLECTION</p>
                        <h1>Loading products...</h1>
                        <div className="product-skeleton-grid">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
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
                            Make sure the Sprint 10 backend is running.
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
                        <Link href="/products">Products</Link>
                        <Link href="/cart">
                            Cart ({cartItems.length})
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                <section className="section">
                    <div className="container">
                        <div className="section-heading">
                            <p className="eyebrow">OUR COLLECTION</p>
                            <h1>All Products</h1>
                            <p className="page-description">
                                Take a look at what we have.
                            </p>
                        </div>

                        <div className="product-grid">
                            {products.map((product) => (
                                <Link
                                    href={`/products/${product._id}`}
                                    className="product-card"
                                    key={product._id}
                                >
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
                                        <h2>{product.title}</h2>
                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                        <div className="product-footer">
                                            <strong>
                                                Rs. {product.price}
                                            </strong>
                                            <span className="button">
                                                View Product
                                            </span>
                                        </div>
                                    </div>
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