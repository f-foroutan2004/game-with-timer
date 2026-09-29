import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onSelect,
}) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>you lost</h2>}
      {!userLost && <h2>your score: {score}</h2>}
      <p>
        the target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        ypu stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" action="" onSubmit={onSelect}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
