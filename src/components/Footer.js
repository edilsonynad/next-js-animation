import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" d-flex flex-column gap-2 py-3 justify-content-center align-items-center">
            <div className="icons d-flex gap-3">
                <a href="#">
                    <Image
                        src="/icons/facebook.svg"
                        width={30}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/icons/instagram.svg"
                        width={30}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/icons/linkedin.svg"
                        width={30}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/icons/youtube.svg"
                        width={30}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
            </div>
            <div className="copyright text-white">© 2023 EDUdigital. Todos os direitos reservados</div>
        </footer>
    )
}