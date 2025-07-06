export default function Hero() {
  return (
    <section className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="h-full bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Todo lo que necesitas en INVERMAAS</h1>
      </div>
    </section>
  );
}
