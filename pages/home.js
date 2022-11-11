import Image from "next/legacy/image";
import React from "react";

function home() {
  return (
    <div>
      <header className="relative w-36 h-10">
        <Image
          src="https://rb.gy/vtbzlp"
          layout="fill"
          objectFit="contain"
          alt="logo"
          priority="true"
        />
        test
      </header>
    </div>
  );
}

export default home;
