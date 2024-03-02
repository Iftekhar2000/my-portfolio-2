import image from "../assets/My profile pic.jpg"

export default function HeroSection() {

  return (
    <div className="px-4 md:px-16 my-8 md:flex justify-between gap-28 w-auto items-center">
    <div className="md:w-1/2">
        <img
            className="max-w-full md:max-w-[450px] mx-auto"
            src={image}
            alt="my image"
        />
    </div>

    <div className="md:w-1/2 flex flex-col gap-4 mt-4"> {/* Adjusting width on medium devices */}
        <h3 className="text-4xl">Meet</h3>
        <h2 className="text-6xl font-bold">Iftekharul Haque</h2>
        <p className="text-2xl">
            I am an aspiring frontend-developer with junior level experience in React.js. I studied the basic MERN stack and am well-versed with the knowledge of creating simple APIs and implementing them in my frontend projects. My main area of expertise is in React.js.
        </p>
    </div>
</div>



  )
}
