import styles from "./BlogDetail.module.css"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideBox from '../../components/SideBox/SideBox';
import './BlogDetail.css'
import Skeleton from "../../components/Skeleton/Skeleton";

interface IState {
  blogType: {
    title: string;
    subTitle:string;
    category: string;
    ctxEn: string;
    ctxCh: string;
    _id: string;
    username: string;
    updatedAt: string;
  };
  loading: boolean;
}
const initialBlog = {
    title: "",
    subTitle:"",
    category: "",
    ctxEn: "",
    ctxCh: "",
    _id: "",
    username: "",
    updatedAt: "",
  }

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<IState['blogType']>(initialBlog);
  const [loading, setLoading] = useState<IState['loading']>(true);
  const handleCate = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cateId: string
  ) => {
    console.log(cateId);
    navigate(`/blog?cat=${cateId}`);
  };

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/blogs/${id}`);
      if (res.status === 200) {
        setBlog(res.data);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div className={styles.blogWrapper}>
            {loading && <Skeleton type="blogDetail" count={1} />}
            {!loading && (
              <div className={styles.blogBox}>
                <h1 className={styles.blogTitle}>
                  <span>{blog.title}</span>
                </h1>
                {blog.subTitle && (
                  <h2 className={styles.blogSubTitle}>{blog.subTitle}</h2>
                )}
                <span className={styles.date}>
                  {`Published ${new Date(blog.updatedAt).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}`}
                </span>
                <div dangerouslySetInnerHTML={{ __html: blog.ctxEn }}></div>
              </div>
            )}
          </div>
          <SideBox onSBCate={handleCate} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail