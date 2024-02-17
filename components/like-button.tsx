"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <Heart
      className={`w-6 h-6 cursor-pointer ${
        isLiked && "fill-red-500 text-red-500"
      }`}
      onClick={() => setIsLiked((prev) => !prev)}
    />
  );
}
