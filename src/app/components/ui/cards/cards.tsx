"use client"
import Image from "next/image";
import { CgEnter } from "react-icons/cg";
//TODO: These products should be fetched from a db
//TODO: URLs need more structure
const products = [
    {id: '123', name: 'Some product 1', price: '2000', ratings: 4, url: '/prod1.jpg'},
    {id: '456', name: 'Some product 2', price: '1000', ratings: 3, url: '/prod2.jpg'},
    {id: '789', name: 'Some product 3', price: '500', ratings: 5, url: '/prod3.jpg'}
];

const Cards = () => {
    return (
        <div className="content flex flex-wrap w-full justify-center">
            {products.map((product, index) => (
                <div className="cardContent w-60 h-60 min-w-40 min-h-40 mx-6 my-2 border-2 border-gray-400 rounded-lg transform shadow-xl transition-transform duration-300 hover:scale-105" key={index+1}>
                    <div className="cardHead w-full h-2/4 border-b-2 border-gray-300">
                        <Image src={product.url} layout="responsive" alt={"Image"}  width={100} height={100} style={{objectFit:"cover", maxHeight:'100%'}} />
                    </div>
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