import wines from './data';
import Image from 'next/image'
   
const profileImg = () => {
    return (
        <Image src={wines.imgName} alt="img" className="product-img" />
    );
  }

  export default profileImg;