import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import earth from "../../assets/earth.svg";

export function LangDropdown() {
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
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>ქართული</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
