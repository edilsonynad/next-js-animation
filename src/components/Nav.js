import Image from "next/image";
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image
                        src="/icons/EDUdigital_logo.svg"
                        width={150}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span className="navbar-nav me-auto mb-2 mb-lg-0">
                    </span>
                    <div>
                        <a href="#" className="text-decoration-none text-grey mx-1">Quiz game</a>
                        <button className="text-green border border-1 rounded-4 bg-white px-3 py-2 mx-1 border-green">Ver
                            Manual
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}