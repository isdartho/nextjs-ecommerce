"use client"

const products = [
    {id: '123', name: 'Some product 1', price: '2000', ratings: 4},
    {id: '456', name: 'Some product 2', price: '1000', ratings: 3},
    {id: '789', name: 'Some product 3', price: '500', ratings: 5}
];

const Cards = () => {
    return (
        <div className="content flex flex-wrap w-full justify-center">
            {products.map((product, index) => (
                <div className="cardContent w-60 h-60 min-w-40 min-h-40 mx-6 border-2 border-gray-400 rounded-lg transform shadow-xl transition-transform duration-300 hover:scale-105" key={index+1}>
                    <div className="cardHead w-full h-2/4 border-b-2 border-gray-300">WA</div>
                    <div className="px-2 py-1 w-full">{product.name}</div>
                    <div className="px-2 py-1 w-full">{product.price} ₹</div> {/*TODO: this '₹' should be coming from currency settings */}
                    <div className="px-2 py-1 w-full">
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;