"use client";
import styles from "./productcard.module.css";
import Image from "next/image";

export default function InteractiveCard({
    children,
}: {
    children: React.ReactNode;
}) {
    function onCardMouseAction(event: React.BaseSyntheticEvent) {
        if (event.type == "mouseover") {
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
        }
    }

    return (
        <div
            className="w-[250px] h-[400px] rounded-lg shadow-lg shadow-slate-400 bg-white hover:bg-neutral-200 m-[10px]"
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>
    );
}
