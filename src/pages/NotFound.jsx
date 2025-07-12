
//for the invalid routing
const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700">Oops! Page not found.</p>
      <a href="/" className="text-blue-500 underline mt-4 inline-block">Go back to Home</a>
    </div>
  );
};

export default NotFound;
