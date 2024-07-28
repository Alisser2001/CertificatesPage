"use client"
import Image from "next/image";

export const Pagination = ({ allCert, currentCert, certPerPage = 15, pagination, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCert.length / certPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePreviousPage = (e) => {
        e.preventDefault();
        if (currentPage - 1 > 0) {
            return pagination(currentPage - 1)
        } else {
            return pagination(currentPage)
        }
    }
    const handleNextPage = (e) => {
        e.preventDefault();
        if (currentCert.length < certPerPage){
            return pagination(currentPage);
        }
        if (currentPage + 1 <= (Math.ceil(allCert.length / certPerPage))) {
            console.log(currentPage+1)
            return pagination(currentPage + 1)
        } else {
            return pagination(currentPage)
        }
    }

    return (
        <footer className={styles.footer}>
            <ul className={styles.pagination}>
                {pageNumbers && <>
                    <Image
                        width="70"
                        height="50"
                        onClick={(e) => handlePreviousPage(e)}
                        alt="previou page"
                        src="/rowLeft.png"
                    />
                    <li>{currentPage}</li>
                    <Image
                        width="70"
                        height="50"
                        onClick={(e) => handleNextPage(e)}
                        alt="next page"
                        src="/rowRight.png"
                    />
                </>}
            </ul>
        </footer>
    )
}