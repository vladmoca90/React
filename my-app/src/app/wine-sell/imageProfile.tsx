import wines from './data';
import Image from 'next/image';

export default function profileImg() {
    return <Image src={wines.imgName} alt="img" className="product-img"/>;
}