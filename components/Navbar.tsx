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
                <Link className="font-bold text-inherit" href="#">rohan moniz</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#about">
                        about
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#experience">
                        experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#projects">
                        projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#other">
                        other
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}