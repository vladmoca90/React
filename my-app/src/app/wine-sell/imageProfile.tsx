import wines from './data';
import Image from 'next/image';

export default function ProfileImg() {
    return (
        <Image src={wines.img} alt="img" className="product-img"/>
    );
}