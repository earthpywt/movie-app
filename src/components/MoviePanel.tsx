"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function MoviePanel() {
    const compareReducer = (
        compareList: Set<string>,
        action: { type: string; carName: string }
    ) => {
        switch (action.type) {
            case "add": {
                return new Set(compareList.add(action.carName));
            }
            case "remove": {
                compareList.delete(action.carName);
                return new Set(compareList);
            }
            default:
                return compareList;
        }
    };

    const [compareList, dispatchCompare] = useReducer(
        compareReducer,
        new Set<string>()
    );

    const mockMovies = [
        { mid: "001", name: "Parasite", img: "/img/parasite.jpg" },
        {
            mid: "002",
            name: "Decision to Leave",
            img: "/img/decision-to-leave.jpg",
        },
        { mid: "003", name: "Logan", img: "/img/logan.jpg" },
        { mid: "004", name: "Past Lives", img: "/img/past-lives.jpg" },
    ];

    return (
        <div>
            <div
                style={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignContent: "space-around",
                }}
            >
                {/* <ProductCard name="Parasite" img="/img/parasite.jpg" />
                <ProductCard
                    name="Decision to Leave"
                    img="/img/decision-to-leave.jpg"
                />
                <ProductCard name="Logan" img="/img/logan.jpg" />
                <ProductCard name="Past Lives" img="/img/past-lives.jpg" /> */}
                {mockMovies.map((movieItem) => (
                    <Link href={`/movie/${movieItem.mid}`} className="w-1/5">
                        <ProductCard
                            name={movieItem.name}
                            img={movieItem.img}
                            onCompare={(car: string) =>
                                dispatchCompare({ type: "add", carName: car })
                            }
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
