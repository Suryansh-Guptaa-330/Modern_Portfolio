import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';

export default function Terminal({ onTriggerAntiGravity }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      id: 'init-1',
      type: 'system',
      text: 'Suryansh Gupta Developer Terminal [Version 1.0.0]',
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'Type "help" to view all available commands.',
    },
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [commandList, setCommandList] = useState([]);

  const inputRef = useRef(null);
  const shellBottomRef = useRef(null);

  // Auto scroll to bottom whenever history changes
  useEffect(() => {
    shellBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on mount and when clicking anywhere on the terminal window
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandExecution = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add command to user history for arrow key navigation
    setCommandList((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    const cmd = trimmed.toLowerCase();
    const entryId = Date.now();

    // New history items to append
    let newEntries = [
      {
        id: `cmd-${entryId}`,
        type: 'user',
        text: trimmed,
      },
    ];

    switch (cmd) {
      case 'help':
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-emerald-400">
              <div className="text-slate-300 font-semibold mb-1">Available commands:</div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-3 gap-y-1 pl-2">
                <span className="text-accentCyan font-bold">bio</span>
                <span className="text-slate-300">Outputs role summary, background & tagline</span>
                <span className="text-accentCyan font-bold">skills</span>
                <span className="text-slate-300">Lists frontend, backend & database technologies</span>
                <span className="text-accentCyan font-bold">projects</span>
                <span className="text-slate-300">Lists featured production systems and links</span>
                <span className="text-accentCyan font-bold">contact</span>
                <span className="text-slate-300">Displays direct email, phone & social profiles</span>
                <span className="text-accentCyan font-bold">gravity</span>
                <span className="text-slate-300">Launches the Matter.js Anti-Gravity simulation</span>
                <span className="text-accentCyan font-bold">clear</span>
                <span className="text-slate-300">Flushes all terminal output history</span>
              </div>
            </div>
          ),
        });
        break;

      case 'bio':
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-2 text-emerald-400">
              <div className="font-bold text-white text-base">{personalInfo.name}</div>
              <div className="text-accentCyan font-medium">{personalInfo.role}</div>
              <p className="text-slate-300 leading-relaxed max-w-xl">{personalInfo.tagline}</p>
              <div className="text-xs text-slate-400">
                📍 Location: <span className="text-slate-200">{personalInfo.location}</span> | Status:{' '}
                <span className="text-emerald-400 font-semibold">Available for Hire</span>
              </div>
            </div>
          ),
        });
        break;

      case 'skills':
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-2.5 text-emerald-400">
              <div>
                <span className="text-accentCyan font-bold">Frontend: </span>
                <span className="text-slate-200">{skillsData.frontend.join(' • ')}</span>
              </div>
              <div>
                <span className="text-accentCyan font-bold">Backend: </span>
                <span className="text-slate-200">{skillsData.backend.join(' • ')}</span>
              </div>
              <div>
                <span className="text-accentCyan font-bold">Database: </span>
                <span className="text-slate-200">{skillsData.database.join(' • ')}</span>
              </div>
              <div>
                <span className="text-accentCyan font-bold">Tools & Cloud: </span>
                <span className="text-slate-200">{skillsData.toolsAndCloud.join(' • ')}</span>
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-3 text-emerald-400">
              <div className="text-slate-300 font-semibold">Featured Production Systems:</div>
              <div className="space-y-2 pl-2">
                {projectsData.map((proj, idx) => (
                  <div key={proj.id || idx} className="border-l-2 border-accentCyan/40 pl-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white font-bold">{proj.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cardBorder text-accentCyan">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{proj.description}</p>
                    <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-x-4">
                      <span>Stack: {proj.stack.join(', ')}</span>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accentCyan underline hover:text-cyan-300"
                        >
                          Live App ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        break;

      case 'contact':
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-emerald-400">
              <div className="text-slate-300 font-semibold mb-1">Get In Touch:</div>
              <div className="space-y-1 pl-2 text-slate-300">
                <div>
                  <span className="text-accentCyan font-semibold">Email: </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="text-accentCyan font-semibold">Phone: </span>
                  <a href={`tel:${personalInfo.phone}`} className="text-white hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <span className="text-accentCyan font-semibold">GitHub: </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white hover:underline"
                  >
                    {personalInfo.github}
                  </a>
                </div>
                <div>
                  <span className="text-accentCyan font-semibold">LinkedIn: </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white hover:underline"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
          ),
        });
        break;

      case 'gravity':
      case 'antigravity':
        onTriggerAntiGravity?.();
        newEntries.push({
          id: `out-${entryId}`,
          type: 'output',
          content: (
            <div className="space-y-1 text-cyan-400 font-bold">
              <div>🚀 ZERO_GRAVITY_MODE initiated!</div>
              <div className="text-xs text-slate-300 font-normal">
                Buoyancy physics active. Drag and toss floating elements. Click "Restore Normal Physics" or press ESC to exit.
              </div>
            </div>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newEntries.push({
          id: `err-${entryId}`,
          type: 'error',
          text: `dev-terminal: command not found: "${trimmed}". Type "help" to see available commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandExecution(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex =
        commandIndex === -1 ? commandList.length - 1 : Math.max(0, commandIndex - 1);
      setCommandIndex(nextIndex);
      setInput(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex === -1) return;
      const nextIndex = commandIndex + 1;
      if (nextIndex >= commandList.length) {
        setCommandIndex(-1);
        setInput('');
      } else {
        setCommandIndex(nextIndex);
        setInput(commandList[nextIndex]);
      }
    }
  };

  return (
    <div
      onClick={handleTerminalClick}
      className="w-full max-w-4xl mx-auto rounded-2xl bg-cardBg/90 border border-cardBorder shadow-2xl shadow-black/60 overflow-hidden font-mono cursor-text backdrop-blur-md"
    >
      {/* macOS Style Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c1322] border-b border-cardBorder select-none">
        {/* Red, Yellow, Green Status Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/90 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-amber-500/90 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/90 hover:opacity-80 transition-opacity" />
        </div>

        {/* Header Title with Terminal Icon */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium tracking-wide">
          <TerminalIcon className="w-3.5 h-3.5 text-accentCyan" />
          <span>suryansh@dev-terminal:~</span>
        </div>

        {/* Interactive Badge with Sparkles */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-[11px] text-accentCyan font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>interactive</span>
        </div>
      </div>

      {/* Shell Area (Fixed height scrollable) */}
      <div className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-300">
        {history.map((item) => {
          if (item.type === 'system') {
            return (
              <div key={item.id} className="text-slate-400">
                {item.text}
              </div>
            );
          }
          if (item.type === 'user') {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <span className="text-accentCyan font-semibold">suryansh@dev:~$</span>
                <span className="text-cyan-300 font-medium">{item.text}</span>
              </div>
            );
          }
          if (item.type === 'output') {
            return (
              <div key={item.id} className="pt-0.5 pb-1">
                {item.content || <div className="text-emerald-400">{item.text}</div>}
              </div>
            );
          }
          if (item.type === 'error') {
            return (
              <div key={item.id} className="text-rose-400 font-medium">
                {item.text}
              </div>
            );
          }
          return null;
        })}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-accentCyan font-semibold shrink-0">suryansh@dev:~$</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-cyan-300 outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm placeholder:text-slate-600"
              placeholder="type 'help' and press Enter..."
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <CornerDownLeft className="w-3.5 h-3.5 text-slate-600 ml-2 shrink-0 hidden sm:block" />
          </div>
        </div>

        {/* Scroll anchor */}
        <div ref={shellBottomRef} />
      </div>
    </div>
  );
}

