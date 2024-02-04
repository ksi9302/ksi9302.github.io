export default function Contact() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl md:text-6xl mb-4">Peter Kim</h1>
      <a href="mailto:ksi9302@gmail">
        <div className="hover:text-red-400 md:text-xl">
          ✉️ ksi9302@gmail.com
        </div>
      </a>
      <div className="hover:text-red-400 md:text-xl">📱 +61 431 134 016</div>
    </div>
  );
}
