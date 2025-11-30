import { useEffect, useState, useId, useRef } from "react";
import { gsap } from "gsap";
import { useBounceCardsContext } from "../contexts/bounce-cards-context";

interface BounceCardsProps {
  className?: string;
  items?: React.ReactNode[];
  containerWidth?: number;
  containerHeight?: number;
  radius?: number;
  transformStyles?: string[];
  enableHover?: boolean;
  fanDirection?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export default function BounceCards({
  className = "",
  items = [],
  containerWidth = 300,
  containerHeight = 300,
  radius = 200,
  transformStyles: propTransformStyles,
  enableHover = false,
  fanDirection,
}: BounceCardsProps) {
  const instanceId = useId();
  const { activeInstanceId, setActiveInstanceId } = useBounceCardsContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidthRef = useRef(containerWidth);
  const containerHeightRef = useRef(containerHeight);
  const [transformStyles, setTransformStyles] = useState<string[]>(
    propTransformStyles || []
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!propTransformStyles) {
      const randomStyles = items.map(() => {
        const rotation = Math.random() * 20 - 10; // Random between -10 and 10
        const x = Math.random() * 50 - 25; // Random between -5 and 5
        const y = Math.random() * 50 - 25; // Random between -5 and 5
        return `rotate(${rotation}deg) translateX(${x}px) translateY(${y}px)`;
      });
      setTransformStyles(randomStyles);
    }
  }, [items, propTransformStyles]);


  const getCardPosition = (i: number) => {
    let angle = (i / items.length) * 2 * Math.PI;

    if (fanDirection) {
      let startAngle = 0;
      let endAngle = 2 * Math.PI;

      switch (fanDirection) {
        case "bottom-right":
          startAngle = 0;
          endAngle = Math.PI / 2;
          break;
        case "bottom-left":
          startAngle = Math.PI / 2;
          endAngle = Math.PI;
          break;
        case "top-left":
          startAngle = Math.PI;
          endAngle = (3 * Math.PI) / 2;
          break;
        case "top-right":
          startAngle = (3 * Math.PI) / 2;
          endAngle = 2 * Math.PI;
          break;
      }

      if (items.length > 1) {
        angle = startAngle + (i / (items.length - 1)) * (endAngle - startAngle);
      } else {
        angle = startAngle + (endAngle - startAngle) / 2;
      }
    }

    const radiusValue = radius || 300;
    const x = Math.cos(angle) * radiusValue;
    const y = Math.sin(angle) * radiusValue;
    return { x, y };
  };

  // Animate container when another instance is active
  useEffect(() => {
    if (!containerRef.current) return;

    if (activeInstanceId !== null && activeInstanceId !== instanceId) {
      // Another instance is active, push this one off-screen
      gsap.to(containerRef.current, {
        y: "150vh",
        width: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Reset to normal position
      gsap.to(containerRef.current, {
        y: 0,
        width: containerWidthRef.current,
        height: containerHeightRef.current,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [activeInstanceId, instanceId]);

  useEffect(() => {
    if (hoveredIndex === null) return;

    items.forEach((_, i) => {
      const selector = `.card-${instanceId}-${i}`;
      const { x, y } = getCardPosition(i);
      const baseTransform = transformStyles[i] || "none";
      const rotateRegex = /rotate\([\s\S]*?\)/;
      const match = baseTransform.match(rotateRegex);
      const rotation = match ? match[0] : "rotate(0deg)";

      if (i === hoveredIndex) {
        gsap.to(selector, {
          transform: `rotate(0deg) translateX(${x}px) translateY(${y}px) scale(1.1)`,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        gsap.to(selector, {
          transform: `${rotation} translateX(${x}px) translateY(${y}px) scale(1)`,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      }
    });
  }, [hoveredIndex, items.length, fanDirection, transformStyles]);

  const pushSiblings = () => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.card-${instanceId}-${i}`;
      gsap.killTweensOf(selector);

      const { x, y } = getCardPosition(i);

      const baseTransform = transformStyles[i] || "none";
      const rotateRegex = /rotate\([\s\S]*?\)/;
      const match = baseTransform.match(rotateRegex);
      const rotation = match ? match[0] : "rotate(0deg)";

      gsap.to(selector, {
        transform: `${rotation} translateX(${x}px) translateY(${y}px) scale(1)`,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.card-${instanceId}-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableHover) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let minDistance = Infinity;
    let closestIndex = -1;

    items.forEach((_, i) => {
      const { x: cardX, y: cardY } = getCardPosition(i);

      const distance = Math.sqrt(
        Math.pow(mouseX - cardX, 2) + Math.pow(mouseY - cardY, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    setHoveredIndex(closestIndex);
  };

  const handleMouseLeave = () => {
    resetSiblings();
    setHoveredIndex(null);
    setActiveInstanceId(null);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseEnter={() => {
        pushSiblings();
        setActiveInstanceId(instanceId);
      }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`card card-${instanceId}-${idx} absolute`}
          style={{
            transform: transformStyles[idx] || "none",
            zIndex: hoveredIndex === idx ? 9999 : idx,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
