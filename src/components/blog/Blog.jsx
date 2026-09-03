import React from 'react';
import './blog.css';
import Image1 from "../../assets/love.svg";
import Image2 from "../../assets/celeb.svg";
import Image3 from "../../assets/coins.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Blogs</h2>
    
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://medium.com/@its-apk/not-every-story-has-a-happy-ending-5bd0f575b5bd' target='_blank' rel='noreferrer'><img src={Image1} alt="" className="blog__img"/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Not every story has a Happy Ending!</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://medium.com/@its-apk/a-nutshell-on-how-to-enjoy-your-life-and-job-4fcd9786980d' target='_blank' rel='noreferrer'><img src={Image2} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">A Nutshell on “How to Enjoy your Life and Job</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://medium.com/@its-apk/cashflow-quadrant-guide-to-financial-freedom-4b528e9df599' target='_blank' rel='noreferrer'><img src={Image3} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Cashflow Quadrant — Guide to Financial Freedom</h3>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Blog