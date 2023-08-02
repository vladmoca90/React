import wines from './data';
import Image from 'next/image';

const wineImg = wines.map((wine) => { 
    return <Image key={wine.id} src={wine.img} alt="img" className="product-img" />;
}); 

export default function ProfileImg() {
    return wineImg;
}