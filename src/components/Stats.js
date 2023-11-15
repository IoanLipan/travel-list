import React from "react";

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>🚀 Start adding some items to the list! 🚀</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((100 * packedItems) / totalItems);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>🎉🎉🎉 You're all set! 🎉🎉🎉</em>
      ) : (
        <em>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
