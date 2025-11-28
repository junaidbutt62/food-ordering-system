
export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('Menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="Home" className="w-full h-screen py-30" style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?semt=ais_hybrid&w=1550&q=80')",

      backgroundPosition: "center",
      //   backgroundRepeat:"no-repeat",
    }}>
      <div className="w-full h-full flex flex-col justify-around items-center px-4 text-center">
        <h1 style={{ fontFamily: `"Rubik Microbe", system-ui` }}
          className="text-5xl font-bold text-gray-900 tracking-wider leading-normal">
          Its not just <br /> <span className="text-amber-400">Food,</span> its an <br /><span className="text-amber-400"> Experience</span>
        </h1>

        <p className="text-gray-600 text-lg ">
          We are helping peoples to get fresh and delicuious food <br />in few minutes by using our nice web or app
        </p>

        <button onClick={scrollToMenu} className="max-w-40 px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition">
          View menu
        </button>
      </div>
    </section>
  );
}
