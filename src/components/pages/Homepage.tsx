import { useEffect } from "react";
import { Button } from "../Button";

export function Homepage() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 relative max-w-screen-xl mx-auto">
        {/* <!-- First Div --> */}
        <div className="bg-blue-500 h-64 relative z-10 col-start-1 row-start-1">
          {/* <!-- Content of the first div --> */}
        </div>

        {/* <!-- Second Div (Overlapping) --> */}
        <div className="bg-red-500 h-64 -mt-8 relative z-20 col-start-1 row-start-1">
          {/* <!-- Content of the second div --> */}
        </div>

        <div>
          <h1>Hello World</h1>
        </div>
        <div className="space-x-2">
          <Button variant="secondary">Learn more</Button>
          <Button asChild>
            <a className="hello" href="/components">
              Dive into components →
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
