/* eslint-disable react-hooks/exhaustive-deps */


// Assuming your accreditation images are in an array called 'accreditationImages'
const accreditationImages = [
  require("../../assets/images/Accreditations/accreditation-1.png"),
  require("../../assets/images/Accreditations/accreditation-2.png"),
  require("../../assets/images/Accreditations/accreditation-3.png"),
  require("../../assets/images/Accreditations/accreditation-4.png"),
  require("../../assets/images/Accreditations/accreditation-5.png"),
  require("../../assets/images/Accreditations/accreditation-6.png"),
];

const Accreditations = () => {

  return (
    <div className="my-10">
    <h2 className="text-3xl font-bold text-center mb-8">Accreditation & Approvals</h2>
    <div className="accreditation-carousel flex relative overflow-hidden group" style={{maxHeight:200}}>
      <div className="carousel-inner flex space-x-16 animate-loop-scroll group-hover:paused">
        {accreditationImages.map((image, index) => (
          <img
            key={image}
            src={image} // Replace with your image source
            alt={`Accreditation ${index + 1}`}
            loading='lazy'
            className={`max-w-none object-contain translate-x-${index * 100}%`}
          />
        ))}
      </div>
      <div className="carousel-inner flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
        {accreditationImages.map((image, index) => (
          <img
            key={image}
            src={image} // Replace with your image source
            alt={`Accreditation ${index + 1}`}
            loading='lazy'
            className={`max-w-none translate-x-${index * 100}%`}
          />
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Accreditations;
