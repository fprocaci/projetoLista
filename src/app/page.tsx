import Contador from "./components/Contador";
import Header from "./components/Header";
import MegaSena from "./components/MegaSena";
import Contato from "./contato/page";

export default function Home() {
  return (
    <div className="container mx-auto bg-gray-200">
      <Header />
      <main className="container mx-auto h-screen flex items-center justify-center">
        <Contador />
        <MegaSena />
      </main>
    </div>
  );
}
