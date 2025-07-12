
const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Empowering Learning, Anytime Anywhere</h1>
        <p className="text-lg text-gray-600">
          Our portal simplifies education through technology — connecting students, teachers, and institutions.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to create a seamless, accessible, and engaging learning experience for everyone.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700">
          EduPortal was founded in 2025 by a group of educators and developers passionate about using technology to enhance education.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li> <strong>Teacher Dashboard</strong> – Manage courses, materials, and assignments easily.</li>
          <li> <strong>Student Portal</strong> – Access lessons, submit work, and track progress.</li>
          <li> <strong>Course Management</strong> – Create, organize, and schedule courses.</li>
          <li><strong>Online Assessments</strong> – Conduct quizzes and exams digitally.</li>
          <li><strong>Progress Tracking</strong> – Visualize student performance with analytics.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-gray-700">
          We provide a flexible and user-friendly experience with:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
          <li>Secure login for all users</li>
          <li>Interactive content (videos, PDFs, quizzes)</li>
          <li>Responsive design for all devices</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To bridge the gap between educators and learners through innovative digital tools.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What People Say</h2>
        <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
          “EduPortal changed the way I learn. Everything is in one place.” – A Student
        </blockquote>
        <blockquote className="italic text-gray-700 border-l-4 border-green-500 pl-4">
          “I can manage all my classes without paperwork!” – A Teacher
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <p className="text-lg mb-4">Ready to get started?</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Explore Courses</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
