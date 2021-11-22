import {useRouter} from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <>
            <div className="nav">
                <div className="nav__item-container">
                    <div className="nav__item nav__title-wrapper">
                        <h2 onClick={() => router.push("/")} className="nav__title">dinner.</h2>
                    </div>
                    <div className="nav__item">
                        <button className="nav__item-button" onClick={() => router.push("/")}>home</button>
                    </div>
                    <div className="nav__item">
                        <button className="nav__item-button" onClick={() => router.push("/idea")}>idea</button>
                    </div>
                    <div className="nav__item">
                        <button className="nav__item-button" onClick={() => router.push("/technology")}>technology</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .nav {
                    background-color: #F06449;
                }
                .nav__item {
                    display: inline;
                    padding: 10px;
                    vertical-align: middle;
                }

                .nav__title-wrapper {
                    display: inline-block;
                }

                .nav__item-button {
                    border: none;
                    background-color: #fff0;
                    cursor: pointer;
                }

                .nav__title {
                    margin: 0;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}