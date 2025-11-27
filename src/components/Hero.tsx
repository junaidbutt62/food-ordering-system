
export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('Menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-screen py-30" style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?semt=ais_hybrid&w=1550&q=80')",

      backgroundPosition: "center",
      //   backgroundRepeat:"no-repeat",
    }}>
      <div className="w-full h-full flex flex-col justify-around items-center px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 tracking-wider leading-normal">
          Its not just <br />Food, its an <br />Experience
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
