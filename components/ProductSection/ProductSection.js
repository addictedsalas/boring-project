import React, { useEffect, useState } from 'react';
import ProdactShape from '/public/images/product/shape-1.png'
import Link from 'next/link';
import Image from 'next/image';

const ProductSection = ({ products, addToCartProduct }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeTab, setActiveTab] = useState('Tab2');
    const openTab = (TabName) => {
        setActiveTab(TabName);
    }
    useEffect(() => {
        openTab('Tab2');
    }, []);

    return (
        <section className="product-section section-padding pt-0">
            <div className="shape-image">
                <Image src={ProdactShape} alt="img" width={500} height={500} />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6>Our Products</h6>
                    <h2>Custom Apparel Collection</h2>
                </div>
                <div className="product-header mt-4 mt-md-0">
                    <ul className="nav">
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab1' ? 'active' : ''}`} onClick={() => openTab('Tab1')}>
                                T-Shirts
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab2' ? 'active' : ''}`} onClick={() => openTab('Tab2')}>
                                Polos
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab3' ? 'active' : ''}`} onClick={() => openTab('Tab3')}>
                                Hats
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab4' ? 'active' : ''}`} onClick={() => openTab('Tab4')}>
                                Custom Orders
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'Tab1' ? 'show active' : ''}`}>
                        <div className="row g-4">
                            {products.length > 0 && products.slice(0, 4).map((product, pitem) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={pitem}>
                                    <div className="product-items">
                                        <div className="product-img">
                                            <Image 
                                                src={product.proImg} 
                                                alt={product.title} 
                                                width={300} 
                                                height={400}
                                                layout="responsive"
                                            />
                                            <div className="shop-btn">
                                                <Link onClick={ClickHandler} href={`/shop-details/${product.slug}`} className="theme-btn">
                                                    View Details <i className="fas fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">
                                                <h4><Link onClick={ClickHandler} href={`/shop-details/${product.slug}`}>{product.title}</Link></h4>
                                            </div>
                                            <div className="price">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'Tab2' ? 'show active' : ''}`}>
                        <div className="row g-4">
                            {products.length > 0 && products.slice(4, 8).map((product, pitem) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={pitem}>
                                    <div className="product-items">
                                        <div className="product-img">
                                            <Image 
                                                src={product.proImg} 
                                                alt={product.title} 
                                                width={300} 
                                                height={400}
                                                layout="responsive"
                                            />
                                            <div className="shop-btn">
                                                <Link onClick={ClickHandler} href={`/shop-details/${product.slug}`} className="theme-btn">
                                                    View Details <i className="fas fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">
                                                <h4><Link onClick={ClickHandler} href={`/shop-details/${product.slug}`}>{product.title}</Link></h4>
                                            </div>
                                            <div className="price">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'Tab3' ? 'show active' : ''}`}>
                        <div className="row g-4">
                            {products.length > 0 && products.slice(8, 12).map((product, pitem) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={pitem}>
                                    <div className="product-items">
                                        <div className="product-img">
                                            <Image 
                                                src={product.proImg} 
                                                alt={product.title} 
                                                width={300} 
                                                height={400}
                                                layout="responsive"
                                            />
                                            <div className="shop-btn">
                                                <Link onClick={ClickHandler} href={`/shop-details/${product.slug}`} className="theme-btn">
                                                    View Details <i className="fas fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">
                                                <h4><Link onClick={ClickHandler} href={`/shop-details/${product.slug}`}>{product.title}</Link></h4>
                                            </div>
                                            <div className="price">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'Tab4' ? 'show active' : ''}`}>
                        <div className="row g-4">
                            {products.length > 0 && products.slice(12, 16).map((product, pitem) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={pitem}>
                                    <div className="product-items">
                                        <div className="product-img">
                                            <Image 
                                                src={product.proImg} 
                                                alt={product.title} 
                                                width={300} 
                                                height={400}
                                                layout="responsive"
                                            />
                                            <div className="shop-btn">
                                                <Link onClick={ClickHandler} href={`/shop-details/${product.slug}`} className="theme-btn">
                                                    View Details <i className="fas fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">
                                                <h4><Link onClick={ClickHandler} href={`/shop-details/${product.slug}`}>{product.title}</Link></h4>
                                            </div>
                                            <div className="price">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;