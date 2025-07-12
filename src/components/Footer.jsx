const Footer=()=>{
    return(
        <>
         {/* Footer section*/}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center text-sm">
        <div className="mb-4">
          support@eduportal.com | New Delhi, India
        </div>
        <div className="space-x-4 mb-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/courses" className="hover:underline">Courses</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-2">© {new Date().getFullYear()} EduPortal. All rights reserved.</div>
      </footer>
        
        </>
    )
}
export default Footer