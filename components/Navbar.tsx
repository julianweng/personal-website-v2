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
                <p className="font-bold text-inherit">rohan moniz</p>
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
                    <Link color="foreground" href="#misc">
                        misc.
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}