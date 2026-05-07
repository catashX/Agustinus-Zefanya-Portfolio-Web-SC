"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
}

interface Connection {
  id: number;
  from: Node;
  to: Node;
  delay: number;
  duration: number;
}

export default function NeuralNetworkBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate nodes in layers to mimic a neural network
  const { nodes, connections } = useMemo(() => {
    const layers = [
      { count: 4, xPercent: 10 },
      { count: 6, xPercent: 30 },
      { count: 8, xPercent: 50 },
      { count: 6, xPercent: 70 },
      { count: 4, xPercent: 90 },
    ];

    const allNodes: Node[] = [];
    let nodeId = 0;
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        allNodes.push({
          id: nodeId++,
          x: layer.xPercent + (Math.random() - 0.5) * 6,
          y: ((i + 1) / (layer.count + 1)) * 100,
        });
      }
    });

    // Create connections between adjacent layers
    const allConnections: Connection[] = [];
    let connId = 0;
    let prevStart = 0;
    let prevCount = layers[0].count;
    let currentStart = layers[0].count;
    for (let l = 1; l < layers.length; l++) {
      const currentCount = layers[l].count;
      for (let i = 0; i < prevCount; i++) {
        // Connect each node to 2-3 random nodes in next layer
        const numConns = 2 + Math.floor(Math.random() * 2);
        const connectedSet = new Set<number>();
        for (let c = 0; c < numConns; c++) {
          const targetIdx = Math.floor(Math.random() * currentCount);
          if (connectedSet.has(targetIdx)) continue;
          connectedSet.add(targetIdx);
          allConnections.push({
            id: connId++,
            from: allNodes[prevStart + i],
            to: allNodes[currentStart + targetIdx],
            delay: Math.random() * 8,
            duration: 2 + Math.random() * 4,
          });
        }
      }
      prevStart = currentStart;
      prevCount = currentCount;
      currentStart += currentCount;
    }

    return { nodes: allNodes, connections: allConnections };
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 50% 50%, var(--primary-glow) 0%, transparent 50%)",
        opacity: 0.15,
        filter: "blur(40px)",
      }} />

      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        {/* Connections */}
        {connections.map((conn) => (
          <motion.line
            key={`conn-${conn.id}`}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="var(--primary)"
            strokeWidth="0.5"
            initial={{ opacity: 0.02 }}
            animate={{ opacity: [0.02, 0.15, 0.02] }}
            transition={{
              duration: conn.duration,
              repeat: Infinity,
              delay: conn.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Signal pulses along connections */}
        {connections.filter((_, i) => i % 3 === 0).map((conn) => (
          <motion.circle
            key={`pulse-${conn.id}`}
            r="2"
            fill="var(--primary)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [`${conn.from.x}%`, `${conn.to.x}%`],
              cy: [`${conn.from.y}%`, `${conn.to.y}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: conn.duration * 0.6,
              repeat: Infinity,
              delay: conn.delay + 1,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(1px)" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="var(--background)"
            stroke="var(--primary)"
            strokeWidth="1"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Scan line effect */}
      <motion.div
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "2px",
          background: "linear-gradient(to right, transparent, var(--primary), transparent)",
          opacity: 0.15,
          boxShadow: "0 0 20px 10px var(--primary-glow)",
        }}
      />
    </div>
  );
}
