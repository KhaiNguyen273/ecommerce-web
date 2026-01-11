import DisplayProduct from '../components/DisplayProduct';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="pt-[650px] flex justify-center flex-col m-[50px]">
            <DisplayProduct
                icon={faProductHunt}
                title={'sản phẩm mới'}
                link={'product/sanphambanchay'}
            ></DisplayProduct>
            <DisplayProduct icon={faBolt} title={'sản phẩm bán chạy'} link={'product/sanphammoi'}></DisplayProduct>
        </div>
    );
}

export default Home;
