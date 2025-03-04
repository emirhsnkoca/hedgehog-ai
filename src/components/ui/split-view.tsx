"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface SplitViewProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  defaultSizes?: number[];
  minSizes?: number[];
  children: React.ReactNode;
  className?: string;
  dividerClassName?: string;
  gripClassName?: string;
}

export function SplitView({
  direction = "horizontal",
  defaultSizes = [50, 50],
  minSizes = [10, 10],
  children,
  className,
  dividerClassName,
  gripClassName,
  ...props
}: SplitViewProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dividerRef = React.useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = React.useState<number[]>(defaultSizes);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPosition, setStartPosition] = React.useState(0);
  const [startSizes, setStartSizes] = React.useState<number[]>([]);

  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length !== 2) {
    throw new Error("SplitView must have exactly 2 children");
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPosition(direction === "horizontal" ? e.clientX : e.clientY);
    setStartSizes([...sizes]);
  };

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerSize = direction === "horizontal" ? containerRect.width : containerRect.height;
      const currentPosition = direction === "horizontal" ? e.clientX : e.clientY;
      const delta = currentPosition - startPosition;
      const deltaPercentage = (delta / containerSize) * 100;

      const newSizes = [...startSizes];
      newSizes[0] = Math.max(minSizes[0], startSizes[0] + deltaPercentage);
      newSizes[1] = Math.max(minSizes[1], startSizes[1] - deltaPercentage);

      // Normalize to ensure they sum to 100
      const sum = newSizes[0] + newSizes[1];
      if (sum !== 100) {
        const factor = 100 / sum;
        newSizes[0] *= factor;
        newSizes[1] *= factor;
      }

      setSizes(newSizes);
    },
    [isDragging, direction, startPosition, startSizes, minSizes]
  );

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      <div
        className="relative"
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${sizes[0]}%`,
        }}
      >
        {childrenArray[0]}
      </div>
      <div
        ref={dividerRef}
        className={cn(
          "flex items-center justify-center",
          direction === "horizontal"
            ? "cursor-col-resize border-x"
            : "cursor-row-resize border-y",
          direction === "horizontal" ? "w-1" : "h-1",
          isDragging && "bg-primary/10",
          dividerClassName
        )}
        onMouseDown={handleMouseDown}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            direction === "horizontal" ? "h-8 w-1" : "h-1 w-8",
            gripClassName
          )}
        >
          <GripVertical
            className={cn(
              "h-4 w-4 text-muted-foreground",
              direction === "vertical" && "rotate-90"
            )}
          />
        </div>
      </div>
      <div
        className="relative"
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${sizes[1]}%`,
        }}
      >
        {childrenArray[1]}
      </div>
    </div>
  );
} 