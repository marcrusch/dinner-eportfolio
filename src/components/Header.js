import Nav from "./Nav";

export default function Header() {
    return (
        <>
            <div className="header">
                <Nav/>
                <div className="header__hero">
                    <h1 className="header__title">Welcome.</h1>
                </div>
            </div>
            <style jsx>{`
                .header {
                    height: 100vh;
                }

                .header__hero {
                    height: 100%;
                    background-color: #ddd;
                }
            `}</style>
        </>
    )
}