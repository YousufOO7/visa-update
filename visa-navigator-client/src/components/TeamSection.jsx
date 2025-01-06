

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Eleanor Pena",
      designation: "Case Manager",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_03.fa6f6f2107c8462e97d9.png",
    },
    {
      name: "Esther Howard",
      designation: "Legal Advisor",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_04.d73ed5148de4725e21e8.png",
    },
    {
      name: "Annette Black",
      designation: "Education Counsellor",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_06.91036b7c8d52fa8ec6f0.png",
    },
    {
      name: "Andrew Riis",
      designation: "Visa Specialist",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_01.2477364a62c3b6f5a0b5.png",
    },
    {
      name: "Kristin Watson",
      designation: "Visa Coordinator",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_02.106253bf64360fc88510.png",
    },
    {
      name: "Jerome Bell",
      designation: "General Manager",
      img: "https://evisa-react.xpressbuddy.com/static/media/img_05.8035fc2fb4695a1b6d95.png",
    },
  ];

  return (
    <section className="py- ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Our trusted immigration
          </h2>
          <p className="text-4xl md:text-5xl font-semibold text-blue-500 my-2">
            support team
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            At the heart of our commitment to providing exceptional immigration
            solutions stands
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
              </div>
              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
