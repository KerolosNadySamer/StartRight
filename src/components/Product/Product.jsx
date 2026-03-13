import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const navto = useNavigate();

  // تعديل: جعل الدالة تستقبل الـ id الحقيقي وتضعه في المسار
  const viewDetails = (id) => {
    navto(`/product/${id}`); 
  };

  const [productsList, setProductsList] = useState([]);

  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      setProductsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts('https://fakestoreapi.com/products');
  }, []);

  return (
    <div className='container py-4'>
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#f6f207', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Our Products
      </h2>
      
      <div className="row g-4"> 
        {productsList.map((item) => {
          return (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0" 
                   style={{ 
                     background: 'rgba(39, 35, 31, 0.8)', 
                     border: '1px solid rgba(246, 242, 7, 0.3)', 
                     borderRadius: '15px',
                     overflow: 'hidden'
                   }}>
                
                <div className="p-3 text-center" style={{ background: '#fff', borderBottom: '2px solid #f6f207' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ height: '160px', objectFit: 'contain' }} 
                    className="card-img-top"
                  />
                </div>
                
                <div className="card-body d-flex flex-column text-white">
                  <h6 className="card-title fw-bold text-truncate" style={{ color: '#f6f207' }} title={item.title}>
                    {item.title}
                  </h6>
                  
                  <p className="card-text small flex-grow-1" style={{ color: '#E5E4E2', fontSize: '0.85rem' }}>
                    {item.category}
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5" style={{ color: '#f6f207' }}>
                      ${item.price}
                    </span>
                    
                    {/* تعديل: تمرير item.id بدلاً من props.obj.id */}
                    <button 
                      onClick={() => { viewDetails(item.id) }} 
                      className="btn btn-sm px-3 fw-bold" 
                      style={{ 
                        backgroundColor: '#f6f207', 
                        color: '#27231f',
                        borderRadius: '8px',
                        transition: '0.3s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#fff'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#f6f207'}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;