import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <div className="container my-5">
        {/* About Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About PS Shop</h1>
          <p className="text-muted">
            Your one-stop destination for all your shopping needs.
          </p>
        </div>

        {/* Section 1: Mission Statement */}
<div className="row align-items-center mb-5">
  <div className="col-md-6 text-center text-md-start"> {/* Center on small screens */}
    <img
      src="https://i.pinimg.com/736x/62/d4/79/62d47950534f8f40eee92dde6f3dfb95.jpg"
      alt="Mission"
      className="img-fluid rounded"
    />
  </div>
  <div className="col-md-6">
    <h2 className="fw-bold">Our Mission</h2>
    <p>
      At PS Shop, our mission is to provide a seamless online shopping
      experience with a wide range of quality products at competitive
      prices. We aim to be the most customer-centric shopping platform
      in the industry.
    </p>
  </div>
</div>

{/* Section 2: Our Story */}
<div className="row align-items-center mb-5">
  <div className="col-md-6 order-md-2 text-center text-md-start"> {/* Center on small screens */}
    <img
      src="https://i.pinimg.com/736x/bc/38/0f/bc380ffc32b5c40ae8d5a7fa236ea083.jpg"
      alt="Story"
      className="img-fluid rounded"
    />
  </div>
  <div className="col-md-6 order-md-1">
    <h2 className="fw-bold">Our Story</h2>
    <p>
      PS Shop started as a small venture in 2010 and has grown into a
      trusted online shopping destination. Over the years, we've built
      a reputation for delivering exceptional products and services,
      earning the trust of millions of customers worldwide.
    </p>
  </div>
</div>


        {/* Section 3: Meet the Team */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet the Team</h2>
          <p className="text-muted">
            A passionate group of individuals dedicated to your satisfaction.
          </p>
        </div>
        <div className="row text-center">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-4">
            <img
              src="https://i.pinimg.com/736x/04/3e/44/043e44f0da2f7bf0b182d68a5779806e.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 h-75"
            />
            <h5 className="fw-bold">John Doe</h5>
            <p className="text-muted">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="col-md-4 mb-4">
            <img
              src="https://i.pinimg.com/736x/8d/27/27/8d27272e95d2d24cefa89d4c2c902b3e.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 h-75"
            />
            <h5 className="fw-bold">Jane Smith</h5>
            <p className="text-muted">Chief Marketing Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="col-md-4 mb-4">
            <img
              src="https://i.pinimg.com/736x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 h-75"
            />
            <h5 className="fw-bold">Mike Johnson</h5>
            <p className="text-muted">Head of Operations</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <h3 className="fw-bold">Join Our Journey</h3>
          <p>
            Become part of the PS Shop family and enjoy an unparalleled shopping
            experience.
          </p>
          <div className="d-flex justify-content-center">
          <Link to='/shop' className="nav-link bg-primary w-25 p-1 rounded-pill">
            Shop Now
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;

