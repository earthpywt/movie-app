import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h1 className="text-4xl font-medium">your movie app</h1>
                <h3 className="text-xl font-serif">
                    explore cinematic experience
                </h3>
            </div>
        </div>
    );
}
