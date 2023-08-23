import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function Navbar() {
    return (
        <NextUINavbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <Link className="font-bold text-inherit" href="#">Rohan Moniz</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#experience">
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#other">
                        Other
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}