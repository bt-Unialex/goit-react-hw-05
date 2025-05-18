import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        404
        <br />
        PAGE
        <br />
        NOT
        <br />
        FOUND
      </h2>
    </div>
  );
}
