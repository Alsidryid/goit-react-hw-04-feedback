import style from './Section.module.css'

export default function Section({ title, children }) {
    return (
        <section className={style.section}>
            <h3 className={style.title}>{title}</h3>
            {children}
        </section>
    )
}