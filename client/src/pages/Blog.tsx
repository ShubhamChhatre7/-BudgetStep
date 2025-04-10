import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogs';

const Blog: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="blog-hero">
          <div className="container">
            <h1>Our Blog</h1>
            <p>Latest news, tips, and insights about shoes and footwear trends</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-layout">
              <div className="blog-main">
                {blogPosts.map((post) => (
                  <article className="blog-article" key={post.id}>
                    <div className="blog-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-content">
                      <h2 className="blog-title">{post.title}</h2>
                      <div className="blog-meta">
                        <span><i className="far fa-calendar"></i> April {post.id + 1}, 2025</span>
                        <span><i className="far fa-user"></i> Admin</span>
                      </div>
                      <p className="blog-excerpt">{post.preview}</p>
                      <p className="blog-excerpt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, 
                        pretium arcu a, pretium arcu. Phasellus ac nisi eu ex commodo eleifend eget non nulla.
                      </p>
                      <a href="#" className="btn btn-outline">Read More</a>
                    </div>
                  </article>
                ))}
              </div>
              
              <aside className="blog-sidebar">
                <div className="sidebar-widget">
                  <h3>Categories</h3>
                  <ul className="category-list">
                    <li><a href="#">Running Shoes <span>(5)</span></a></li>
                    <li><a href="#">Lifestyle <span>(3)</span></a></li>
                    <li><a href="#">Shoe Care <span>(2)</span></a></li>
                    <li><a href="#">New Releases <span>(7)</span></a></li>
                    <li><a href="#">Training Tips <span>(4)</span></a></li>
                  </ul>
                </div>
                
                <div className="sidebar-widget">
                  <h3>Recent Posts</h3>
                  <ul className="recent-posts">
                    {blogPosts.slice(0, 3).map(post => (
                      <li key={post.id}>
                        <a href="#">
                          <img src={post.image} alt={post.title} className="thumb" />
                          <span>{post.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="sidebar-widget">
                  <h3>Tags</h3>
                  <div className="tag-cloud">
                    <a href="#" className="tag">Sneakers</a>
                    <a href="#" className="tag">Running</a>
                    <a href="#" className="tag">Lifestyle</a>
                    <a href="#" className="tag">Training</a>
                    <a href="#" className="tag">Fashion</a>
                    <a href="#" className="tag">Athletic</a>
                    <a href="#" className="tag">Comfort</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;