"use client"
import certificates from "../../certificatesInfo.json";

export const Filter = ({ filter, pagination }) => {
    let c = certificates.map((c) => c.platform);
    c = [...new Set(c)];
    const handleFilterPlatform = (e) => {
        e.preventDefault();
        filter(e.target.value);
        pagination(1);
    }
    return (
        <section className={styles.filterCont}>
            <h4 className={styles.title}>Platform: </h4>
            <select
            className={styles.selectPlatform}
            onChange={e => { return handleFilterPlatform(e) }}>
                <option defaultValue="all" value="all">All</option>
                {certificates && c.map((c, i) => {
                    return (
                        <option value={c} key={i}>{c}</option>
                    )
                })}
            </select>
        </section>
    )
}