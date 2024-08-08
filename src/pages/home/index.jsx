import Hero from '../home/components/Hero';
import ProductCard from '../../components/ProductCard';
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from 'react';


export default function Home () {


  return (
    <>
      <Hero />
      <main>
          <h2 className='mb-20 text-4xl font-bold text-slate-700 text-center'>asjdghawkgdbsndagwdaw</h2>

          <div className='mb-20'>
            <form className='flex justify-center gap-x-5'>
              <input type="text" placeholder="Search Product" className='w-full md:2/5 border-2 border-orange-900/40 focus:border-orange-900 focus:ring-orange-900 outline-none p-2 rounded-lg'/>
              <button className='flex items-center gap-x-2 py-3 px-6 rounded-lg bg-orange-900 text-white  font-semibold text-xl transition-all hover:scale-105'>
              <IoIosSearch />
                Goleki
              </button>
            </form>       
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
        
        </main >
    </>
    
    
  );
}