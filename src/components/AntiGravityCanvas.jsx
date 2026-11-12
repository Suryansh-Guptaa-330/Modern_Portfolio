import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { RotateCcw, Sparkles } from 'lucide-react';

const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

export default function AntiGravityCanvas({ isActive, onClose }) {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    // Handle ESC key to restore normal physics
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Create Physics Engine with inverted buoyancy gravity
    const engine = Engine.create();
    engineRef.current = engine;
    engine.gravity.y = -0.3; // Inverted buoyancy gravity: slowly floats upwards
    engine.gravity.x = 0;

    // 2. Create Renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
      },
    });
    renderRef.current = render;
    Render.run(render);

    // 3. Create Runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // 4. Static boundaries to contain floating items within screen bounds
    const wallThickness = 80;
    const boundaries = [
      // Ceiling
      Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, {
        isStatic: true,
        render: { visible: false },
      }),
      // Floor
      Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, {
        isStatic: true,
        render: { visible: false },
      }),
      // Left Wall
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
        isStatic: true,
        render: { visible: false },
      }),
      // Right Wall
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
        isStatic: true,
        render: { visible: false },
      }),
    ];
    Composite.add(engine.world, boundaries);

    // 5. Generate rounded pill bodies for technologies
    const techItems = [
      { name: 'React.js', color: '#06b6d4' },
      { name: 'Node.js', color: '#10b981' },
      { name: 'Express', color: '#94a3b8' },
      { name: 'MongoDB Atlas', color: '#10b981' },
      { name: 'JWT Auth', color: '#f59e0b' },
      { name: 'Tailwind CSS', color: '#38bdf8' },
      { name: 'Vite', color: '#a855f7' },
      { name: 'REST API', color: '#6366f1' },
      { name: 'C++', color: '#3b82f6' },
      { name: 'Python', color: '#eab308' },
      { name: 'VoteChain 🗳️', color: '#06b6d4' },
      { name: 'Postman', color: '#f97316' },
      { name: 'Vercel', color: '#f1f5f9' },
      { name: 'Render', color: '#46e3b7' },
    ];

    const pills = techItems.map((item, index) => {
      const pillWidth = Math.max(120, item.name.length * 9.5 + 44);
      const pillHeight = 44;
      const radius = pillHeight / 2;

      // Spawn near bottom & center area so they rise organically
      const x = (width * 0.15) + (index % 5) * ((width * 0.7) / 5) + (Math.random() * 40 - 20);
      const y = height - 120 - Math.floor(index / 5) * 80 - (Math.random() * 30);

      const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: radius },
        restitution: 0.8, // Elasticity
        frictionAir: 0.02, // Air friction
        render: {
          fillStyle: '#0f172a',
          strokeStyle: item.color,
          lineWidth: 2,
        },
      });

      // Attach custom metadata for afterRender drawing
      body.customLabel = item.name;
      body.customColor = item.color;
      body.customWidth = pillWidth;
      body.customHeight = pillHeight;

      return body;
    });

    Composite.add(engine.world, pills);

    // 6. Interactive Drag & Toss with MouseConstraint
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // 7. afterRender listener: Draw centered, crisp font labels on each body matching rotation angle
    Events.on(render, 'afterRender', () => {
      const context = render.context;
      if (!context) return;

      pills.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;

        context.save();
        context.translate(x, y);
        context.rotate(angle);

        // Draw subtle inner pill glow
        context.strokeStyle = body.customColor;
        context.lineWidth = 1.5;
        context.beginPath();
        if (typeof context.roundRect === 'function') {
          context.roundRect(
            -body.customWidth / 2,
            -body.customHeight / 2,
            body.customWidth,
            body.customHeight,
            body.customHeight / 2
          );
        }
        context.stroke();

        // Draw crisp label text
        context.font = '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#f8fafc';
        context.fillText(body.customLabel, 0, 1);

        context.restore();
      });
    });

    // 8. Cleanup Hook
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      Events.off(render, 'afterRender');
      if (renderRef.current) {
        Render.stop(renderRef.current);
        if (renderRef.current.canvas) {
          renderRef.current.canvas.remove();
        }
      }
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Composite.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-darkBg/95 backdrop-blur-2xl flex flex-col select-none overflow-hidden">
      {/* Header Overlay */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 bg-slate-900/80 border-b border-cardBorder backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>ZERO_GRAVITY_MODE // ACTIVE</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Buoyancy Gravity: y = -0.3 • Elasticity: 0.8 • Grab, drag, and toss tech pills
            </p>
          </div>
        </div>

        {/* Restore Normal Physics Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-indigo-600 hover:opacity-95 rounded-xl shadow-lg shadow-rose-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restore Normal Physics</span>
        </button>
      </div>

      {/* Matter.js Physics Canvas Container */}
      <div
        ref={containerRef}
        className="w-full flex-1 relative cursor-grab active:cursor-grabbing overflow-hidden"
      />

      {/* Floating Bottom Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300 backdrop-blur-md shadow-lg flex items-center gap-2">
        <span>💡 Hint: Click & toss any floating pill with your mouse or finger (Press ESC to exit)</span>
      </div>
    </div>
  );
}

