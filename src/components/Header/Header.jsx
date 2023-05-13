import LogoImg from "../../assets/logo.svg";
import { FontComponent, ThemeComponent } from "../../components";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <img src={LogoImg} alt="Logo" />

        <div className="flex items-center gap-5">
          <FontComponent />
          <AnimatePresence initial={false} mode="wait">
            <ThemeComponent />
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
