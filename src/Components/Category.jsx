import '../styles/Category.css';
import { FaPhone, FaLaptop, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { BsCamera } from 'react-icons/bs';
import CategoryCard from './CategoryCard';

const Category = ()=> {
    const categories = [
      { Icon: FaPhone, title: 'Phone' },
      { Icon: BsCamera, title: 'Camera' },
      { Icon: FaLaptop, title: 'Laptop', extraClass: 'laptop' },
      { Icon: FaHeadphones, title: 'Headphones' },
      { Icon: FaGamepad, title: 'Gaming' },
      { Icon: BsCamera, title: 'Camera' },
    ];

    return (
      <>
        <div className="category">
          <div className='today'>
            <h3>Category</h3>
          </div>

          <div className="Flash">
            <div>
              <h2>Browse By Category</h2>
            </div>

          </div>
        </div>

        <div className='category-card'>
          {categories.map((c, i) => (
            <CategoryCard key={i} {...c} />
          ))}
        </div>
      </>
    );
  }

export default Category;
