
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Online Education</h1>
        <p className="text-lg mb-6">Learn, teach, and grow — all in one powerful platform for students and educators.</p>
        <div className="space-x-4">
          {/* <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100">Get Started</button> */}

<Link to="/about">
  <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100">
    Get Started
  </button>
</Link>


<Link to="/about">
<button className="border border-white px-6 py-2 rounded
           hover:bg-white hover:text-blue-600">Explore Courses</button>

</Link>

          
        </div>
      </section>


      {/* How It Works */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">How EduPortal Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {[
            ["Sign Up", "Create a student or teacher account in minutes."],
            ["Join or Create Courses", "Start learning or teaching right away."],
            ["Track Progress", "View analytics and feedback in real-time."],
            ["Grow & Achieve", "Build skills and reach your goals."],
          ].map(([title, desc], index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <blockquote className="italic border-l-4 border-blue-500 pl-4 text-gray-700">
            “This platform helped me manage all my classes in one place!” – A Teacher
          </blockquote>
          <blockquote className="italic border-l-4 border-green-500 pl-4 text-gray-700">
            “EduPortal makes learning feel simple and fun.” – A Student
          </blockquote>
          <blockquote className="italic border-l-4 border-purple-500 pl-4 text-gray-700">
            “As a school admin, I love how easy it is to manage everything.” – Institution Coordinator
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Built for Modern Education</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          EduPortal was developed to meet the growing demand for flexible, accessible, and effective online learning tools.
          Whether you're a school, a coaching center, or a solo educator — we've got you covered.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to join the future of learning?</h2>
        <div className="space-x-4">
         
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600">Schedule a Demo</button>
        </div>
      </section>

     
    </div>
  );
};

export default Landing;
 <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">Sign Up Now</button>