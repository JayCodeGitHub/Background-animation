import Particles from "./particles";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 -z-10">
      <Particles />
      <div className="absolute top-0 left-0 w-full h-screen -inset-px bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
}
