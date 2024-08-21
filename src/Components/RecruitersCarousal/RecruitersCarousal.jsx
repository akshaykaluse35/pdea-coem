/* eslint-disable react-hooks/exhaustive-deps */

// Assuming your recruiter images are in an array
const recruiterImages = [
  require("../../assets/images/Recruiters/Recruiter-1.jpg"),
  require("../../assets/images/Recruiters/Recruiter-2.jpg"),
  require("../../assets/images/Recruiters/Recruiter-3.jpg"),
  require("../../assets/images/Recruiters/Recruiter-4.jpg"),
  require("../../assets/images/Recruiters/Recruiter-5.jpg"),
  require("../../assets/images/Recruiters/Recruiter-6.jpg"),
  require("../../assets/images/Recruiters/Recruiter-7.jpg"),
  require("../../assets/images/Recruiters/Recruiter-8.jpg"),
  require("../../assets/images/Recruiters/Recruiter-9.jpg"),
  require("../../assets/images/Recruiters/Recruiter-10.jpg"),
  require("../../assets/images/Recruiters/Recruiter-11.jpg"),
  require("../../assets/images/Recruiters/Recruiter-12.jpg"),
  require("../../assets/images/Recruiters/Recruiter-13.jpg"),
  
];

const RecruitersCarousal = () => {

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Recruiters</h2>
      <div className="recruiters-carousel flex relative overflow-hidden group">
        <div className="carousel-inner flex space-x-16 animate-loop-scroll group-hover:paused">
          {recruiterImages.map((image, index) => (
            <img
              key={image}
              src={image} 
              alt={`Recruiter ${index + 1}`}
              loading="lazy"
              className={`max-w-none translate-x-${index * 100}%`}
            />
          ))}
        </div>
        <div className=" ml-16 carousel-inner flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
          {recruiterImages.map((image, index) => (
            <img
              key={image}
              src={image} // Replace with your image source
              alt={`Recruiter ${index + 1}`}
              loading="lazy"
              className={`max-w-none translate-x-${index * 100}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitersCarousal;
