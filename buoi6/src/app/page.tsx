import Dropdown from "@/components/dropdown/Dropdown";
import InputPasswordToggle from "@/components/inputPasswordToggle/InputPasswordToggle";

export default function Home() {
    return (
        <div className="flex gap-12">
            <Dropdown />
            <InputPasswordToggle />
        </div>
    );
}
