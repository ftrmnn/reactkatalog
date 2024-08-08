export default function Home () {
  return (
    <header>
          <div className='mt-24 flex flex-col md:flex-row gap-16 items-center h-screen min-h-[900px] md:min-h-screen md:justify-between'>
            <div className='md:-mt-24 md:w-3/5'>
              <h1 className='text-slate-800 text-3xl font-extrabold lg:text-5xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, tempore?</h1>
              <p className='mt-3 mb-5 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex accusamus cupiditate rerum corporis expedita optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempora.</p>
              <button className='py-3 px-6 rounded-lg bg-orange-900 text-white  font-semibold text-xl transition-all hover:scale-105'>NEXT</button>
            </div>
            <div className='md:w-2/5'>
              <img src="/woman.png" alt="Woman LL" className='ml-auto w-64 md:w-9/12 object-cover object-top'/>
            </div>
          </div>
        </header>
  );
}