import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/button/Button";
import laptopAvatar from "../assets/laptop.avif";

const iconButton = (
    <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22.5738 1.55806C19.8981 -0.72221 15.9186 -0.312054 13.4625 2.22213L12.5006 3.21334L11.5387 2.22213C9.08751 -0.312054 5.10314 -0.72221 2.42736 1.55806C-0.639049 4.17525 -0.800182 8.87252 1.94396 11.7094L11.3922 21.4653C12.0026 22.0952 12.9938 22.0952 13.6041 21.4653L23.0524 11.7094C25.8014 8.87252 25.6402 4.17525 22.5738 1.55806Z"
            fill="white"
        />
    </svg>
);

export default function Home() {
    return (
        <>
            <Button
                title="Frontend Development"
                variant="danger"
                size="sm"
                icon={iconButton}
                isLoading={false}
            ></Button>
            <br />
            <br />
            <br />
            <br />
            <Avatar src={laptopAvatar}></Avatar>
        </>
    );
}
