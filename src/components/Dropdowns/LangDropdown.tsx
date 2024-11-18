import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import earth from "../../assets/earth.svg";
import i18n from "i18next";

export function LangDropdown() {
  const handleChangeName = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="dark:invert dark:brightness-75">
            <img src={earth} alt="" />
          </div>
          <span className="sr-only">Toggle Lang</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeName("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeName("ka")}>
          ქართული
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
