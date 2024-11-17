import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import sun from "../../assets/sun.svg";


const ThemeDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img src={sun} alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
      
  );
};

export default ThemeDropdown;

