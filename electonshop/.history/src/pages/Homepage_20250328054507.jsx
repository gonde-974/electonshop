import React from "react";

function CardProductComponent({ product }) {
    return (
        <div className="relative">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-lg"
            />
            {/* Overlay ефект */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
                {product.name}
            </div>
            <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
            </div>
        </div>
    );
}

export default CardProductComponent;
