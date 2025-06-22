import React from 'react'

const Profile = () => {
  return (
    <>
    <div>
        <div className="h-screen bg-[#9E998D] font-neue  text-[#0B1014] flex flex-col justify-between p-6 md:p-8">
      {/* Top Main Heading */}
      <div className="py-20">
        <div>
          <h1 className="text-[3.5rem] md:text-[6.4rem] tracking-tight leading-tight  leading-none font-neue">
            A closer look at
            <br />
           my profile
          </h1>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm md:text-base text-[#0B1014] mb-6">
        <div className="col-span-2 md:col-span-1">
          <p className="text-[2.2rem]">Folio:05</p>
        </div>
        <div>
          <p className="text-[#0B1014] font-medium">Availability:</p>
          <p>March 2025</p>
        </div>
        <div>
          <p className="text-[#0B1014] font-medium">Contact:</p>
          <p>hello@yourmail.com</p>
        </div>
        <div>
          <p className="text-[#0B1014] font-medium">Current location:</p>
          <p>43.6045° N, 1.4442° E</p>
        </div>
        <div>
          <p className="text-[#0B1014] font-medium">Copyright:</p>
          <p>©2025 Your Name</p>
        </div>
      </div>
      </div>
    </div>
<section className="bg-[#0B1014] text-[#9E998D] py-24 px-6 md:px-20 font-neue">
  <div className="max-w-8xl mx-auto flex justify-end">
    <div className="w-full md:w-[65%] text-left">
      <p className="text-[22px] md:text-[28px] leading-relaxed tracking-tight font-medium">
        With solid experience in modern web development, I build reliable, scalable, and responsive interfaces using React.js and Tailwind CSS. I ensure clean structure, maintainability, and optimized performance in every project.
        My core skills include working with JavaScript (ES6+), Git & GitHub, Firebase, Node.js, and MongoDB. I follow industry-standard practices and pay close attention to both functionality and design precision.
      </p>

      <p className="mt-12 text-base md:text-[13px] text-[#9E998D] font-light leading-relaxed">
        I work independently with a focus on performance, user accessibility, and code clarity. I'm open to client collaborations that require clean frontend development and structured backend support, ensuring that business goals are efficiently translated into digital solutions.
      </p>
    </div>
  </div>
</section>

<section className="bg-[#9E998D]  text-[#0B1014] py-14 px-6 md:px-8 font-neue">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[54px] font-medium leading-tight mb-12">
          Core capabilities and<br /> services
        </h2>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
          <div className="flex items-start space-x-4">
            <span className="text-xl font-medium">01</span>
            <div>
              <h3 className="font-medium text-lg mb-1">Frontend Development</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Build modern and performant UIs using React.js, Tailwind CSS, and JavaScript. Focus on responsive layouts and clean architecture for real-world projects.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl font-medium">02</span>
            <div>
              <h3 className="font-medium text-lg mb-1">Backend Development</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Setup scalable and secure APIs using Node.js, Express, and MongoDB. Implement authentication, authorization, and clean data structures.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl font-medium">03</span>
            <div>
              <h3 className="font-medium text-lg mb-1">Webflow & CMS Integration</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Create high-performing static or CMS-driven websites using Webflow, with responsive design and custom interactions. Handle SEO, CMS filtering, and structure.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl font-medium">04</span>
            <div>
              <h3 className="font-medium text-lg mb-1">Performance & SEO Optimization</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Improve website speed, implement lazy loading, image optimization (WebP), semantic HTML, and structured data for better Google ranking.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between mt-12 text-[28px] md:text-[54px] font-medium tracking-tight">
          <a
            href="https://www.linkedin.com/in/taha-nawaz-82a64a301/"
            target="https://www.linkedin.com/in/taha-nawaz-82a64a301/"
            rel="https://www.linkedin.com/in/taha-nawaz-82a64a301/"
            className="hover:text-[#3E4945] duration-300 flex items-center space-x-2"
          >
            <span>LinkedIn</span>
            <span><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3098_119)"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.7689 4.98778V25.8053H29.5446L29.6437 1.5182V0.130373L28.2559 0.130374L3.86968 0.130371V2.90603L24.7863 3.00516L0.895752 26.8957L2.87837 28.8783L26.7689 4.98778Z" fill="currentColor"></path></g><defs><clipPath id="clip0_3098_119"><rect width="30" height="29" fill="white"></rect></clipPath></defs></svg></span>
          </a>

          <a
            href="https://github.com/Tahadev40"
            target="https://github.com/Tahadev40"
            rel="noopener noreferrer"
            className="hover:text-[#3E4945] duration-300 flex items-center space-x-2"
          >
            <span>GitHub</span>
            <span><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3098_119)"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.7689 4.98778V25.8053H29.5446L29.6437 1.5182V0.130373L28.2559 0.130374L3.86968 0.130371V2.90603L24.7863 3.00516L0.895752 26.8957L2.87837 28.8783L26.7689 4.98778Z" fill="currentColor"></path></g><defs><clipPath id="clip0_3098_119"><rect width="30" height="29" fill="white"></rect></clipPath></defs></svg></span>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile