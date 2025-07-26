
// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Terminal as TerminalIcon, Power, RotateCcw, X } from "lucide-react";

// interface TerminalProps {}

// const Terminal: React.FC<TerminalProps> = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [password, setPassword] = useState('');
//   const [showPasswordInput, setShowPasswordInput] = useState(true);
//   const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
//   const [currentCommand, setCurrentCommand] = useState('');
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalOutput]);

//   const handleConnect = async () => {
//     if (!password) return;
    
//     setIsConnecting(true);
//     setTerminalOutput(prev => [...prev, '$ Connecting to remote server...']);
    
//     // Simulate SSH connection
//     setTimeout(() => {
//       setIsConnecting(false);
//       setIsConnected(true);
//       setShowPasswordInput(false);
//       setTerminalOutput(prev => [
//         ...prev,
//         'Connected to server-prod-01.example.com',
//         'Last login: ' + new Date().toLocaleString(),
//         'Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-174-generic x86_64)',
//         '',
//         'user@server-prod-01:~$ '
//       ]);
//     }, 2000);
//   };

//   const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && currentCommand.trim()) {
//       const command = currentCommand.trim();
//       setTerminalOutput(prev => [...prev, `user@server-prod-01:~$ ${command}`]);
      
//       // Simulate command responses
//       setTimeout(() => {
//         let response = '';
//         switch (command.toLowerCase()) {
//           case 'ls':
//             response = 'bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var';
//             break;
//           case 'pwd':
//             response = '/home/user';
//             break;
//           case 'whoami':
//             response = 'user';
//             break;
//           case 'date':
//             response = new Date().toString();
//             break;
//           case 'uptime':
//             response = 'up 7 days, 14 hours, 32 minutes, load average: 2.45, 2.12, 1.98';
//             break;
//           case 'clear':
//             setTerminalOutput(['user@server-prod-01:~$ ']);
//             setCurrentCommand('');
//             return;
//           case 'exit':
//             handleDisconnect();
//             return;
//           default:
//             response = `bash: ${command}: command not found`;
//         }
//         setTerminalOutput(prev => [...prev, response, 'user@server-prod-01:~$ ']);
//       }, 500);
      
//       setCurrentCommand('');
//     }
//   };

//   const handleDisconnect = () => {
//     setIsConnected(false);
//     setShowPasswordInput(true);
//     setPassword('');
//     setTerminalOutput(['Connection closed.']);
//   };

//   const handleReconnect = () => {
//     setTerminalOutput(['Reconnecting...']);
//     setShowPasswordInput(true);
//     setIsConnected(false);
//     setPassword('');
//   };

//   const handleTerminate = () => {
//     setIsConnected(false);
//     setShowPasswordInput(true);
//     setPassword('');
//     setTerminalOutput(['Session terminated by user.']);
//   };

//   return (
//     <Card className="h-full">
//       <CardHeader className="pb-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <TerminalIcon className="h-5 w-5" />
//             <CardTitle>SSH Terminal</CardTitle>
//             <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
//           </div>
//           <div className="flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleReconnect}
//               disabled={isConnecting}
//             >
//               <RotateCcw className="h-4 w-4 mr-1" />
//               Reconnect
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleTerminate}
//               disabled={!isConnected}
//             >
//               <X className="h-4 w-4 mr-1" />
//               Terminate
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleDisconnect}
//               disabled={!isConnected}
//             >
//               <Power className="h-4 w-4 mr-1" />
//               Disconnect
//             </Button>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         {showPasswordInput && !isConnected ? (
//           <div className="space-y-4">
//             <div className="text-sm text-muted-foreground">
//               Enter password to connect to server-prod-01.example.com:
//             </div>
//             <div className="flex gap-2">
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleConnect()}
//                 disabled={isConnecting}
//               />
//               <Button onClick={handleConnect} disabled={!password || isConnecting}>
//                 {isConnecting ? 'Connecting...' : 'Connect'}
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             <div
//               ref={terminalRef}
//               className="bg-black text-green-400 font-mono text-sm p-4 rounded h-96 overflow-y-auto whitespace-pre-wrap"
//             >
//               {terminalOutput.map((line, index) => (
//                 <div key={index}>{line}</div>
//               ))}
//               {isConnected && (
//                 <div className="flex">
//                   <span>user@server-prod-01:~$ </span>
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     value={currentCommand}
//                     onChange={(e) => setCurrentCommand(e.target.value)}
//                     onKeyDown={handleCommand}
//                     className="bg-transparent border-none outline-none flex-1 text-green-400"
//                     autoFocus
//                   />
//                 </div>
//               )}
//             </div>
//             {isConnected && (
//               <div className="text-xs text-muted-foreground">
//                 Tip: Use 'clear' to clear terminal, 'exit' to disconnect. Ctrl+C to interrupt commands.
//               </div>
//             )}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default Terminal;


import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<Terminal | null>(null);
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Initialize terminal
    term.current = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
      },
    });

    term.current.open(terminalRef.current!);
    term.current.writeln('Connecting to terminal...\r\n');

    // Connect to backend WebSocket
    socket.current = new WebSocket('ws://localhost:8000/ws');

    // Handle connection open
    socket.current.onopen = () => {
      console.log('✅ WebSocket connected');
      term.current?.writeln('Connected!\r\n');
    };

    // Handle incoming messages (binary or string)
    socket.current.onmessage = async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text();
        term.current?.write(text);
      } else if (typeof event.data === 'string') {
        term.current?.write(event.data);
      }
    };

    // Handle terminal input
    term.current.onData((data) => {
      if (socket.current?.readyState === WebSocket.OPEN) {
        socket.current.send(data);
      } else {
        console.warn('WebSocket not open. readyState =', socket.current?.readyState);
      }
    });

    // Handle socket close
    socket.current.onclose = () => {
      console.log('❌ WebSocket closed');
      term.current?.writeln('\r\n[Session closed]');
    };

    socket.current.onerror = (err) => {
      console.error('WebSocket error', err);
      term.current?.writeln('\r\n[Connection error]');
    };

    // Cleanup
    return () => {
      term.current?.dispose();
      socket.current?.close();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1e1e1e',
        padding: "10px",
      }}
    />
  );
};

export default TerminalComponent;


