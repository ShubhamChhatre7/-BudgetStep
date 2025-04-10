import React from 'react';
import { blogPosts } from '../data/blogs';

const BlogPosts: React.FC = () => {
  return (
    <section className="blog-posts section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-preview">{post.preview}</p>
                <a href="#" className="blog-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
