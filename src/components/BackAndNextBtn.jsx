export default function BackAndNextBtn({
  backBtnHandler,
  nextBtnHandler,
  styles,
  volcanoContent,
  pageIndex,
}) {
  return (
    <div className={styles.gridContainter}>
      {pageIndex !== 0 ? (
        <button
          className={`${styles.gridItem} ${styles.backBtn}`}
          onClick={() => backBtnHandler(volcanoContent[pageIndex].backPage)}
        >
          Back
        </button>
      ) : (
        <div></div>
      )}
      <div></div>
      {pageIndex !== volcanoContent.length - 1 ? (
        <button
          className={`${styles.gridItem} ${styles.startBtn}`}
          onClick={() => nextBtnHandler(volcanoContent[pageIndex].nextPage)}
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
