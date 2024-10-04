'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, MicOff, Video, VideoOff, Send, MonitorPlay, Timer } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup";
import './style.css';

export default function EnhancedLearningSession() {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    { sender: "System", text: "Welcome to your enhanced learning session!" },
    { sender: "Teacher", text: "Hi there! Let's explore our new features." },
  ]);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("chat");
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [quizOpen, setQuizOpen] = React.useState(false);
  const [quizAnswer, setQuizAnswer] = React.useState("");
  const [quizFeedback, setQuizFeedback] = React.useState("");

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        contextRef.current = context;
      }
    }
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (canvasRef.current && contextRef.current) {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const handleQuizSubmit = () => {
    setQuizOpen(false);
    setQuizFeedback(quizAnswer === "paris" ? "Correct!" : "Incorrect, the correct answer is Paris.");
    setQuizAnswer(""); // Clear the selected answer
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background">
      <header className="flex justify-between items-center p-4 bg-muted w-full">
        <h1 className="text-2xl font-bold mr-4">Each One Teach One - Enhanced Learning Session</h1>
        <div className="flex items-center space-x-4 ml-auto"> {/* Ensure this is in the rightmost position */}
          <span className="text-lg">{formatTime(elapsedTime)}</span>
          <Timer className="h-5 w-5 text-gray-600" />
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden w-full">
        <div className="flex-1 flex flex-col md:flex-row w-full">
          <div className="flex-1 p-4 w-full">
            <div className="bg-muted aspect-[16/9] rounded-lg flex items-center justify-center mb-4 video-area">
              <p className="text-muted-foreground">Video call area</p>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="circular-button"
              >
                {isMuted ? <MicOff className="h-6 w-6 text-gray-600" /> : <Mic className="h-6 w-6 text-gray-600" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsVideoOn(!isVideoOn)}
                aria-label={isVideoOn ? "Turn off video" : "Turn on video"}
                className="circular-button"
              >
                {isVideoOn ? <Video className="h-6 w-6 text-gray-600" /> : <VideoOff className="h-6 w-6 text-gray-600" />}
              </Button>
              <Button variant="outline" size="icon" aria-label="Share screen" className="circular-button">
                <MonitorPlay className="h-6 w-6 text-gray-600" />
              </Button>
              <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Start Quiz</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quick Quiz</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <h3 className="font-semibold mb-2">What is the capital of France?</h3>
                    <RadioGroup value={quizAnswer} onValueChange={setQuizAnswer}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paris" id="paris" />
                        <Label htmlFor="paris">Paris</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="london" id="london" />
                        <Label htmlFor="london">London</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="berlin" id="berlin" />
                        <Label htmlFor="berlin">Berlin</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button onClick={handleQuizSubmit}>Submit Answer</Button>
                  {quizFeedback && <p className="mt-2">{quizFeedback}</p>}
                </DialogContent>
              </Dialog>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="whiteboard">Whiteboard</TabsTrigger>
              </TabsList>
              <TabsContent value="chat" className="border rounded-md h-[300px]">
                <ScrollArea className="h-full p-4">
                  {messages.map((msg, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-semibold">{msg.sender}</p>
                      <p className="bg-muted p-2 rounded-md">{msg.text}</p>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="whiteboard" className="border rounded-md h-[300px] relative">
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full h-full cursor-crosshair"
                />
                <div className="absolute bottom-4 left-4">
                  <Button onClick={clearCanvas}>Clear</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-full p-4">
            <Separator orientation="vertical" />
            <div className="flex items-center space-x-2 mb-4">
  <Input
    type="text"
    placeholder="Type a message..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="flex-1" // Ensure the input takes remaining space
  />
  <Button onClick={handleSendMessage} className="flex-shrink-0"> {/* Prevent it from growing */}
    <Send className="h-4 w-4" />
  </Button>
</div>

          </div>
        </div>
      </main>
    </div>
  );
}
