import React from 'react';


const VisionAbout = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0yPknIePjvyoUH3L0q6lVgDNABCCGz9Vsg&s" // Replace with actual image URL
          alt="College"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Pdea's College Of Engineering Pune</h1>

        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            To provide a nurturing environment for individual development, enabling effective contributions to society in a dynamic setting through academic excellence and professional competence.
          </p>
          <br/>
          <br/>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            To offer state-of-the-art educational facilities that prepare students for careers in engineering and technology. To organize quality improvement programs focused on advancements in current technology for the benefit of our core community stakeholders. To provide leadership in curriculum design and development, thereby strengthening the relationship between industry and academia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VisionAbout;
