import BarraSuperior from "./widgets/BarraSuperior";
import MenuNavegacao from "./widgets/MenuNavegacao";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <MenuNavegacao />
      </header>
    </div>
  );
}
