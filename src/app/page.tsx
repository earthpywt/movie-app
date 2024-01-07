import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import MoviePanel from "@/components/MoviePanel";

export default function Home() {
    return (
        <main className={styles.main}>
            <Banner />
            <MoviePanel />
        </main>
    );
}
