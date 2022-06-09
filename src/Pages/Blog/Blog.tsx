import styles from './Blog.module.css'
import Categories from '../../components/Categories/Categories';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideBox from '../../components/SideBox/SideBox';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';
import Skeleton from '../../components/Skeleton/Skeleton';
interface IState {
  blogType: {
    title: string;
    category: string;
    ctxEn : string;
    ctxCh : string;
    _id: string;
    username: string;
    updatedAt: string;
  };
  loading:boolean;
}
const Blog = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<IState['blogType'][]>([]);
  const [loading, setLoading] = useState<IState['loading']>(true)
  const { width } = useWindowDimensions();
  
  const handleCate = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,cateId:string
  ) => {
    if (cateId !== 'All') {
      navigate(`/blog?cat=${cateId}`);
    } else {
      navigate(`/blog`);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/blogs${search}`
      );
      if (res.status === 200) {
        setBlogs(res.data);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div className={styles.blogWrapper}>
            {width < 765 && <SideBox onSBCate={handleCate} />}
            {loading && <Skeleton type="blog" count={5} />}
            {blogs &&
              blogs.map(blog => (
                <div className={styles.blogBox} key={blog._id}>
                  <Link to={`/blog/${blog._id}`} className="link">
                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                  </Link>
                  <div className={styles.infoBox}>
                    <span className={styles.date}>
                      {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Categories cate={blog.category} onCate={handleCate}>
                      {blog.category}
                    </Categories>
                  </div>
                </div>
              ))}
          </div>
          {width > 765 && <SideBox onSBCate={handleCate} />}
        </div>
      </div>
    </div>
  );
}

export default Blog