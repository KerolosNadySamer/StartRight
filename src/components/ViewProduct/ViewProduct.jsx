import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewProduct = () => {
    const navto = useNavigate();
    const { pId } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${pId}`);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (pId) getProduct();
    }, [pId]);

    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#4a0404', color: '#f6f207' }}>
                <div className="spinner-border" role="status"></div>
                <span className="ms-2">Loading...</span>
            </div>
        );
    }

    return (
        /* الحاوية الرئيسية تأخذ كامل الطول والعرض مع اللون النبيتي */
        <div className="container-fluid" style={{ 
            backgroundColor: '#4a0404', // درجة اللون النبيتي (الغامق)
            minHeight: '100vh', 
            padding: '40px 20px' 
        }}>
            
            <div className="container">
                <div className="row align-items-center shadow-lg" style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // تعتيم خفيف فوق النبيتي للكارت
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(246, 242, 7, 0.2)' // إطار ذهبي شفاف جداً
                }}>
                    
                    {/* عمود الصورة بخلفية فاتحة لإبرازها */}
                    <div className="col-md-6 p-5 text-center" style={{ backgroundColor: '#fff' }}>
                        <img 
                            src={product.image} 
                            className="img-fluid" 
                            alt={product.title} 
                            style={{ maxHeight: '450px', objectFit: 'contain' }} 
                        />
                    </div>

                    {/* عمود تفاصيل المنتج */}
                    <div className="col-md-6 p-5 text-white">
                        <span className="badge mb-3" style={{ backgroundColor: '#f6f207', color: '#4a0404' }}>
                            {product.category}
                        </span>
                        
                        <h1 className="display-5 fw-bold mb-3" style={{ color: '#f6f207' }}>
                            {product.title}
                        </h1>
                        
                        <h2 className="mb-4 fw-light">${product.price}</h2>
                        
                        <p className="lead mb-5" style={{ color: '#e0e0e0', lineHeight: '1.8' }}>
                            {product.description}
                        </p>
                        
                        <div className="d-flex gap-3">
                            <button 
                                onClick={() => navto(-1)} 
                                className="btn btn-lg px-5 fw-bold" 
                                style={{ 
                                    backgroundColor: '#f6f207', 
                                    color: '#4a0404',
                                    borderRadius: '30px'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#fff'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#f6f207'}
                            >
                                Back
                            </button>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;