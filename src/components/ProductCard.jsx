import { Link } from "react-router-dom";

// Komponen ProductCard menerima sebuah objek product sebagai props. Jika props product tidak diberikan, maka akan menggunakan nilai default.
const ProductCard = ({
    product = {
        title: 'Default Title', // Judul produk default
        thumbnail: 'https://images-cdn.ubuy.co.id/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg', // Gambar thumbnail produk default
        price: 300, // Harga produk default
        discountPercentage: 10, // Persentase diskon default
        rating: 4.2, // Rating produk default
    }
}) => {
    // Destrukturisasi objek product menjadi variabel yang lebih mudah digunakan.
    const {
        title,
        thumbnail,
        price,
        discountPercentage,
        rating,
    } = product;

    return (
        <div className="flex flex-col bg-white border border-orange-900/10 rounded-lg shadow-lg">
            {/* Menampilkan gambar thumbnail produk */}
            <img className="w-full h-48 object-cover rounded-t-lg" src={thumbnail} alt={title} />
            <div className="p-4 flex flex-col justify-between h-full">
                <div>
                    {/* Menampilkan judul produk */}
                    <h2 className="font-semibold mb-2 line-clamp-2">{title}</h2>

                    <div className="flex items-center mb-2">
                        {/* Menampilkan harga produk dengan 2 digit di belakang koma */}
                        <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
                        {/* Jika ada diskon, menampilkan persentase diskon */}
                        {discountPercentage > 0 && (
                            <span className="ml-2 text-sm text-red-500">-{discountPercentage.toFixed(2)}%</span>
                        )}
                    </div>

                    <div className="flex items-center mb-2">
                        {/* Menampilkan rating produk dalam bentuk bintang dan angka */}
                        <span className="text-yellow-500">
                            {'⭐'.repeat(Math.round(rating))}{' '}
                            ({rating.toFixed(1)})
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    {/* Link ke halaman detail produk menggunakan tombol */}
                    <a href={`/products/${product.id}`} >
                        <button className="w-full flex justify-center items-center rounded-lg py-2 px-5 bg-orange-900 text-white text-md transition-all hover:scale-105">
                            Check Detail
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
