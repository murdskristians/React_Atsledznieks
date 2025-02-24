import { DesktopHeader } from "./DesktopHeader";
import { HeaderBottomLine } from "./HeaderBottomLine";
import { MobileHeader } from "./MobileHeader";

export const Header = () => (
  <>
    <header className="relative px-8 lx:px-12 flex xl:justify-center h-20 w-full">
      <div className="hidden xl:block">
        <DesktopHeader />
      </div>
      <div className="xl:hidden w-full">
        <MobileHeader />
      </div>
      <HeaderBottomLine />
    </header>
  </>
);
