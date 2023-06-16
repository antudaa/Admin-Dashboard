import Image from "next/image";

const Icon = ({ img }: any) => {
    return (
        <div>
            <Image width={30} height={30} src={img} alt="Image not found" />
        </div>
    );
};

export default Icon;