import NavLinkItem from "../navlink";

const Header = () => {
    return (
        <nav className=" flex justify-between items-center p-5 mb-6 shadow-lg rounded-b-lg border-0 bg-green-50">
            <NavLinkItem url="/" text="HRnet" />
            <div className="flex flex-row items-center gap-2">
                <NavLinkItem url="/" text="Create Employee" />
                <NavLinkItem url="/currentEmployees" text="View Current Employees" />
            </div>
        </nav>
    )
}

export default Header;