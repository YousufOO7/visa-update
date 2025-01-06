import { Fade } from "react-awesome-reveal";

const CountriesSection = () => {
  const countries = [
    {
      name: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png",
    },
    {
      name: "Germany",
      flag: "https://media.istockphoto.com/id/1205501136/vector/vector-german-flag-design.jpg?s=612x612&w=0&k=20&c=TJYJav7byxNo4P2daSstlC6CmK5fp_z-ER90S9zaV2s=",
    },
    {
      name: "Brazil",
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzjOkVuS95T-7eO2L-1Uqv0_Dra0L_rTnmQ&s",
    },
    {
      name: "Russia",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png",
    },
    {
      name: "England",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    },
    {
      name: "India",
      flag: "https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png",
    },
  ];

  return (
    <div className="  text-gray-900 dark:text-gray-100 py-12 px-6">
      {/* Title */}
      <Fade direction="up" triggerOnce>
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          Countries we’re supporting <br />
          <span className="text-blue-500">for the immigration</span>
        </h2>
      </Fade>

      {/* Countries */}
      <Fade cascade triggerOnce>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mt-10">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 w-32"
            >
              <img src={country.flag} alt="" />
              <div className="mt-2 text-lg font-medium">{country.name}</div>
            </div>
          ))}
        </div>
      </Fade>

      {/* FAQ Section */}
      <div className="bg-blue-500 dark:bg-blue-600 text-white mt-12 rounded-lg p-6 flex flex-col md:flex-row justify-center md:gap-24 items-center shadow-lg">
        <div>
          <p className="uppercase text-sm">Check our FAQs</p>
          <h3 className="text-xl md:text-2xl font-bold mt-2">
            Looking for the best study visa <br />
            <span className="text-yellow-300">country</span>
          </h3>
          <ul className="mt-4 space-y-2">
            <li>✔ Visas</li>
            <li>✔ Study Visa</li>
            <li>✔ Country Citizenship</li>
            <li>✔ Permanent Residence</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="https://html.kodesolution.com/2023/immigro-html/images/resource/image-5.png"
            alt="Support"
            className="w-48 md:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;
