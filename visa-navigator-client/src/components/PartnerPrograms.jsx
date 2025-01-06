

const PartnerPrograms = () => {
  const partners = [
    {
      id: 1,
      logo: "https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/1280px-Qatar_Airways_logo.svg.png",
    },
    {
      id: 3,
      logo: "https://logos-world.net/wp-content/uploads/2020/08/Adobe-Logo-2023.png",
    },
    {
      id: 4,
      logo: "https://logos-world.net/wp-content/uploads/2024/10/Figma-Logo-New.png",
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbTS0Ke1BYPm9zPFhzQ6fCAb3DjkDMqZ3uw&s",
    },
    {
      id: 6,
      logo: "https://www.gramansgroup.com/wp-content/uploads/2022/04/Saudi-Arabian-Airlines-Logo.png",
    },
    {
      id: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pakistan_International_Airlines_Logo.svg/1200px-Pakistan_International_Airlines_Logo.svg.png",
    },
  ];

  return (
    <div className="py-10   overflow-hidden">
      
      <div className="relative">
        <div className="flex items-center space-x-10 animate-horizontal-scroll">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white  rounded-lg shadow-md"
            >
              <img
                src={partner.logo}
                alt={`Partner ${partner.id}`}
                className="object-contain h-16"
              />
            </div>
          ))}
          {/* Duplicate items for seamless animation */}
          {partners.map((partner) => (
            <div
              key={`${partner.id}-duplicate`}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white  rounded-lg shadow-md"
            >
              <img
                src={partner.logo}
                alt={`Partner ${partner.id}`}
                className="object-contain h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerPrograms;
