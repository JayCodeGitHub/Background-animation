export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 -z-20">
      <video
        muted
        playsInline
        autoPlay
        loop
        className="object-cover object-center w-full h-full opacity-50 -z-10"
        src="https://www.w3schools.com/howto/rain.mp4"
      ></video>
      <div className="absolute top-0 left-0 w-full h-screen -inset-px bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="h-full bg-gray-900" />
      <div className="h-full bg-gray-900" />
    </div>
  );
}
