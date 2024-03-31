import styles from "./productcard.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({
    name,
    img,
    onCompare,
}: {
    name: string;
    img: string;
    onCompare?: Function;
}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[90%] relative rounded-t-lg">
                <Image
                    src={img}
                    alt="Parasite"
                    fill={true}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    // objectFit="cover"
                    className="object-cover rounded-t-lg"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="w-full h-[30%] p-[10px] text-black">{name}</div>
            {onCompare ? (
                <button
                    className="block text-sm h-[10%] rounded-md bg-sky-600 
            hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onCompare(name);
                    }}
                >
                    Compare
                </button>
            ) : (
                ""
            )}
        </InteractiveCard>
    );
}
