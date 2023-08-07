import { AvatarProps } from "@/types/avatar.type";
import Image from "next/image";

const Avatar = (props: AvatarProps) => {
    const { title, src } = props;

    const handleTwoLetterTitle = (title: string) => {
        return title.slice(0, 2).toUpperCase();
    };

    const noneValue = (
        <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.5 32.0625C37.3506 32.0625 44.5312 24.8818 44.5312 16.0312C44.5312 7.18066 37.3506 0 28.5 0C19.6494 0 12.4688 7.18066 12.4688 16.0312C12.4688 24.8818 19.6494 32.0625 28.5 32.0625ZM42.75 35.625H36.6158C34.1443 36.7605 31.3945 37.4062 28.5 37.4062C25.6055 37.4062 22.8668 36.7605 20.3842 35.625H14.25C6.3791 35.625 0 42.0041 0 49.875V51.6562C0 54.6064 2.39355 57 5.34375 57H51.6562C54.6064 57 57 54.6064 57 51.6562V49.875C57 42.0041 50.6209 35.625 42.75 35.625Z"
                fill="white"
            />
        </svg>
    );
    const avatarImage = src && (
        <Image className="w-full h-full" src={src} alt="laptop" />
    );
    const avatarTitle = title && handleTwoLetterTitle(title);

    const result = avatarTitle || avatarImage || noneValue;

    return (
        <div className="w-[100px] h-[100px] rounded-full bg-purple-600 inline-flex justify-center items-center text-3xl text-white overflow-hidden">
            {result}
        </div>
    );
};

export default Avatar;
